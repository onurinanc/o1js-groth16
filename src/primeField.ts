import assert from "o1js/dist/node/lib/errors";

export default class PrimeField{
    modulus: bigint;
    value: bigint;

    constructor(value: bigint) {
        this.modulus = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;
        this.value = this.mod(value);
    }

    static INV() {
        return new PrimeField(9786893198990664585n);
    }

    mod(value: bigint): bigint {
        return value >= 0n
            ? value % this.modulus
            : ((value % this.modulus) + this.modulus) % this.modulus;
    }

    add(x: PrimeField) {
        return new PrimeField(this.mod(this.value + x.value));
    }

    sub(x: PrimeField) {
        return new PrimeField(this.mod(this.value - x.value));
    }

    mul(x: PrimeField) {
        return new PrimeField(this.mod(this.value * x.value));
    }

    div(x: PrimeField) {
        return new PrimeField(this.mod(this.mul(x.inv()).value));
    }

    // this * this = this^2
    square() {
        return new PrimeField(this.mul(this).value);
    }

    // this + this = 2 * this
    double() {
        return new PrimeField(this.add(this).value);
    }

    inv() {
        let low = this.mod(this.value);
        if (low === 0n) return new PrimeField(0n);
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
        return new PrimeField(this.mod(lm));
    }

    neg() {
        return new PrimeField(this.mod(0n - this.value));
    }

    exp(exponent: PrimeField) {
        let base = new PrimeField(this.mod(this.value));

        if (base.value === 0n) {
            if (exponent.value === 0n) {
                throw new TypeError('Base and exponent cannot be both 0');
            }
            return new PrimeField(0n);
        }

        // handle raising to negative power
        if (exponent.value < 0n) {
            base = base.inv();
            exponent = exponent.neg();
        }

        let result = new PrimeField(1n);
        while (exponent.value > 0n) {
            if (exponent.value % 2n) {
                result = result.mul(base);
            }
            exponent = new PrimeField(exponent.value / 2n);
            base = base.mul(base);
        }

        return result;
    }

    assertEquals(x: PrimeField, message?: string) {
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

    equals(x: PrimeField) {
        if (this.value === x.value) {
            return true;
        } else {
            return false;
        }
    }
}