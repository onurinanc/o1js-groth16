import PrimeField from './primeField';

export default class G1Group{   
    x: PrimeField;
    y: PrimeField;

    constructor(x: PrimeField, y: PrimeField) {
        // we can add checks later
        this.x = x;
        this.y = y;
    }

    static a = new PrimeField(0n);
    static b = new PrimeField(3n);

    static generator() {
        return new G1Group(
            new PrimeField(1n),
            new PrimeField(2n)
        );
    }

    static g_4() {
        return new G1Group(
            new PrimeField(3010198690406615200373504922352659861758983907867017329644089018310584441462n),
            new PrimeField(4027184618003122424972590350825261965929648733675738730716654005365300998076n)
        )
    }

    static g_3() {
        return new G1Group(
            new PrimeField(3353031288059533942658390886683067124040920775575537747144343083137631628272n),
            new PrimeField(19321533766552368860946552437480515441416830039777911637913418824951667761761n)
        )
    }

    static zero() {
        return new G1Group(
            new PrimeField(0n),
            new PrimeField(0n),
        )
    }

    assertEquals(p: G1Group, message?: string) {
        try {
          if (!this.x.equals(p.x)) {
               throw Error(`Field.assertEquals(): ${this.x.value} != ${p.x.value}`);
            } else if (!this.y.equals(p.y)) {
                throw Error(`Field.assertEquals(): ${this.y.value} != ${p.y.value}`);
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
        if(this.x.value == 0n && this.y.value == 0n) {
            return true;
        } else {
            return false;
        }
    }

    equals(q: G1Group) {
        if(this.x.equals(q.x) && this.y.equals(q.y)) {
            return true;
        } else {
            return false;
        }
    }

    contains(q: G1Group) {
    }
    
    //add(p2: G1Group) {
    //    let y2_minus_y1 = p2.y.sub(this.y);
    //    let x2_minus_x1 = p2.x.sub(this.x);
    //    let l = y2_minus_y1.div(x2_minus_x1);
//
    //    let new_x = ((l.square()).sub(this.x)).sub(p2.x);
    //    let new_y = ((l.neg().mul(new_x)).add(l.mul(this.x))).sub(this.y)
    //    
    //    return new G1Group(
    //        new_x,
    //        new_y
    //    )
    //}

    add(p2: G1Group) {
        if (p2.isZero() == true) {
            return this;
        } else if (this.isZero()) {
            return p2;
        }

        if(this.equals(p2)) {
            return this.double();
        } else if(this.x.equals(p2.x)) {
            return G1Group.zero();
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
            
            return new G1Group(
                x3,
                y3
            );
        }  
    }

    // This works correctly.
    double() {
        let n_3 = new PrimeField(3n);
        let l = n_3.mul(this.x.square()).div(this.y.double());
        let new_x = l.square().sub(this.x.double());
        let new_y = l.neg().mul(new_x).add(l.mul(this.x).sub(this.y));

        return new G1Group(
            new_x,
            new_y
        );
    }

    neg() {
        return new G1Group(
            this.x,
            this.y.neg()
        )
    }

    sub(q: G1Group) {
        return this.add(q.neg());
    }
}