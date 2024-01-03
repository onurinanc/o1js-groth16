import Fq from "./fq";

export default class G1{   
    x: Fq;
    y: Fq;
    z: Fq;

    constructor(x: Fq, y: Fq, z: Fq) {
        // we can add checks later
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static a = new Fq(0n);
    static b = new Fq(3n);

    static generator() {
        return new G1(
            new Fq(1n),
            new Fq(2n),
            new Fq(1n)
        );
    }

    static identity() {
        return new G1(
            new Fq(0n),
            new Fq(1n),
            new Fq(0n)
        )
    }

    withMessage(error: unknown, message?: string) {
        if (message === undefined || !(error instanceof Error)) return error;
        error.message = `${message}\n${error.message}`;
        return error;
    }

    add(other: G1) {
        let t0 = this.x.mul(other.x);
        let t1 = this.y.mul(other.y);
        let t2 = this.z.mul(other.z);
        let t3 = this.x.add(this.y);
        let t4 = other.x.add(other.y);
        t3 = t3.mul(t4);
        t4 = t0.add(t1);
        t3 = t3.sub(t4);
        t4 = this.y.add(this.z);
        let x3 = other.y.add(other.z);
        t4 = t4.mul(x3);
        x3 = t1.add(t2);
        t4 = t4.sub(x3);
        x3 = this.x.add(this.z);
        let y3 = other.x.add(other.z);
        x3 = x3.mul(y3);
        y3 = t0.add(t2);
        y3 = x3.sub(y3);
        x3 = t0.add(t0);
        t0 = x3.add(t0);

        //t2 = t2.mul_by_3b();
        let input = t2;
        t2 = t2.double();
        t2 = t2.double();
        t2 = t2.double();
        t2 = t2.add(input);

        let z3 = t1.add(t2);
        t1 = t1.sub(t2);

        //y3 = y3.mul_by_3b();
        input = y3;
        y3 = y3.double();
        y3 = y3.double();
        y3 = y3.double();
        y3 = y3.add(input);

        x3 = t4.mul(y3);
        t2 = t3.mul(t1);
        x3 = t2.sub(x3);
        y3 = y3.mul(t0);
        t1 = t1.mul(z3);
        y3 = t1.add(y3);
        t0 = t0.mul(t3);
        z3 = z3.mul(t4);
        z3 = z3.add(t0);

        return new G1(
            x3,
            y3,
            z3
        );
    }

    double() {
        let t0 = this.y.square();
        let z3 = t0.add(t0);
        z3 = z3.add(z3);
        z3 = z3.add(z3);
        let t1 = this.y.mul(this.z);
        let t2 = this.z.square();

        //t2 = t2.mul_by_3b();
        let input = t2;
        t2 = t2.double();
        t2 = t2.double();
        t2 = t2.double();
        t2 = t2.add(input);

        let x3 = t2.mul(z3);
        let y3 = t0.add(t2);
        z3 = t1.mul(z3);
        t1 = t2.add(t2);
        t2 = t1.add(t2);
        t0 = t0.sub(t2);
        y3 = t0.mul(y3);
        y3 = x3.add(y3);
        t1 = this.x.mul(this.y);
        x3 = t0.mul(t1);
        x3 = x3.add(x3);

        return new G1(
            x3,
            y3,
            z3
        );
    }

    to_affine() {
        let z_inv = this.z.inv();
        let x = this.x.mul(z_inv);
        let y = this.y.mul(z_inv);

        // conditional_select??

        // As an affine, let's have z = 0 with G1
        return new G1(
            x,
            y,
            new Fq(0n)
        )
    }
    
}