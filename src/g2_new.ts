import Fq from "./fq";
import Fq2 from "./fq2";
import G2Affine from "./g2_affine";

export default class G2{   
    x: Fq2;
    y: Fq2;
    z: Fq2;

    constructor(x: Fq2, y: Fq2, z: Fq2) {
        // we can add checks later
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static a = new Fq2(
        new Fq(0n),
        new Fq(0n)
    );

    static b = new Fq2(
        new Fq(19485874751759354771024239261021720505790618469301721065564631296452457478373n),
        new Fq(266929791119991161246907387137283842545076965332900288569378510910307636690n)
    );

    static curve_constant_3b = new Fq2(
        new Fq(14681138511599513868579906292550611339979233093309515871315818100066920017953n),
        new Fq(800789373359973483740722161411851527635230895998700865708135532730922910070n)
    );

    static generator() {
        return new G2(
            new Fq2(
                new Fq(10857046999023057135944570762232829481370756359578518086990519993285655852781n),
                new Fq(11559732032986387107991004021392285783925812861821192530917403151452391805634n)
            ),
            new Fq2(
                new Fq(8495653923123431417604973247489272438418190587263600148770280649306958101930n),
                new Fq(4082367875863433681332203403145435568316851327593401208105741076214120093531n)
            ),
            new Fq2(
                new Fq(1n),
                new Fq(0n)
            )
        );
    }

    static identity() {
        return new G2(
            new Fq2(
                new Fq(0n),
                new Fq(0n)
            ),
            new Fq2(
                new Fq(1n),
                new Fq(0n)
            ),
            new Fq2(
                new Fq(0n),
                new Fq(0n)
            )
        );
    }

    withMessage(error: unknown, message?: string) {
        if (message === undefined || !(error instanceof Error)) return error;
        error.message = `${message}\n${error.message}`;
        return error;
    }

    add(other: G2) {
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
        t2 = t2.mul(G2.curve_constant_3b);

        let z3 = t1.add(t2);
        t1 = t1.sub(t2);

        //y3 = y3.mul_by_3b();
        y3 = y3.mul(G2.curve_constant_3b);

        x3 = t4.mul(y3);
        t2 = t3.mul(t1);
        x3 = t2.sub(x3);
        y3 = y3.mul(t0);
        t1 = t1.mul(z3);
        y3 = t1.add(y3);
        t0 = t0.mul(t3);
        z3 = z3.mul(t4);
        z3 = z3.add(t0);

        return new G2(
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
        t2 = t2.mul(G2.curve_constant_3b);

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

        return new G2(
            x3,
            y3,
            z3
        );
    }

    to_affine() {
        let z_inv = this.z.invert();
        let x = this.x.mul(z_inv);
        let y = this.y.mul(z_inv);

        // conditional_select??

        // As an affine, let's have z = 0 with G1
        return new G2Affine(
            x,
            y
        )
    }
    
}