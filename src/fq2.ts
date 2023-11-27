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
    
}

