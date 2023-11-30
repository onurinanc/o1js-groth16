/*
Fq.ts uses {ForeignField, Field3} from {Gadgets}
*/
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";
import Fq2 from "./fq2";

/// An element of Fq2, represented by c0 + c1 * u; where u^2 = -1.

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

}