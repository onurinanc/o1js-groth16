/*
Fq.ts uses {ForeignField, Field3} from {Gadgets}
*/
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";
import Fq2 from "./fq2";
import Fq from "./fq";

// An element of Fq6, represented by c0 + c1 * v + c2 * v^2

export default class Fq6{
    c0: Fq2;
    c1: Fq2;
    c2: Fq2;

    constructor(c0: Fq2, c1: Fq2, c2: Fq2) {
        this.c0 = c0;
        this.c1 = c1;
        this.c2 = c2;
    }

    add(other: Fq6) {
        return new Fq6(
            this.c0.add(other.c0),
            this.c1.add(other.c1),
            this.c2.add(other.c2)
        );
    }

    sub(other: Fq6) {
        return new Fq6(
            this.c0.sub(other.c0),
            this.c1.sub(other.c1),
            this.c2.sub(other.c2)
        );
    }

    mul(other: Fq6) {
        let a_a = this.c0;
        let b_b = this.c1;
        let c_c = this.c2;
        a_a = a_a.mul(other.c0);
        b_b = b_b.mul(other.c1); // burada a_a.mul yapmışım bu yüzden hata çıktı.
        c_c = c_c.mul(other.c2); // burada a_a.mul yapmışım bu yüzden hata çıktı.

        let t1 = other.c1;
        t1 = t1.add(other.c2);

        let tmp = this.c1;
        tmp = tmp.add(this.c2);

        t1 = t1.mul(tmp);
        t1 = t1.sub(b_b);
        t1 = t1.sub(c_c);
        t1 = t1.mul_by_nonresidue();
        t1 = t1.add(a_a);

        let t3 = other.c0;
        t3 = t3.add(other.c2);

        tmp = this.c0;
        tmp = tmp.add(this.c2);

        t3 = t3.mul(tmp);
        t3 = t3.sub(a_a);
        t3 = t3.add(b_b);
        t3 = t3.sub(c_c);

        let t2 = other.c0;
        t2 = t2.add(other.c1);

        tmp = this.c0;
        tmp = tmp.add(this.c1);

        t2 = t2.mul(tmp);
        t2 = t2.sub(a_a);
        t2 = t2.sub(b_b);
        c_c = c_c.mul_by_nonresidue();
        t2 = t2.add(c_c);

        return new Fq6(
            t1,
            t2,
            t3
        );
    }

    neg() {
        return new Fq6(
            this.c0.neg(),
            this.c1.neg(),
            this.c2.neg()
        )
    }

    double() {
        return new Fq6(
            this.c0.double(),
            this.c1.double(),
            this.c2.double()
        )
    }

    square() {
        // s0 = a^2
        let s0 = this.c0;
        s0 = s0.square();

        // s1 = 2ab
        let ab = this.c0;
        ab = ab.mul(this.c1);
        let s1 = ab;
        s1 = s1.double();

        // s2 = (a - b + c)^2
        let s2 = this.c0;
        s2 = s2.sub(this.c1);
        s2 = s2.add(this.c2);
        s2 = s2.square();

        // bc
        let bc = this.c1;
        bc = bc.mul(this.c2);

        // s3 = 2bc
        let s3 = bc;
        s3 = bc.double();

        // s4 = c^2
        let s4 = this.c2;
        s4 = s4.square();

        // new c0 = 2bc.mul_by_xi + a^2
        let c0 = s3;
        c0 = c0.mul_by_nonresidue();
        c0 = c0.add(s0);

        // new c1 = (c^2).mul_by_xi + 2ab
        let c1 = s4;
        c1 = c1.mul_by_nonresidue();
        c1 = c1.add(s1);

        // new c2 = 2ab + (a - b + c)^2 + 2bc - a^2 - c^2 = b^2 + 2ac
        let c2 = s1;
        c2 = c2.add(s2);
        c2 = c2.add(s3);
        c2 = c2.sub(s0);
        c2 = c2.sub(s4);

        return new Fq6(
            c0,
            c1,
            c2
        );
    }

    mul_by_nonresidue() {
        return new Fq6(
            this.c2.mul_by_nonresidue(),
            this.c0,
            this.c1
        );
    }

    mul_by_1(c1: Fq2) {
        let b_b = this.c1;
        b_b = b_b.mul(c1);

        let t1 = c1;
        let tmp = this.c1;
        tmp = tmp.add(this.c2);

        t1 = t1.mul(tmp);
        t1 = t1.sub(b_b);
        t1 = t1.mul_by_nonresidue();

        let t2 = c1;
        tmp = this.c0;
        tmp = tmp.add(this.c1);

        t2 = t2.mul(tmp);
        t2 = t2.sub(b_b);

        return new Fq6(
            t1,
            t2,
            b_b
        );
    }

    mul_by_01(c0: Fq2, c1: Fq2) {
        let a_a = this.c0;
        let b_b = this.c1;
        a_a = a_a.mul(c0);
        b_b = b_b.mul(c1);

        let t1 = c1;
        let tmp = this.c1;
        tmp = tmp.add(this.c2);

        t1 = t1.mul(tmp);
        t1 = t1.sub(b_b);
        t1 = t1.mul_by_nonresidue();
        t1 = t1.add(a_a);

        let t3 = c0;
        tmp = this.c0;
        tmp = tmp.add(this.c2);

        t3 = t3.mul(tmp);
        t3 = t3.sub(a_a);
        t3 = t3.add(b_b);

        let t2 = c0;
        t2 = t2.add(c1);

        tmp = this.c0;
        tmp = tmp.add(this.c1);

        t2 = t2.mul(tmp);
        t2 = t2.sub(a_a);
        t2 = t2.sub(b_b);

        return new Fq6(
            t1,
            t2,
            t3
        );
    }

    invert() {
        let c0 = this.c2;
        c0 = c0.mul_by_nonresidue();
        c0 = c0.mul(this.c1);
        c0 = c0.neg();

        let c0s = this.c0; // c0 or this.c0
        c0s = c0s.square();
        c0 = c0.add(c0s);

        let c1 = this.c2; 
        c1 = c1.square();
        c1 = c1.mul_by_nonresidue();

        let c01 = this.c0; // c0 or this c0
        c01 = c01.mul(this.c1) // c1 or this c1
        c1 = c1.sub(c01);

        let c2 = this.c1; // or this.c1??
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

        return new Fq6(
            c0,
            c1,
            c2
        );
    }

    // FROBENIUS_COEFF_FQ6_C1 Constants
    // fq2 0
    // 1
    // 0
    // fq2 1
    // 21575463638280843010398324269430826099269044274347216827212613867836435027261
    // 10307601595873709700152284273816112264069230130616436755625194854815875713954
    // fq2 2
    // 21888242871839275220042445260109153167277707414472061641714758635765020556616
    // 0
    // fq2 3
    // 3772000881919853776433695186713858239009073593817195771773381919316419345261
    // 2236595495967245188281701248203181795121068902605861227855261137820944008926
    // fq2 4
    // 2203960485148121921418603742825762020974279258880205651966
    // 0
    // fq2 5
    // 18429021223477853657660792034369865839114504446431234726392080002137598044644
    // 9344045779998320333812420223237981029506012124075525679208581902008406485703

    frobenius_map(power: bigint) {
        let c0 = this.c0.frobenius_map(power);
        let c1 = this.c1.frobenius_map(power);
        let c2 = this.c2.frobenius_map(power);

        if (power %6n == 0n) {
            return new Fq6(
                c0,
                c1.mul(
                    new Fq2(
                        new Fq(1n),
                        new Fq(0n)
                    )
                ),
                c2.mul(
                    new Fq2(
                        new Fq(1n),
                        new Fq(0n)
                    )
                )
            );
        } else if (power %6n == 1n) {
            return new Fq6(
                c0,
                c1.mul(
                    new Fq2(
                        new Fq(21575463638280843010398324269430826099269044274347216827212613867836435027261n),
                        new Fq(10307601595873709700152284273816112264069230130616436755625194854815875713954n)
                    )
                ),
                c2.mul(
                    new Fq2(
                        new Fq(2581911344467009335267311115468803099551665605076196740867805258568234346338n),
                        new Fq(19937756971775647987995932169929341994314640652964949448313374472400716661030n)
                    )
                )
            );
        } else if (power %6n == 2n) {
            return new Fq6(
                c0,
                c1.mul(
                    new Fq2(
                        new Fq(21888242871839275220042445260109153167277707414472061641714758635765020556616n),
                        new Fq(0n)
                    )
                ),
                c2.mul(
                    new Fq2(
                        new Fq(2203960485148121921418603742825762020974279258880205651966n),
                        new Fq(0n)
                    )
                )
            );
        } else if (power %6n == 3n) {
            return new Fq6(
                c0,
                c1.mul(
                    new Fq2(
                        new Fq(3772000881919853776433695186713858239009073593817195771773381919316419345261n),
                        new Fq(2236595495967245188281701248203181795121068902605861227855261137820944008926n)
                    )
                ),
                c2.mul(
                    new Fq2(
                        new Fq(5324479202449903542726783395506214481928257762400643279780343368557297135718n),
                        new Fq(16208900380737693084919495127334387981393726419856888799917914180988844123039n)
                    )
                )
            );
        } else if (power %6n == 4n) {
            return new Fq6(
                c0,
                c1.mul(
                    new Fq2(
                        new Fq(2203960485148121921418603742825762020974279258880205651966n),
                        new Fq(0n)
                    )
                ),
                c2.mul(
                    new Fq2(
                        new Fq(21888242871839275220042445260109153167277707414472061641714758635765020556616n),
                        new Fq(0n)
                    )
                )
            );
        } else {
            return new Fq6(
                c0,
                c1.mul(
                    new Fq2(
                        new Fq(18429021223477853657660792034369865839114504446431234726392080002137598044644n),
                        new Fq(9344045779998320333812420223237981029506012124075525679208581902008406485703n)
                    )
                ),
                c2.mul(
                    new Fq2(
                        new Fq(13981852324922362344252311234282257507216387789820983642040889267519694726527n),
                        new Fq(7629828391165209371577384193250820201684255241773809077146787135900891633097n)
                    )
                )
            );
        }
    }

    // need test
    static one() {

    }

    static zero() {

    }

    
}

