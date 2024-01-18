import G1 from './g1_new';
import G2 from './g2_new';
import Fq12 from './fq12';
import Fq6 from './fq6';
import Fq2 from './fq2';
import Fq from './fq';
import G1Affine from './g1_affine';
import G2Affine from './g2_affine';
import { convertToObject, resolveModuleName } from 'typescript';

class LineEval {
    r: G2
    result: G2

    constructor(r: G2, result: G2) {
        this.r = r;
        this.result = result;
    }
}

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

    static XI_TO_Q_MINUS_1_OVER_2 = new Fq2(
        new Fq(2821565182194536844548159561693502659359617185244120367078079554186484126554n),
        new Fq(3505843767911556378687030309984248845540243509899259641013678093033130930403n)
    );

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

    static doubling_step_with_p(r: G2, p:G1Affine) {
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
        
        let cz = r.z.add(r.y);
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

        // It is correct up to here.

        tmp3 = tmp4;
        tmp3 = tmp3.mul(zsquared);
        tmp3 = tmp3.double();
        tmp3 = tmp3.neg();
        tmp3.c0 = tmp3.c0.mul(p.x); // algorithm 7
        tmp3.c1 = tmp3.c1.mul(p.x);

        tmp6 = tmp6.square();
        tmp6 = tmp6.sub(tmp0);
        tmp6 = tmp6.sub(tmp5);

        tmp1 = tmp1.double();
        tmp1 = tmp1.double();

        tmp6 = tmp6.sub(tmp1);
        
        tmp0 = cz;
        tmp0 = tmp0.mul(zsquared);
        tmp0 = tmp0.double();
        tmp0.c0 = tmp0.c0.mul(p.y);
        tmp1.c1 = tmp1.c1.mul(p.y);
        

        return new LineEval(
            new G2(
                cx,
                cy,
                cz
            ),
            new G2(
                tmp0,
                tmp3,
                tmp6
            )
        );
    }

    // Tested.
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
        zsquared = zsquared.square(); // zsquared is correct.

        let cx = tmp5;
        cx = cx.sub(tmp3);
        cx = cx.sub(tmp3);

        //let cz = r.y; // This is wrong.
        
        
        let cz = r.z.add(r.y);
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

        // It is correct up to here.

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


        return new LineEval(
            new G2(
                cx,
                cy,
                cz
            ),
            new G2(
                tmp0,
                tmp3,
                tmp6
            )
        );
        
    }

    static addition_step_with_p(r: G2, q_affine: G2Affine, p: G1Affine) {
        let zsquared = r.z;
        zsquared = zsquared.square();

        let t0 = zsquared;
        t0 = t0.mul(q_affine.x);

        let ysquared = q_affine.y;
        ysquared = ysquared.square();

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
        t10 = t10.add(cz);

        let t8 = t7;
        t8 = t8.sub(cx);
        t8 = t8.mul(t6);

        t0 = r.y; 
        t0 = t0.mul(t5);
        t0 = t0.double();

        let cy = t8;
        cy = cy.sub(t0);

        t10 = t10.square();
        t10 = t10.sub(ysquared);

        let ztsquared = cz;
        ztsquared = ztsquared.square();

        t10 = t10.sub(ztsquared);

        t9 = t9.double();
        t9 = t9.sub(t10);

        t10 = cz;
        t10 = t10.double(); //  (algorithm 7???) yp ile çarpmadık???
        t10.c0 = t10.c0.mul(p.y);
        t10.c1 = t10.c1.mul(p.y);

        t6 = t6.neg();

        t1 = t6;
        t1 = t1.double(); // (algorithm 7???) xp ile çarpmadık???
        t1.c0 = t1.c0.mul(p.x);
        t1.c1 = t1.c1.mul(p.y);

        
        return new LineEval(
            new G2(
                cx,
                cy,
                cz
            ),
            new G2(
                t10,
                t1,
                t9
            )
        );
    }

    // Burada, q_affine G2 Affine olacak. Ben bunu direk G2 olarak aldım.
    // Tested.
    static addition_step(r: G2, q_affine: G2Affine) {
        let zsquared = r.z;
        zsquared = zsquared.square();

        let t0 = zsquared;
        t0 = t0.mul(q_affine.x);

        let ysquared = q_affine.y;
        ysquared = ysquared.square();

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
        t10 = t10.add(cz);

        let t8 = t7;
        t8 = t8.sub(cx);
        t8 = t8.mul(t6);

        t0 = r.y; 
        t0 = t0.mul(t5);
        t0 = t0.double();

        let cy = t8;
        cy = cy.sub(t0);

        t10 = t10.square();
        t10 = t10.sub(ysquared);

        let ztsquared = cz;
        ztsquared = ztsquared.square();

        t10 = t10.sub(ztsquared);

        t9 = t9.double();
        t9 = t9.sub(t10);

        t10 = cz;
        t10 = t10.double(); //  (algorithm 7???) yp ile çarpmadık???

        t6 = t6.neg();

        t1 = t6;
        t1 = t1.double(); // (algorithm 7???) xp ile çarpmadık???

        
        return new LineEval(
            new G2(
                cx,
                cy,
                cz
            ),
            new G2(
                t10,
                t1,
                t9
            )
        );

        
    }

    static ell(f: Fq12, coeff: G2, p_affine: G1Affine) {
        let c0 = coeff.x;
        let c1 = coeff.y;

        c0.c0 = c0.c0.mul(p_affine.y);
        c0.c1 = c0.c1.mul(p_affine.y);


        c1.c0 = c1.c0.mul(p_affine.x);
        c1.c1 = c1.c1.mul(p_affine.x);

        // coeff_0
        let res_f = f.mul_by_034(c0, c1, coeff.z); // 
        return res_f;
    }

    static miller_loop(Q: G2Affine, P: G1Affine) {
        let f = Fq12.one();
        let r = Q.to_proj();

        let negq = new G2Affine(
            Q.x,
            Q.y.neg()
        );

        console.log("P İS")
        console.log(P.x.toBigInt());
        console.log(P.y.toBigInt());

        for (let i = 64; i > 0; i--) {
            if (i != 64) {
                f = f.square();
            }
            
            let line_eval = Pairing.doubling_step(r);
            r = line_eval.r;  
            let result = line_eval.result;
            // Buraya kadar doğru
            
            /*
                change the result in here
            */
            f = Pairing.ell(f, result, P);
            result.x.c0 = result.x.c0.mul(P.y);
            result.x.c1 = result.x.c1.mul(P.y);

            result.y.c0 = result.x.c0.mul(P.x);
            result.y.c1 = result.x.c1.mul(P.x);

            let x = Pairing.SIX_U_PLUS_2_NAF[i - 1];

            if (x == 1) {

                
                if (i == 64) {
                    console.log("r before addition is:")
                    console.log(r.x.c0.toBigInt());
                    console.log(r.x.c1.toBigInt());
                    console.log(r.y.c0.toBigInt());
                    console.log(r.y.c1.toBigInt());
                    console.log(r.z.c0.toBigInt());
                    console.log(r.z.c1.toBigInt()); 
                }

                if (i == 64) {
                    console.log("Q before addition is:")
                    console.log(Q.x.c0.toBigInt());
                    console.log(Q.x.c1.toBigInt());
                    console.log(Q.y.c0.toBigInt());
                    console.log(Q.y.c1.toBigInt());
                }

                let line_eval = Pairing.addition_step(r, Q);
                r = line_eval.r;
                let result = line_eval.result;
                    
                f = Pairing.ell(f, result, P);                
                result.x.c0 = result.x.c0.mul(P.y);
                result.x.c1 = result.x.c1.mul(P.y);

                result.y.c0 = result.x.c0.mul(P.x);
                result.y.c1 = result.x.c1.mul(P.x);
            
                if (i == 64) {
                    console.log("r after addition is:")
                    console.log(r.x.c0.toBigInt());
                    console.log(r.x.c1.toBigInt());
                    console.log(r.y.c0.toBigInt());
                    console.log(r.y.c1.toBigInt());
                    console.log(r.z.c0.toBigInt());
                    console.log(r.z.c1.toBigInt()); 


                    console.log("result after addition is:")
                    console.log(result.x.c0.toBigInt());
                    console.log(result.x.c1.toBigInt());
                    console.log(result.y.c0.toBigInt());
                    console.log(result.y.c1.toBigInt());
                    console.log(result.z.c0.toBigInt());
                    console.log(result.z.c1.toBigInt()); 
                }   
                
            }

            if (x == -1) {
                let line_eval = Pairing.addition_step(r, negq);
                r = line_eval.r;
                let result = line_eval.result;
                f = Pairing.ell(f, result, P);
                result.x.c0 = result.x.c0.mul(P.y);
                result.x.c1 = result.x.c1.mul(P.y);

                result.y.c0 = result.x.c0.mul(P.x);
                result.y.c1 = result.x.c1.mul(P.x);
            }
        }

        return f;
        
    }

    static miller_loop_with_p(Q: G2Affine, P: G1Affine) {
        let f = Fq12.one();
        let r = Q.to_proj();

        let negq = new G2Affine(
            Q.x,
            Q.y.neg()
        );
        

        for (let i = 64; i >= 0; i--) {
            /*if (i != 64) {
                f = f.square();
            }*/

            f = f.square();

            let line_eval = this.doubling_step_with_p(r, P);
            r = line_eval.r;
            let result = line_eval.result;
            f = f.mul_by_034(result.x, result.y, result.z);

            let x = Pairing.SIX_U_PLUS_2_NAF[i - 1];

            if (x == 1) {
                let line_eval = this.addition_step_with_p(r, Q, P);
                r = line_eval.r;
                let result = line_eval.result;
                f = f.mul_by_034(result.x, result.y, result.z);

                if (i == 64) {
                    console.log("result after addition is:")
                    console.log(result.x.c0.toBigInt());
                    console.log(result.x.c1.toBigInt());
                    console.log(result.y.c0.toBigInt());
                    console.log(result.y.c1.toBigInt());
                    console.log(result.z.c0.toBigInt());
                    console.log(result.z.c1.toBigInt()); 
                }
            }

            if (x == -1) {
                let line_eval = this.addition_step_with_p(r, negq, P);
                r = line_eval.r;
                let result = line_eval.result;
                f = f.mul_by_034(result.x, result.y, result.z);
            }

            let q1 = Q;
            q1.x.c1 = q1.x.c1.neg();
            q1.x = q1.x.frobenius_map(1n).mul(q1.x);

            q1.y.c1 = q1.y.c1.neg();
            q1.y = q1.y.mul(this.XI_TO_Q_MINUS_1_OVER_2);

            let line_eval_0 = this.addition_step_with_p(r, q1, P);
            r = line_eval_0.r;
            result = line_eval.result;

            f = f.mul_by_034(result.x, result.y, result.z);

        }

        return f;

    }

    /*q1.x.c1 = q1.x.c1.neg();
        q1.x.mul_assign(&FROBENIUS_COEFF_FQ6_C1[1]);

        q1.y.c1 = q1.y.c1.neg();
        q1.y.mul_assign(&XI_TO_Q_MINUS_1_OVER_2);

        coeffs.push(addition_step(&mut r, &q1));

        let mut minusq2 = q;
        minusq2.x.mul_assign(&FROBENIUS_COEFF_FQ6_C1[2]);

        coeffs.push(addition_step(&mut r, &minusq2));*/

    static pair(Q: G2Affine, P: G1Affine) {
        let f = Pairing.miller_loop(Q, P);
        f = Pairing.final_exponentiation(f);
        return f;
    }

    static pair_with_p(Q: G2Affine, P: G1Affine) {
        let f = Pairing.miller_loop_with_p(Q, P);
        f = Pairing.final_exponentiation(f);
        return f;
    }
}