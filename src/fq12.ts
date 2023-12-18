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
    
}

