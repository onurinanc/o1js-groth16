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

    static INV_CONST() {
        return new Fq(
            9786893198990664000n
        );
    }

    static R() {
        return new Fq(
            6350874878119819312338956282401532409788428879151445726012394534686998597021n,
        );
    }

    static R_INV_TEMP() {
        return new Fq(
            20988524275117001072002809824448087578619730785600314334253784976379291040311n,
        );
    }

    static R_INV_GPT() {
        return new Fq(
            1314162783548850030710075498808357129191011388855789191592867893308385983439n,
        );
    }



    static R2() {
        return new Fq(
            3096616502983703923843567936837374451735540968419076528771170197431451843209n
        );
    }

    static R3() {
        return new Fq(
            14921786541159648185948152738563080959093619838510245177710943249661917737183n
        )
    }

    static NEGATIVE_ONE() {
        return new Fq(
            15537367993719455909907449462855742678907882278146377936676643359958227611562n
        )
    }

    // We are not sure in here
    static one() {
        return Fq.R();
    }

    static TWO_INV() {
        return new Fq(
            10944121435919637611123202872628637544348155578648911831344518947322613104292n
        )
    }

    static ROOT_OF_UNITY() {
        return new Fq(
            21888242871839275222246405745257275088696311157297823662689037894645226208582n
        );
    }

    static ROOT_OF_UNITY_INV() {
        return new Fq(
            21888242871839275222246405745257275088696311157297823662689037894645226208582n
        );
    }

    static MULTIPLICATIVE_GENERATOR() {
        return new Fq(
            3n
        );
    }

    static DELTA() {
        return new Fq(
            9n
        );
    }

    inv(){
        return new Fq(
            Field3.toBigint(ForeignField.inv(this.value, this.modulus))
        );
    }

    double() {
        return new Fq(
            Field3.toBigint(this.add(this).value)
        );
    }

    square() {
        return new Fq(
            Field3.toBigint(this.mul(this).value)
        );
    }

    div(x: Fq) {
        return new Fq(
            Field3.toBigint(ForeignField.div(this.value, x.value, this.modulus))
        );
    }  
    
    // need test for this
    neg() {
        return new Fq(
            Field3.toBigint(ForeignField.sub(Field3.from(0n), this.value, this.modulus))
        );
    }

    static zero() {
        return new Fq(
            Field3.toBigint(Field3.from(0n))
        );
    }


}