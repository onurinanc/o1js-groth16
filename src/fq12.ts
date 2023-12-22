/*
Fq.ts uses {ForeignField, Field3} from {Gadgets}
*/
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";
import Fq6 from './fq6';
import Fq2 from "./fq2";
import Fq from "./fq";

/// An element of Fq2, represented by c0 + c1 * w; where u^2 = -1.

export default class Fq12{
    c0: Fq6;
    c1: Fq6;

    constructor(c0: Fq6, c1: Fq6) {
        this.c0 = c0;
        this.c1 = c1;
    }

    add(other: Fq12) {
        return new Fq12(
            this.c0.add(other.c0),
            this.c1.add(other.c1),
        );
    }

    sub(other: Fq12) {
        return new Fq12(
            this.c0.sub(other.c0),
            this.c1.sub(other.c1),
        );
    }

    neg() {
        return new Fq12(
            this.c0.neg(),
            this.c1.neg()
        )
    }

    double() {
        return new Fq12(
            this.c0.double(),
            this.c1.double()
        )
    }

    mul(other: Fq12) {
        let t0 = this.c0.mul(other.c0);
        let t1 = this.c1.mul(other.c1);
        let t2 = other.c0.add(other.c1);

        let c1 = this.c1.add(this.c0);
        c1 = c1.mul(t2);
        c1 = c1.sub(t0);
        c1 = c1.sub(t1);

        t1 = t1.mul_by_nonresidue();
        let c0 = t0.add(t1);

        return new Fq12(
            c0,
            c1
        );
    }

    square() {
        let ab = this.c0.mul(this.c1);

        let c0c1 = this.c0.add(this.c1);

        let c0 = this.c1;
        c0 = c0.mul_by_nonresidue();
        c0 = c0.add(this.c0);
        c0 = c0.mul(c0c1);
        c0 = c0.sub(ab);

        let c1 = ab;
        c1 = c1.add(ab);
        ab = ab.mul_by_nonresidue();
        c0 = c0.sub(ab);
        
        return new Fq12(
            c0,
            c1
        );
    }

    conjugate() {
        return new Fq12(
            this.c0,
            this.c1.neg()
        )
    }
    
    mul_by_014(c0: Fq2, c1: Fq2, c4: Fq2) {
        let aa = this.c0;
        aa = aa.mul_by_01(c0, c1);
        let bb = this.c1;
        bb = bb.mul_by_1(c4);
        let o = c1.add(c4);

        let c1_new = this.c1.add(this.c0); // check this
        c1_new = c1_new.mul_by_01(c0, o);
        c1_new = c1_new.sub(aa);
        c1_new = c1_new.sub(bb);

        let c0_new = bb;
        c0_new = c0_new.mul_by_nonresidue();
        c0_new = c0_new.add(aa);

        return new Fq12(
            c0_new,
            c1_new
        );
    }

    mul_by_034(c0: Fq2, c3: Fq2, c4: Fq2) {
        let t0 = new Fq6(
            this.c0.c0.mul(c0),
            this.c0.c1.mul(c0),
            this.c0.c2.mul(c0)
        );

        let t1 = this.c1;
        t1 = t1.mul_by_01(c3, c4);
        let o = c0.add(c3);
        let t2 = this.c0.add(this.c1);
        t2 = t2.mul_by_01(o, c4);
        t2 = t2.sub(t0);

        let c1_new = t2.sub(t1);
        t1 = t1.mul_by_nonresidue();
        let c0_new = t0.add(t1);

        return new Fq12(
            c0_new,
            c1_new
        );
    }

    invert() {
        let c0s = this.c0;
        c0s = c0s.square();

        let c1s = this.c1;
        c1s = c1s.square();
        c1s = c1s.mul_by_nonresidue();
        c0s = c0s.sub(c1s);

        let t = c0s.invert();
        let c0 = t.mul(this.c0); // check this
        let c1 = t.mul(this.c1); // check this
        c1 = c1.neg();

        return new Fq12(
            c0,
            c1
        );

    }

    // instead of transforming
    // let's return c0 of Fq6 and c1 of Fq6
    // we can change Fq2.zero() later
    fp4_square(a0: Fq2, a1: Fq2) {
        let t0 = a0.square();
        let t1 = a1.square();
        let t2 = t1;
        t2 = t2.mul_by_nonresidue();
        let c0 = t2.add(t0);
        t2 = a0.add(a1);
        t2 = t2.square();
        t2 = t2.sub(t0);
        let c1 = t2.sub(t1);

        return new Fq6(
            c0,
            c1,
            Fq2.zero()
        );
    }

    cyclotomic_square() {
        let t3_t4 = this.fp4_square(this.c0.c0, this.c1.c1);
        let t3 = t3_t4.c0;
        let t4 = t3_t4.c1;

        let t2 = t3.sub(this.c0.c0);
        t2 = t2.double();
        
        let new_c0_c0 = t2.add(t3);

        t2 = t4.add(this.c1.c1);
        t2 = t2.double();

        let new_c1_c1 = t2.add(t4);

        let new_t3_t4 = this.fp4_square(this.c1.c0, this.c0.c2);

        t3 = new_t3_t4.c0; // Check this
        t4 = new_t3_t4.c1; // Check this

        let t5_t6 = this.fp4_square(this.c0.c1, this.c1.c2);

        let t5 = t5_t6.c0;
        let t6 = t5_t6.c1;

        t2 = t3.sub(this.c0.c1);
        t2 = t2.double();

        let new_c0_c1 = t2.add(t3);
        t2 = t4.add(this.c1.c2);
        t2 = t2.double();

        let new_c1_c2 = t2.add(t4);
        t3 = t6;
        t3 = t3.mul_by_nonresidue();
        t2 = t3.add(this.c1.c0);
        t2 = t2.double();
        let new_c1_c0 = t2.add(t3);
        t2 = t5.sub(this.c0.c2);
        t2 = t2.double();
        let new_c0_c2 = t2.add(t5);

        return new Fq12(
            new Fq6(
                new_c0_c0,
                new_c0_c1,
                new_c0_c2
            ),
            new Fq6(
                new_c1_c0,
                new_c1_c1,
                new_c1_c2
            )
        );
    }

    // be sure power is provable    
    frobenius_map(power: bigint) {
        let c0 = this.c0.frobenius_map(power);
        let c1 = this.c1.frobenius_map(power);

        if (power %12n == 0n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(1n),
                new Fq(0n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        } else if (power %12n == 1n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(8376118865763821496583973867626364092589906065868298776909617916018768340080n),
                new Fq(16469823323077808223889137241176536799009286646108169935659301613961712198316n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 2n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(21888242871839275220042445260109153167277707414472061641714758635765020556617n),
                new Fq(0n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 3n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(11697423496358154304825782922584725312912383441159505038794027105778954184319n),
                new Fq(303847389135065887422783454877609941456349188919719272345083954437860409601n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 4n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(21888242871839275220042445260109153167277707414472061641714758635765020556616n),
                new Fq(0n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 5n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(3321304630594332808241809054958361220322477375291206261884409189760185844239n),
                new Fq(5722266937896532885780051958958348231143373700109372999374820235121374419868n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 6n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(21888242871839275222246405745257275088696311157297823662689037894645226208582n),
                new Fq(0n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 7n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(13512124006075453725662431877630910996106405091429524885779419978626457868503n),
                new Fq(5418419548761466998357268504080738289687024511189653727029736280683514010267n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 8n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(2203960485148121921418603742825762020974279258880205651966n),
                new Fq(0n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 9n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(10190819375481120917420622822672549775783927716138318623895010788866272024264n),
                new Fq(21584395482704209334823622290379665147239961968378104390343953940207365798982n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else if (power %12n == 10n) {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(2203960485148121921418603742825762020974279258880205651967n),
                new Fq(0n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

        else {
            let frobenius_coeff_fq12_c1 = new Fq2(
                new Fq(18566938241244942414004596690298913868373833782006617400804628704885040364344n),
                new Fq(16165975933942742336466353786298926857552937457188450663314217659523851788715n)
            );

            return new Fq12(
                c0,
                new Fq6(
                    c1.c0.mul(frobenius_coeff_fq12_c1),
                    c1.c1.mul(frobenius_coeff_fq12_c1),
                    c1.c2.mul(frobenius_coeff_fq12_c1)
                )
            );
        }

    }
}

