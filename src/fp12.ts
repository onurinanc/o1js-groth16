import PrimeField from './primeField';
import Fp2 from './fp2';
import Fp6 from './fp6';

export default class Fp12{
    // c0 + c1 * w
    c0: Fp6;
    c1: Fp6;
    
    constructor(c0: Fp6, c1: Fp6) {
        // we can add checks later
        this.c0 = c0;
        this.c1 = c1;
    }

    static zero() {
        return new Fp12(
            Fp6.zero(),
            Fp6.zero()
        );
    }

    static one() {
        return new Fp12(
            Fp6.one(),
            Fp6.zero()
        );
    }

    add(y: Fp12) {
        return new Fp12(
            this.c0.add(y.c0),
            this.c1.add(y.c1)
        );
    }

    sub(y: Fp12) {
        return new Fp12(
            this.c0.sub(y.c0),
            this.c1.sub(y.c1)
        );
    }

    mul(y: Fp12) {
        let t0 = this.c0.mul(y.c0);
        let t1 = this.c1.mul(y.c1);
        let t2 = y.c0.add(y.c1);

        let c1 = this.c1.add(this.c0);
        c1 = c1.mul(t2);
        c1 = c1.sub(t0);
        c1 = c1.sub(t1);

        t1 = t1.mul_by_nonresidue();
        let c0 = t0.add(t1);

        return new Fp12(
            c0,
            c1
        );
    }

    double() {
        return new Fp12(
            this.c0.double(),
            this.c1.double()
        )
    }

    square() {
        let ab = this.c0.mul(this.c1);
        let c0c1 = this.c0.add(this.c1);
        let c0 = this.c1.mul_by_nonresidue();
        c0 = c0.add(this.c0);
        c0 = c0.mul(c0c1);
        c0 = c0.sub(ab);

        let c1 = ab.add(ab);
        let tmp = ab.mul_by_nonresidue();
        c0 = c0.sub(tmp);

        return new Fp12(
            c0,
            c1
        );
    }

    neg() {
        return new Fp12(
            this.c0.neg(),
            this.c1.neg()
        );
    }

    conjugate() {
        return new Fp12(
            this.c0,
            this.c1.neg()
        );
    }

    assertEquals(y: Fp12) {
        this.c0.assertEquals(y.c0);
        this.c1.assertEquals(y.c1);
    }

    isZero() {
        this.c0.assertEquals(new Fp6(
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n))));
        
        this.c1.assertEquals(new Fp6(
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n))));  
    }

    isOne() {
        this.c0.assertEquals(new Fp6(
            new Fp2(new PrimeField(1n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n))));
        
        this.c1.assertEquals(new Fp6(
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n))));  
    }

    invert() {
        let c0s = this.c0.mul(this.c0);
        let c1s = this.c1.mul(this.c1);
        c1s = c1s.mul_by_nonresidue();
        c0s = c0s.sub(c1s);
        let c0 = c0s.invert();
        let c1 = c0s.invert();
        c0 = c0.mul(this.c0);
        c1 = c1.mul(this.c1);
        c1 = c1.neg();
        
        return new Fp12(
            c0,
            c1
        );
    }

    // Algorithm 28 from: https://eprint.iacr.org/2010/354.pdf
    frobenius() {
        let t1 = this.c0.c0.conjugate();
        let t2 = this.c1.c0.conjugate();
        let t3 = this.c0.c1.conjugate();
        let t4 = this.c1.c1.conjugate();
        let t5 = this.c0.c2.conjugate();
        let t6 = this.c1.c2.conjugate();

        t2 = t2.mul_by_non_residue_1_power_1();
        t3 = t3.mul_by_non_residue_1_power_2();
        t4 = t4.mul_by_non_residue_1_power_3();
        t5 = t5.mul_by_non_residue_1_power_4();
        t6 = t6.mul_by_non_residue_1_power_5();

        let c0 = new Fp6(
            t1,
            t3,
            t5
        );

        let c1 = new Fp6(
            t2,
            t4,
            t6
        );

        return new Fp12(
            c0,
            c1
        );
    }

    // Algorithm 29 from: https://eprint.iacr.org/2010/354.pdf
    frobenius_square() {
        let t1 = this.c0.c0;
        let t2 = this.c1.c0.mul_by_non_residue_2_power_1();
        let t3 = this.c0.c1.mul_by_non_residue_2_power_2();
        let t4 = this.c1.c1.mul_by_non_residue_2_power_3();
        let t5 = this.c0.c2.mul_by_non_residue_2_power_4();
        let t6 = this.c1.c2.mul_by_non_residue_2_power_5();

        let c0 = new Fp6(
            t1,
            t3,
            t5
        );

        let c1 = new Fp6(
            t2,
            t4,
            t6
        );

        return new Fp12(
            c0,
            c1
        );
    }

    // Algorithm 30 from: https://eprint.iacr.org/2010/354.pdf
    frobenius_cube() {
        let t1 = this.c0.c0.conjugate();
        let t2 = this.c1.c0.conjugate();
        let t3 = this.c0.c1.conjugate();
        let t4 = this.c1.c1.conjugate();
        let t5 = this.c0.c2.conjugate();
        let t6 = this.c1.c2.conjugate();

        t2 = t2.mul_by_non_residue_3_power_1();
        t3 = t3.mul_by_non_residue_3_power_2();
        t4 = t4.mul_by_non_residue_3_power_3();
        t5 = t5.mul_by_non_residue_3_power_4();
        t6 = t6.mul_by_non_residue_3_power_5();

        let c0 = new Fp6(
            t1,
            t3,
            t5
        );

        let c1 = new Fp6(
            t2,
            t4,
            t6
        );

        return new Fp12(
            c0,
            c1
        );
    }

    cyclotomic_square() {
        let t0 = this.c1.c1.square();
        let t1 = this.c0.c0.square();
        let t6 = this.c1.c1.add(this.c0.c0);
        t6 = t6.square();
        t6 = t6.sub(t0);
        t6 = t6.sub(t1);
        let t2 = this.c0.c2.square();
        let t3 = this.c1.c0.square();
        let t7 = this.c0.c2.add(this.c1.c0);
        t7 = t7.square();
        t7 = t7.sub(t2);
        t7 = t7.sub(t3);
        let t4 = this.c1.c2.square();
        let t5 = this.c0.c1.square();
        let t8 = this.c1.c2.add(this.c0.c1);
        t8 = t8.square();
        t8 = t8.sub(t4);
        t8 = t8.sub(t5);
        t8 = t8.mul_by_nonresidue();

        t0 = t0.mul_by_nonresidue();
        t0 = t0.add(t1);
        t2 = t2.mul_by_nonresidue();
        t2 = t2.add(t3);
        t4 = t4.mul_by_nonresidue();
        t4 = t4.add(t5);

        let c0c0 = t0.sub(this.c0.c0);
        c0c0 = c0c0.double();
        c0c0 = c0c0.add(t0);

        let c0c1 = t2.sub(this.c0.c1);
        c0c1 = c0c1.double();
        c0c1 = c0c1.add(t2);

        let c0c2 = t4.sub(this.c0.c2);
        c0c2 = c0c2.double();
        c0c2 = c0c2.add(t4);

        let c1c0 = t8.add(this.c1.c0);
        c1c0 = c1c0.double();
        c1c0 = c1c0.add(t8);

        let c1c1 = t6.add(this.c1.c1);
        c1c1 = c1c1.double();
        c1c1 = c1c1.add(t6);

        let c1c2 = t7.add(this.c1.c2);
        c1c2 = c1c2.double();
        c1c1 = c1c2.add(t7);

        let c0 = new Fp6(
            c0c0,
            c0c1,
            c0c2
        );

        let c1 = new Fp6(
            c1c0,
            c1c1,
            c1c2
        );

        return new Fp12(
            c0,
            c1
        );
    }

    // n: any?
    n_square(n: any) {
        let x = new Fp12(
            this.c0,
            this.c1
        );

        for (let i = 0; i < n; i++) {
            x = x.cyclotomic_square();
        }

        return x;
    } 

    exponentiation() {
        let t3 = this.cyclotomic_square();
        let t5 = t3.cyclotomic_square();
        let result = t5.cyclotomic_square();
        let t0 = result.cyclotomic_square();
        let t2 = this.mul(t0);
        t0 = t2.mul(t3);
        let t1 = this.mul(t0);
        let t4 = result.mul(t2);
        let t6 = t2.cyclotomic_square();
        t1 = t1.mul(t0);
        t0 = t1.mul(t3);
        t6 = t6.n_square(6);
        t5 = t5.mul(t6);
        t5 = t4.mul(t5);
        t5 = t5.n_square(7);
        t4 = t4.mul(t5);
        t4 = t4.n_square(8);
        t4 = t4.mul(t0);
        t3 = t3.mul(t4);
        t3 = t3.n_square(6);
        t2 = t2.mul(t3);
        t2 = t2.n_square(8);
        t2 = t0.mul(t2);
        t2 = t2.n_square(6);
        t2 = t0.mul(t2);
        t2 = t2.n_square(10);
        t1 = t1.mul(t2);
        t1 = t1.n_square(6);
        t0 = t0.mul(t1);
        result = result.mul(t0);
        
        return result;
    }

    
}