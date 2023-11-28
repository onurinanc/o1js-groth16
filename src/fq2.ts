/*
Fq.ts uses {ForeignField, Field3} from {Gadgets}
*/
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";
import Fq from "./fq";

/// An element of Fq2, represented by c0 + c1 * u; where u^2 = -1.

export default class Fq2{
    c0: Fq;
    c1: Fq;

    constructor(c0: Fq, c1: Fq) {
        this.c0 = c0;
        this.c1 = c1;
    }

    add(other: Fq2) {
        return new Fq2(
            this.c0.add(other.c0),
            this.c1.add(other.c1)
        );
    }

    sub(other: Fq2) {
        return new Fq2(
            this.c0.sub(other.c0),
            this.c1.sub(other.c1)
        );
    }

    mul(other: Fq2) {
        let t0 = this.c0.add(this.c1);
        let t1 = this.c0.mul(other.c0);
        let t2 = this.c1.mul(other.c1);

        let c0 = t1.sub(t2);
        let c1 = other.c0.add(other.c1);

        t1 = t1.add(t2);
        t0 = t0.mul(c1);
        c1 = t0.sub(t1);
        
        return new Fq2(
            c0,
            c1
        );
    }

    // https://github.com/privacy-scaling-explorations/halo2curves/blob/526c07cbac8358f2f661e2f5d84de02d476897c8/src/bn256/fq2.rs#L241
    neg() {
        return new Fq2(
            this.c0.neg(),
            this.c1.neg()
        );
    }

    conjugate() {
        return new Fq2(
            this.c0,
            this.c1.neg()
        );
    }

    double() {
        return new Fq2(
            this.c0.double(),
            this.c1.double()
        )
    }
    
}

