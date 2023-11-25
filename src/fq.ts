/*
Fq.ts uses {ForeignField, Field3} from {Gadgets}
*/
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";

export default class Fq{
    value: Field3;
    modulus: bigint;

    constructor(value: bigint) {
        this.modulus = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;
        this.value = Field3.from(value);
    }

    add(x: Fq) {
        return new Fq(
            Field3.toBigint(ForeignField.add(this.value, x.value, this.modulus))
        );
    }

    toBigInt() {
        return Field3.toBigint(this.value);
    }

    sub(x: Fq) {
        return new Fq(
            Field3.toBigint(ForeignField.sub(this.value, x.value, this.modulus))
        );
    }

    mul(x: Fq) {
        return new Fq(
            Field3.toBigint(ForeignField.mul(this.value, x.value, this.modulus))
        );
    }
}