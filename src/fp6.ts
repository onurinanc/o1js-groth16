import {Field, Poseidon} from 'o1js';
import Fp2 from './fp2';

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

    /*zero() {

    }*/

    /*one() {

    }*/

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
        this.c0.assertEquals(new Fp2(Field(0), Field(0)));
        this.c1.assertEquals(new Fp2(Field(0), Field(0)));
        this.c2.assertEquals(new Fp2(Field(0), Field(0)));
    }

    isOne() {
        this.c0.assertEquals(new Fp2(Field(1), Field(0)));
        this.c0.assertEquals(new Fp2(Field(0), Field(0)));
        this.c0.assertEquals(new Fp2(Field(0), Field(0)));
    }

    // Algorithm 17 from: https://eprint.iacr.org/2010/354.pdf
    // this won't work due to Pallas
    invert() {
        let t0 = this.c0.square();
        let t1 = this.c1.square();
        let t2 = this.c2.square();

        let t3 = this.c0.mul(this.c1);
        let t4 = this.c0.mul(this.c2);
        let t5 = this.c2.mul(this.c1);

        let tmp = t5.mul_by_nonresidue();
        let c0 = t0.sub(tmp);
        
        tmp = t2.mul_by_nonresidue();
        let c1 = tmp.sub(t3);

        let c2 = t1.mul(t4);

        let t6 = this.c0.mul(c0);

        tmp = this.c2.mul(c1);
        tmp = tmp.mul_by_nonresidue();
        t6 = t6.add(tmp);

        tmp = this.c1.mul(c2);
        tmp = tmp.mul_by_nonresidue();
        t6 = t6.add(tmp);

        t6 = t6.invert();

        c0 = c0.mul(t6);
        c1 = c1.mul(t6);
        c2 = c2.mul(t6);
        
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