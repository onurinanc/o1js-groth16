import Fp2 from './fp2';
import PrimeField from './primeField';

export default class Fp6{
    // c0 + c1 * v + c2 * v^2
    c0: Fp2;
    c1: Fp2;
    c2: Fp2;
    
    constructor(c0: Fp2, c1: Fp2, c2: Fp2) {
        // we can add checks later
        this.c0 = c0;
        this.c1 = c1;
        this.c2 = c2;
    }

    static zero() {
        return new Fp6(
            Fp2.zero(),
            Fp2.zero(),
            Fp2.zero()
        );
    }

    static one() {
        return new Fp6(
            Fp2.one(),
            Fp2.zero(),
            Fp2.zero()
        );
    }

    add(y: Fp6) {
        return new Fp6(
            this.c0.add(y.c0),
            this.c1.add(y.c1),
            this.c2.add(y.c2)
        );
    }

    sub(y: Fp6) {
        return new Fp6(
            this.c0.sub(y.c0),
            this.c1.sub(y.c1),
            this.c2.sub(y.c2)
        );
    }

    mul(y: Fp6) {
        let a_a = this.c0.mul(y.c0);
        let b_b = this.c1.mul(y.c1);
        let c_c = this.c2.mul(y.c2);

        // Construct t1
        let t1 = y.c1;
        t1 = t1.add(y.c2);

        let tmp = this.c1.add(this.c2);
        t1 = t1.mul(tmp);
        t1 = t1.sub(b_b);
        t1 = t1.sub(c_c);
        t1 = t1.mul_by_nonresidue();
        t1 = t1.add(a_a);

        // Construct t3
        let t3 = y.c0;
        t3 = t3.add(y.c2);

        tmp = this.c0.add(this.c2);
        t3 = t3.mul(tmp);
        t3 = t3.sub(a_a);
        t3 = t3.add(b_b);
        t3 = t3.sub(c_c);

        // Construct t2
        let t2 = y.c0;
        t2 = t2.add(y.c1);

        tmp = this.c0.add(this.c1);
        t2 = t2.mul(tmp);
        t2 = t2.sub(a_a);
        t2 = t2.sub(b_b);
        let c_c_mul_by_nonres = c_c.mul_by_nonresidue();
        t2 = t2.add(c_c_mul_by_nonres);

        return new Fp6(
            t1,
            t2,
            t3
        );
    }

    double() {
        return new Fp6(
            this.c0.double(),
            this.c1.double(),
            this.c2.double()
        )
    }

    // Algorithm 16 from: https://eprint.iacr.org/2010/354.pdf
    // this won't work due to pallas
    square() {
        let c4 = this.c0.mul(this.c1);
        c4 = c4.double();
        let c5 = this.c2.square();
        let tmp = c5.mul_by_nonresidue();
        let c1 = tmp.add(c4);
        let c2 = c4.sub(c5);
        let c3 = this.c0.square();
        c4 = this.c0.sub(this.c1);
        c4 = c4.add(this.c2);
        c5 = this.c1.mul(this.c2);
        c5 = c5.double();
        c4 = c4.square();
        tmp = c5.mul_by_nonresidue();
        let c0 = tmp.add(c3);
        c2 = c2.add(c4);
        c2 = c2.add(c5);
        c2 = c2.sub(c3);

        return new Fp6(
            c0,
            c1,
            c2
        );
    }

    neg() {
        return new Fp6(
            this.c0.neg(),
            this.c1.neg(),
            this.c2.neg()
        );
    }

    assertEquals(y: Fp6) {
        this.c0.assertEquals(y.c0);
        this.c1.assertEquals(y.c1);
        this.c2.assertEquals(y.c2);
    }

    isZero() {
        this.c0.assertEquals(new Fp2(new PrimeField(0n), new PrimeField(0n)));
        this.c1.assertEquals(new Fp2(new PrimeField(0n), new PrimeField(0n)));
        this.c2.assertEquals(new Fp2(new PrimeField(0n), new PrimeField(0n)));
    }

    isOne() {
        this.c0.assertEquals(new Fp2(new PrimeField(1n), new PrimeField(0n)));
        this.c1.assertEquals(new Fp2(new PrimeField(0n), new PrimeField(0n)));
        this.c2.assertEquals(new Fp2(new PrimeField(0n), new PrimeField(0n)));
    }

    invert() {
        let c0 = this.c2;
        c0 = c0.mul_by_nonresidue();
        c0 = c0.mul(this.c1);
        c0 = c0.neg();

        let c0s = this.c0;
        c0s = c0s.square();
        c0 = c0.add(c0s);

        let c1 = this.c2;
        c1 = c1.square();
        c1 = c1.mul_by_nonresidue();

        let c01 = this.c0;
        c01 = c01.mul(this.c1);
        c1 = c1.sub(c01);

        let c2 = this.c1;
        c2 = c2.square();
        let c02 = this.c0;
        c02 = c02.mul(this.c2);
        c2 = c2.sub(c02);

        let tmp1 = this.c2;
        tmp1 = tmp1.mul(c1);
        let tmp2 = this.c1;
        tmp2 = tmp2.mul(c2);
        tmp1 = tmp1.add(tmp2);
        tmp1 = tmp1.mul_by_nonresidue();
        tmp2 = this.c0;
        tmp2 = tmp2.mul(c0);
        tmp1 = tmp1.add(tmp2);

        let tmp = tmp1.invert();
        c0 = tmp.mul(c0);
        c1 = tmp.mul(c1);
        c2 = tmp.mul(c2);

        return new Fp6(
            c0,
            c1,
            c2
        );
    }

    // Multiply by cubic nonresidue v
    // c0, c1, c2 -> c2, c0, c1

    mul_by_nonresidue() {
        return new Fp6(
            this.c2.mul_by_nonresidue(),
            this.c0,
            this.c1
        );
    }
}