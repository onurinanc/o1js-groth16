import Fp2 from './fp2';
import PrimeField from './primeField';

export default class G2Group{   
    x: Fp2;
    y: Fp2;
    z: Fp2;

    constructor(x: Fp2, y: Fp2) {
        // we can add checks later
        this.x = x;
        this.y = y;
        this.z = Fp2.one();
        // on curve check
    }

    static a = new Fp2(new PrimeField(0n), new PrimeField(0n));
    static b = new Fp2(new PrimeField(19485874751759354771024239261021720505790618469301721065564631296452457478373n), new PrimeField(266929791119991161246907387137283842545076965332900288569378510910307636690n));

    static generator() {
        return new G2Group(
            new Fp2(new PrimeField(10857046999023057135944570762232829481370756359578518086990519993285655852781n), new PrimeField(11559732032986387107991004021392285783925812861821192530917403151452391805634n)),
            new Fp2(new PrimeField(8495653923123431417604973247489272438418190587263600148770280649306958101930n), new PrimeField(4082367875863433681332203403145435568316851327593401208105741076214120093531n)),
        );
    }

    static zero() {
        return new G2Group(
            new Fp2(new PrimeField(0n), new PrimeField(0n)),
            new Fp2(new PrimeField(0n), new PrimeField(0n))
        )
    }

    static g_3() {
        return new G2Group(
            new Fp2(new PrimeField(2725019753478801796453339367788033689375851816420509565303521482350756874229n), new PrimeField(7273165102799931111715871471550377909735733521218303035754523677688038059653n)),
            new Fp2(new PrimeField(2512659008974376214222774206987427162027254181373325676825515531566330959255n), new PrimeField(957874124722006818841961785324909313781880061366718538693995380805373202866n))
        )
    }

    static to_affine(p:G2Group, z: Fp2) {
        let x_affine = p.x.div(z.square());
        let y_affine = p.y.div(z.square().mul(z));

        //console.log("HEY THIS IS Z");
        //console.log(z);
        
        return new G2Group(
            x_affine,
            y_affine
        ); 
    }

    assertEquals(p: G2Group, message?: string) {
        try {
          if (!this.x.equals(p.x)) {
               throw Error(`Field.assertEquals(): ${this.x.c0} != ${p.x.c0} or ${this.x.c1} != ${p.x.c1}`);
            } else if (!this.y.equals(p.y)) {
                throw Error(`Field.assertEquals(): ${this.y.c0} != ${p.y.c0} or ${this.y.c1} != ${p.y.c1} `);
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

    isZero() {
        if(this.x.isZero() && this.y.isZero()) {
            return true;
        } else {
            return false;
        }
    }

    equals(q: G2Group) {
        if(this.x.equals(q.x) && this.y.equals(q.y)) {
            return true;
        } else {
            return false;
        }
    }

    contains(q: G2Group) {
    }
    

    add(p2: G2Group) {
        if (p2.isZero() == true) {
            return this;
        } else if (this.isZero()) {
            return p2;
        }

        if(this.equals(p2)) {
            return this.double();
        } else if(this.x.equals(p2.x)) {
            return G2Group.zero();
        } else {
            let y2_sub_y1 = p2.y.sub(this.y);
            let x2_sub_x1 = p2.x.sub(this.x);

            let x3 = y2_sub_y1.square().div(x2_sub_x1.square()).sub(this.x).sub(p2.x);
            let y3 = this.x.double().add(p2.x);
            y3 = y3.mul(y2_sub_y1.div(x2_sub_x1));
            let y2_sub_y1_cube = y2_sub_y1.square().mul(y2_sub_y1);
            let x2_sub_x1_cube = x2_sub_x1.square().mul(x2_sub_x1);
            y3 = y3.sub(y2_sub_y1_cube.div(x2_sub_x1_cube));
            y3 = y3.sub(this.y);
            
            return new G2Group(
                x3,
                y3
            );
        }  
    }

    // This works correctly.
    double() {
        let n_3 = new Fp2(new PrimeField(3n), new PrimeField(0n));
        let l = n_3.mul(this.x.square()).div(this.y.double());
        let new_x = l.square().sub(this.x.double());
        let new_y = l.neg().mul(new_x).add(l.mul(this.x).sub(this.y));

        return new G2Group(
            new_x,
            new_y
        );
    }

    neg() {
        return new G2Group(
            this.x,
            this.y.neg()
        )
    }

    sub(q: G2Group) {
        return this.add(q.neg());
    }
}