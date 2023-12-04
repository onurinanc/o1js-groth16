/*
Fq.ts uses {ForeignField, Field3} from {Gadgets}
*/
import { Field } from "o1js";
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";

const bn254_prime = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;
const zero = Field3.from(0n);

export default class Fq{
    value: Field3;

    constructor(value: Field3) {
        this.value = value;
    }

    add(x: Fq) {
        return new Fq(
            ForeignField.add(this.value, x.value, bn254_prime)
        );
    }

    sub(x: Fq) {
        return new Fq(
            ForeignField.sub(this.value, x.value, bn254_prime)
        );
    }

    // For logging reasons, will not be used in the circuit.
    toBigInt() {
        return Field3.toBigint(this.value);
    }

    mul(x: Fq) {
        return new Fq(
            ForeignField.mul(this.value, x.value, bn254_prime)
        );
    }

    inv(){
        return new Fq(
            ForeignField.inv(this.value, bn254_prime)
        );
    }

    double() {
        return new Fq(
            ForeignField.add(this.value, this.value, bn254_prime)
        );
    }

    square() {
        return new Fq(
            ForeignField.mul(this.value, this.value, bn254_prime)
        );
    }

    div(x: Fq) {
        return new Fq(
            ForeignField.div(this.value, x.value, bn254_prime)
        );
    }

    static zero() {
        new Fq(
            zero
        )
    }
    
    // need test for this
    // is it provable
    neg() {
        return new Fq(
            ForeignField.sub(zero, this.value, bn254_prime)
        );
    }


}

