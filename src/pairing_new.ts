import G1 from './g1_new';
import G2 from './g2_new';
import Fq12 from './fq12';
import Fq6 from './fq6';

export default class Pairing{

    static BN_X_BINARY = [
        0, 1, 0, 0, 0, 1, 0, 0, 
        1, 1, 1, 0, 1, 0, 0, 1, 
        1, 0, 0, 1, 0, 0, 1, 0, 
        1, 0, 1, 1, 0, 1, 0, 0, 
        0, 1, 0, 0, 1, 0, 1, 0, 
        0, 1, 1, 0, 1, 0, 0, 1, 
        0, 0, 0, 0, 1, 0, 0, 1, 
        1, 1, 1, 1, 0, 0, 0, 1
    ];

    static SIX_U_PLUS_2_NAF = [
        0, 0, 0, 1, 0, 1, 0, -1, 0, 0, 1, -1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 0, 0, 1, 0, -1, 0, 0, 0, 0,
        1, 1, 1, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 1, 0, 0, -1, 0, 0, 0, 1, 1, 0, -1, 0,
        0, 1, 0, 1, 1,
    ];

    static final_exponentiation(r: Fq12) {
        let f1 = r;
        f1 = f1.conjugate();

        let f2 = r.invert();
        r = f1;
        r = r.mul(f2);
        f2 = r;
        r = r.frobenius_map(2n);
        r = r.mul(f2);
        // Buraya kadar doğru.

        let fp = r;
        fp = fp.frobenius_map(1n);

        let fp2 = r;
        fp2 = fp2.frobenius_map(2n);
        let fp3 = fp2;
        fp3 = fp3.frobenius_map(1n);

        // Buraya kadar doğru

        let fu = r;
        fu = fu.exp_by_x();

        let fu2 = fu;
        fu2 = fu2.exp_by_x();

        let fu3 = fu2;
        fu3 = fu3.exp_by_x();

        // Buraya kadar doğru

        let y3 = fu;
        y3 = y3.frobenius_map(1n);

        let fu2p = fu2;
        fu2p = fu2p.frobenius_map(1n);

        let fu3p = fu3;
        fu3p = fu3p.frobenius_map(1n);

        let y2 = fu2;
        y2 = y2.frobenius_map(2n);

        // Buraya kadar doğru

        let y0 = fp;
        y0 = y0.mul(fp2);
        y0 = y0.mul(fp3);

        let y1 = r;
        y1 = y1.conjugate();

        let y5 = fu2;
        y5 = y5.conjugate();

        y3 = y3.conjugate();

        let y4 = fu;
        y4 = y4.mul(fu2p);
        y4 = y4.conjugate();

        let y6 = fu3;
        y6 = y6.mul(fu3p);
        y6 = y6.conjugate();

        // Buraya kadar doğru

        y6 = y6.cyclotomic_square();

        // Buraya kadar doğru

        y6 = y6.mul(y4);
        y6 = y6.mul(y5);

        let t1 = y3;
        t1 = t1.mul(y5);
        t1 = t1.mul(y6);

        y6 = y6.mul(y2);

        t1 = t1.cyclotomic_square();
        t1 = t1.mul(y6);
        t1 = t1.cyclotomic_square();

        let t0 = t1;
        t0 = t0.mul(y1);

        t1 = t1.mul(y0);

        t0 = t0.cyclotomic_square();
        t0 = t0.mul(t1);

        return t0;
    }

    // haven't test it yet.
    static doubling_step(r: G2) {
        let tmp0 = r.x;
        tmp0 = tmp0.square();

        let tmp1 = r.y;
        tmp1 = tmp1.square();

        let tmp2 = tmp1;
        tmp2 = tmp2.square();

        let tmp3 = tmp1;
        tmp3 = tmp3.add(r.x);
        tmp3 = tmp3.square();
        tmp3 = tmp3.sub(tmp0);
        tmp3 = tmp3.sub(tmp2);
        tmp3 = tmp3.double();

        let tmp4 = tmp0;
        tmp4 = tmp4.double();
        tmp4 = tmp4.add(tmp0);

        let tmp6 = r.x;
        tmp6 = tmp6.add(tmp4);

        let tmp5 = tmp4;
        tmp5 = tmp5.square();

        let zsquared = r.z;
        zsquared = zsquared.square();

        let cx = tmp5;
        cx = cx.sub(tmp3);
        cx = cx.sub(tmp3);

        let cz = r.y;
        cz = cz.square();
        cz = cz.sub(tmp1);
        cz = cz.sub(zsquared);

        let cy = tmp3;
        cy = cy.sub(cx);
        cy = cy.mul(tmp4);

        tmp2 = tmp2.double();
        tmp2 = tmp2.double();
        tmp2 = tmp2.double();

        cy = cy.sub(tmp2);

        tmp3 = tmp4;
        tmp3 = tmp3.mul(zsquared);
        tmp3 = tmp3.double();
        tmp3 = tmp3.neg();

        tmp6 = tmp6.square();
        tmp6 = tmp6.sub(tmp0);
        tmp6 = tmp6.sub(tmp5);

        tmp1 = tmp1.double();
        tmp1 = tmp1.double();

        tmp6 = tmp6.sub(tmp1);

        tmp0 = cz;
        tmp0 = tmp0.mul(zsquared);
        tmp0 = tmp0.double();

        return new G2(
            tmp0,
            tmp3,
            tmp6
        );
        
    }

    // Burada, q_affine G2 Affine olacak. Ben bunu direk G2 olarak aldım.
    // * Test edilmedi
    // * Test ederken affine olduğuna özen göster.
    static addition_step(r: G2, q_affine: G2) {
        let zsquared = r.z;
        zsquared = zsquared.square();

        let ysquared = q_affine.y;
        ysquared = ysquared.square();

        let t0 = zsquared;
        t0 = t0.mul(q_affine.x);

        let t1 = q_affine.y;
        t1 = t1.add(r.z);
        t1 = t1.square();
        t1 = t1.sub(ysquared);
        t1 = t1.sub(zsquared);
        t1 = t1.mul(zsquared);

        let t2 = t0;
        t2 = t2.sub(r.x);

        let t3 = t2;
        t3 = t3.square();

        let t4 = t3;
        t4 = t4.double();
        t4 = t4.double();

        let t5 = t4;
        t5 = t5.mul(t2);

        let t6 = t1;
        t6 = t6.sub(r.y);
        t6 = t6.sub(r.y);

        let t9 = t6;
        t9 = t9.mul(q_affine.x);

        // stay at line 348.
        let t7 = t4;
        t7 = t7.mul(r.x);

        let cx = t6;
        cx = cx.square();
        cx = cx.sub(t5);
        cx = cx.sub(t7);
        cx = cx.sub(t7);

        let cz = r.z.add(t2);
        cz = cz.square();
        cz = cz.sub(zsquared);
        cz = cz.sub(t3);

        let t10 = q_affine.y;
        t10 = t10.add(r.z);

        let t8 = t7;
        t8 = t8.sub(r.x);
        t8 = t8.mul(t6);

        t0 = r.y;
        t0 = t0.mul(t5);
        t0 = t0.double();

        let cy = t8;
        cy = cy.sub(t0);

    }



    static pair(Q: G2, P: G1) {

    }
}