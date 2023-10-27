import {Field, Poseidon} from 'o1js';
import { p } from 'o1js/src/bindings/crypto/finite_field';
import { isParenthesizedExpression } from 'typescript';
import Fp2 from './fp2';
import Pairing from './pairing';

export default class G2Group{
    x: Fp2;
    y: Fp2;
    z: Fp2 // projective?

    constructor(x: Fp2, y: Fp2, z: Fp2) {
        // we can add checks later
        this.x = x;
        this.y = y;
        this.z = z;

        // on curve check?
    }

    static a = new Fp2(Field(0), Field(0));
    static b = new Fp2(Field(19485874751759354771024239261021720505790618469301721065564631296452457478373), Field(266929791119991161246907387137283842545076965332900288569378510910307636690));

    static get generator() {
        return new G2Group(
            new Fp2(Field(10857046999023057135944570762232829481370756359578518086990519993285655852781), Field(11559732032986387107991004021392285783925812861821192530917403151452391805634)),
            new Fp2(Field(8495653923123431417604973247489272438418190587263600148770280649306958101930), Field(4082367875863433681332203403145435568316851327593401208105741076214120093531)),
            new Fp2(Field(1), Field(0))
        );

    }

    static zero() {
        return new G2Group(
            new Fp2(Field(0), Field(0)),
            new Fp2(Field(0), Field(0)),
            new Fp2(Field(0), Field(0))
        )
    }
    
    static fromAffine(x: Fp2, y: Fp2) {
        return new G2Group(
            x,
            y,
            new Fp2(Field(1), Field(0))
        )
    }

    isZero() {
        return this.z.isZero();
    }

    equals(q: G2Group) {
        if(this.z.notEquals(q.z)) {
            let z1sq = this.z.square();
            let z2sq = q.z.square();
            
            let z1cb = z1sq.mul(this.z);
            let z2cb = z2sq.mul(q.z);

            (this.x.mul(z2sq).equals(q.x.mul(z1sq))) && (this.y.mul(z2cb).equals(q.y.mul(z1cb)))
        } else {
            this.z.isZero() && q.isZero()
        }
    }

    contains(q: G2Group) {
        let xx = this.x.square();
        let zz = this.z.square();
        let zzzz = zz.square();

        let lhs = this.y.square();
        let rhs = xx.mul(this.x).add(G2Group.a.mul(this.x).mul(zzzz));
        rhs = rhs.add(G2Group.b.mul(zzzz.mul(zz)));
        
        lhs.equals(rhs)
    }

    add(q: G2Group) {
        // add checks later:
        // isZero should return boolean
        // check this again
        if(this.isZero()) {
            return q;
        } else if(q.isZero()) {
            return this;
        } else {
            let z1z1 = this.z.square();
            let z2z2 = q.z.square();

            let you1 = this.x.mul(z2z2);
            let you2 = q.x.mul(z1z1);

            let s1 = this.y.mul(z2z2.mul(q.z));
            let s2 = q.y.mul(z1z1.mul(this.z));

            if (you1.equals(you2)) {
                if (s1.notEquals(s2)) {
                    return new G2Group(
                        new Fp2(Field(0), Field(0)),
                        new Fp2(Field(0), Field(0)),
                        new Fp2(Field(0), Field(0))
                    );
                }
            } else {
                let h = you2.sub(you1);
                let r = s2.sub(s1);

                let hh = h.square();
                let hhh = hh.mul(h);
                let x3 = r.square().sub(hhh);
                x3 = x3.sub(you1.mul(hh).double());
                let y3 = r.mul(you1.mul(hh).sub(x3));
                y3 = y3.sub(s1.mul(hhh));
                let z3 = h.mul(this.z).mul(q.z);
                
                return new G2Group(
                    x3,
                    y3,
                    z3,
                );
            }
        }
    }

    neg() {
        return new G2Group(
            this.x,
            this.y.neg(),
            this.z
        );
    }

    sub(q: G2Group) {
        return this.add(q.neg());
    }

    double() {
        if(this.isZero()) {
            return this;
        } else if (this.y.isZero()) {
            return new G2Group(
                new Fp2(Field(0), Field(0)),
                new Fp2(Field(0), Field(0)),
                new Fp2(Field(0), Field(0))
            );
        } else {
            let xx = this.x.square();
            let yy = this.y.square();
            let yyyy = yy.square();
            
            let zzzz = this.z.square().square();

            let s = new Fp2(Field(4), Field(0)).mul(this.x.mul(yy));
            let m = new Fp2(Field(3), Field(0)).mul(xx).add(G2Group.a.mul(zzzz));

            let x0 = m.square().sub(s.double());
            let y0 = m.mul(s.sub(x0)).sub(new Fp2(Field(8), Field(0)).mul(yyyy));
            let z0 = this.y.mul(this.z).double();

            return new G2Group(
                x0,
                y0,
                z0,
            );
        }
    }

    // implement scalar multiplication if needed
}