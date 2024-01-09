import G1 from './g1_new';
import G2 from './g2_new';
import Fq12 from './fq12';

class LineEval {
    L: Fq12
    T: G2

    constructor(L: Fq12, T:G2) {
        this.L = L;
        this.T = T;
    }
}

export default class Pairing{

    static line_eval: [Fq12, G2];

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

    static pair(Q: G2, P: G1) {

    }
}