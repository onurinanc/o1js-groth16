import Fq from "./fq";
import G1 from "./g1_new";

export default class G1Affine{   
    x: Fq;
    y: Fq;

    constructor(x: Fq, y: Fq) {
        // we can add checks later
        this.x = x;
        this.y = y;
    }

    to_proj() {
        return new G1(
            this.x,
            this.y,
            new Fq(1n)
        );
    }

    static a = new Fq(0n);
    static b = new Fq(3n);

    static generator() {
        return new G1Affine(
            new Fq(1n),
            new Fq(2n),
        );
    }

    static identity() {
        return new G1Affine(
            new Fq(0n),
            new Fq(1n)
        )
    }
    
}