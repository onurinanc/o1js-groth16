import { zkAppProver } from "o1js/dist/node/lib/account_update";
import assert from "o1js/dist/node/lib/errors";
import { UInt64 } from 'o1js/dist/node/provable/field-bigint';

const Limbs = 4;
const Bits = 254;
const Bytes = 32;

const q0 = UInt64(4332616871279656263n);
const q1 = UInt64(10917124144477883021n);
const q2 = UInt64(13281191951274694749n);
const q3 = UInt64(3486998266802970665n);

const qInvNeg = UInt64(9786893198990664585n)

export default class Element{
    q0: UInt64;
    q1: UInt64;
    q2: UInt64;
    q3: UInt64;

    constructor(_q0: UInt64, _q1: UInt64, _q2: UInt64, _q3: UInt64) {
        this.q0 = _q0;
        this.q1 = _q1;
        this.q2 = _q2;
        this.q3 = _q3;
    }

    static qElement() {
        return new Element(q0, q1, q2, q3);
    }

    /*mod(value: bigint): bigint {
        return value >= 0n
            ? value % this.modulus
            : ((value % this.modulus) + this.modulus) % this.modulus;
    }

    add(x: Element) {
        return new Element(this.mod(this.value + x.value));
    }

    sub(x: Element) {
        return new Element(this.mod(this.value - x.value));
    }

    mul(x: Element) {
        return new Element(this.mod(this.value * x.value));
    }

    div(x: Element) {
        return new Element(this.mod(this.mul(x.inv()).value));
    }

    // this * this = this^2
    square() {
        return new Element(this.mul(this).value);
    }

    // this + this = 2 * this
    double() {
        return new Element(this.add(this).value);
    }

    inv() {
        let low = this.mod(this.value);
        if (low === 0n) return new Element(0n);
        let lm = 1n, hm = 0n;
        let high = this.modulus;

        while (low > 1n) {
            let r = high / low;
            let nm = hm - lm * r;
            let nw = high - low * r;

            high = low;
            hm = lm;
            lm = nm;
            low = nw;
        }
        return new Element(this.mod(lm));
    }

    neg() {
        return new Element(this.mod(0n - this.value));
    }

    exp(exponent: Element) {
        let base = new Element(this.mod(this.value));

        if (base.value === 0n) {
            if (exponent.value === 0n) {
                throw new TypeError('Base and exponent cannot be both 0');
            }
            return new Element(0n);
        }

        // handle raising to negative power
        if (exponent.value < 0n) {
            base = base.inv();
            exponent = exponent.neg();
        }

        let result = new Element(1n);
        while (exponent.value > 0n) {
            if (exponent.value % 2n) {
                result = result.mul(base);
            }
            exponent = new Element(exponent.value / 2n);
            base = base.mul(base);
        }

        return result;
    }

    assertEquals(x: Element, message?: string) {
        try {
          if (this.value !== x.value) {
              throw Error(`Field.assertEquals(): ${this.value} != ${x.value}`);
            }
            return;
        } catch (err) {
          throw this.withMessage(err, message);

        }
    }

    withMessage(error: unknown, message?: string) {
        if (message === undefined || !(error instanceof Error)) return error;
        error.message = `${message}\n${error.message}`;
        return error;
    }

    equals(x: Element) {
        if (this.value === x.value) {
            return true;
        } else {
            return false;
        }
    }*/

    static rSquare() {
        return new Element(
            UInt64(17522657719365597833),
            UInt64(13107472804851548667),
            UInt64(5164255478447964150),
            UInt64(493319470278259999)
        )
    }

    static newElement(v: UInt64) {
        
    }

}