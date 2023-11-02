import {Field, Group, Poseidon} from 'o1js';
import Fp12 from './fp12';
import Fp6 from './fp6';
import Fp2 from './fp2';
import G2Group from './g2_depreceated';
import { NAF_DIGIT } from './const';
import { assertPreconditionInvariants } from 'o1js/dist/node/lib/precondition';

class LineEval {
    L: Fp12
    T: G2Group

    constructor(L: Fp12, T:G2Group) {
        this.L = L;
        this.T = T;
    }
}

export default class Pairing{

    static line_eval: [Fp12, G2Group];

    // Algorithm 26 from: https://eprint.iacr.org/2010/354.pdf
    static line_function_double_point(q: G2Group, p: Group) {
        let tmp0 = q.x.square();
        let tmp1 = q.y.square();
        let tmp2 = tmp1.square();
        let x = tmp1.add(q.x);
        x = x.square();
        x = x.sub(tmp0);
        let tmp3 = x.sub(tmp2);
        tmp3 = tmp3.double();
        let tmp4 = tmp0.add(tmp0.double());
        let tmp6 = q.x.add(tmp4);
        let tmp5 = tmp4.square();
        let X_T = tmp5.sub(tmp3.double());
        let Z_T = q.y.add(q.z);
        Z_T = Z_T.square();
        Z_T = Z_T.sub(tmp1);
        Z_T = Z_T.sub(q.z.square());
        let Y_T = tmp3.sub(X_T);
        Y_T = Y_T.mul(tmp4);
        let tmp2_8 = tmp2.double();
        tmp2_8 = tmp2_8.double();
        tmp2_8 = tmp2_8.double();
        Y_T = Y_T.sub(tmp2_8);
        tmp3 = tmp4.mul(q.z.double());
        tmp3 = tmp3.double();
        tmp3 = tmp3.neg();
        tmp3 = tmp3.mul_by_b0(p.x); 
        tmp6 = tmp6.square();
        tmp6 = tmp6.sub(tmp0);
        tmp6 = tmp6.sub(tmp5);
        let tmp1_4 = tmp1.double();
        tmp1_4 = tmp1_4.double();
        tmp6 = tmp6.sub(tmp1_4);
        tmp0 = Z_T.mul(q.z.square());
        tmp0 = tmp0.double();
        tmp0 = tmp0.mul_by_b0(p.y);

        let a0 = new Fp6(
            tmp0,
            Fp2.zero(),
            Fp2.zero(),
        );

        let a1 = new Fp6(
            tmp3,
            tmp6,
            Fp2.zero(),
        );

        let l = new Fp12(
            a0,
            a1,
        );

        let T = new G2Group(
            X_T,
            Y_T,
            Z_T,
        )

        return new LineEval(
            l,
            T
        );
    }

    // Algorithm 27 from: https://eprint.iacr.org/2010/354.pdf
    static line_function_add_point(q: G2Group, r: G2Group, p: Group) {
        let t0 = q.x.mul(r.z.square());
        let t1 = q.y.add(r.z);
        t1 = t1.square();
        t1 = t1.sub(q.y.square());
        t1 = t1.sub(r.z.square());
        t1 = t1.mul(r.z.square());
        let t2 = t0.sub(r.x);
        let t3 = t2.square();
        let t4 = t3.double();
        t4 = t4.double();
        let t5 = t4.mul(t2);
        let t6 = t1.sub(r.y.double());
        let t9 = t6.mul(q.x);
        let t7 = r.x.mul(t4);
        let X_T = t6.square();
        X_T = X_T.sub(t5);
        X_T = X_T.sub(t7.double());
        let Z_T = r.z.add(t2);
        Z_T = Z_T.square();
        Z_T = Z_T.sub(r.z.square());
        Z_T = Z_T.sub(t3);
        let t10 = q.y.add(Z_T);
        let t8 = t7.sub(X_T);
        t8 = t8.mul(t6);
        t0 = r.y.mul(t5);
        t0 = t0.double();
        let Y_T = t8.sub(t0);
        t10 = t10.square();
        t10 = t10.sub(q.y.square());
        t10 = t10.sub(Z_T.square());
        t9 = t9.double();
        t9 = t9.sub(t10);
        t10 = Z_T.mul_by_b0(p.y);
        t10 = t10.double();
        t6 = t6.neg();
        t1 = t6.mul_by_b0(p.x);
        t1 = t1.double();

        let l0 = new Fp6(
            t10,
            Fp2.zero(),
            Fp2.zero(),
        );

        let l1 = new Fp6(
            t1,
            t9,
            Fp2.zero(),
        );

        let l = new Fp12(
            l0,
            l1,
        );

        let T = new G2Group(
            X_T,
            Y_T,
            Z_T
        );

        return new LineEval(
            l,
            T
        );
    }   

    static final_exponentiation(z: Fp12) {
        // Easy part

        let result = z;
        let t0 = z.conjugate();
        result = result.invert();
        t0 = t0.mul(result);
        result = t0.frobenius_square();
        result = result.mul(t0);

        // Hard part
        // https://eprint.iacr.org/2015/192.pdf

        t0 = result.exponentiation();
        t0 = t0.conjugate();
        t0 = t0.cyclotomic_square();
        let t2 = t0.exponentiation();
        t2 = t2.conjugate();
        let t1 = t2.cyclotomic_square();
        t2 = t2.mul(t1);
        t2 = t2.mul(result);
        t1 = t2.exponentiation();
        t1 = t1.cyclotomic_square();
        t1 = t1.mul(t2);
        t1 = t1.conjugate();
        let t3 = t1.conjugate();
        t1 = t0.cyclotomic_square();
        t1 = t1.mul(result);
        t1 = t1.conjugate();
        t1 = t1.mul(t3);
        t0 = t0.mul(t1);
        t2 = t2.mul(t1);
        t3 = t1.frobenius_square();
        t2 = t2.mul(t3);
        t3 = result.conjugate();
        t3 = t3.mul(t0);
        t1 = t3.frobenius_cube();
        t2 = t2.mul(t1);
        t1 = t0.frobenius();
        t1 = t1.mul(t2);

        return t1;
    }

    static miller_loop(Q: G2Group, P:Group) {
        let ate_loop_count = 29793968203157093288;
        let log_ate_loop_count = 63;
        let T = Q;
        let f = Fp12.one();

        for (let i = 0; i > 64; i++) {
            let line_evaluated = Pairing.line_function_double_point(T, P);
            f = f.square();
            f = f.mul(line_evaluated.L);
            T = line_evaluated.T;

            if (NAF_DIGIT[i] == 2) {
                let Q_NEG = Q.neg();
                let line_evaluated = Pairing.line_function_add_point(T, Q_NEG, P);
                f = f.mul(line_evaluated.L);
                T = line_evaluated.T;
            } else if (NAF_DIGIT[i] == 1) {
                let line_evaluated = Pairing.line_function_add_point(T, Q, P);
                f = f.mul(line_evaluated.L);
                T = line_evaluated.T;
            }
        }

        let q1x = Q.x.conjugate();
        let q1y = Q.y.conjugate();
        q1x = q1x.mul_by_non_residue_1_power_2();
        q1y = q1y.mul_by_non_residue_1_power_3();
        let Q1 = G2Group.fromAffine(q1x, q1y);

        // Q2 <- pi_p_square(Q);
        let q2x = Q.x.mul_by_non_residue_2_power_2();
        let q2y = Q.y.mul_by_non_residue_2_power_3();
        q2y = q2y.neg();
        // Q2 is negated above to use directly in the line_function
        let Q2 = G2Group.fromAffine(q2x, q2y);

        // Line eval with Q1
        let line_evaluated = Pairing.line_function_add_point(T, Q1, P);
        f = f.mul(line_evaluated.L);
        T = line_evaluated.T;

        // Line eval with Q2
        line_evaluated = Pairing.line_function_add_point(T, Q2, P);
        f = f.mul(line_evaluated.L);
        return f;
    }

    static pair(Q: G2Group, P: Group) {
        let res = this.miller_loop(Q, P);
        res = this.final_exponentiation(res);
        return res;
    }
}