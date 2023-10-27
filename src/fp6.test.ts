import {Field, Poseidon, Group} from 'o1js';
import Fp2 from './fp2';
import Fp6 from './fp6';


describe('test fp6', function() {
  it('new', function() {
    console.log("Construct a new Fp6");
    
    let x = new Fp2(Field(20), Field(10));
    let y = new Fp2(Field(12), Field(15));
    let z = new Fp2(Field(25), Field(40));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);

    console.log(x1.c0.c0);
    console.log(x1.c0.c1);
    console.log(x1.c1.c0);
    console.log(x1.c1.c1);
    console.log(x1.c2.c0);
    console.log(x1.c2.c1);

    console.log("Construct a zero Fp6");
    let zero_fp2 = new Fp2(Field(0), Field(0));
    let zero_fp6 = new Fp6(zero_fp2, zero_fp2, zero_fp2);

    console.log(zero_fp6.c0.c0);
    console.log(zero_fp6.c0.c1);
    console.log(zero_fp6.c1.c0);
    console.log(zero_fp6.c1.c1);
    console.log(zero_fp6.c2.c0);
    console.log(zero_fp6.c2.c1);
  }); 

  // a + (b + c) == a + (c + b) == b + (c + a)
  it('Add Fp6', function() {
    console.log("Add three Fp6");
    let x = new Fp2(Field(20), Field(10));
    let y = new Fp2(Field(12), Field(15));
    let z = new Fp2(Field(25), Field(40));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);

    let t0 = x1.add(x2.add(x3));
    let t1 = x1.add(x3.add(x2));
    let t2 = x2.add(x3.add(x1));

    t0.c0.assertEquals(t1.c0);
    t0.c0.assertEquals(t2.c0);
    t1.c0.assertEquals(t2.c0);
    t0.c1.assertEquals(t1.c1);
    t0.c1.assertEquals(t2.c1);
    t1.c1.assertEquals(t2.c1);
    t0.c2.assertEquals(t1.c2);
    t0.c2.assertEquals(t2.c2);
    t1.c2.assertEquals(t2.c2);
  });

  // a * (b * c) == a * (c * b) = b * (c * a)
  it('Mul Fp6', function() {
    console.log("Mul three Fp6");
    let x = new Fp2(Field(20), Field(10));
    let y = new Fp2(Field(12), Field(15));
    let z = new Fp2(Field(25), Field(40));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);

    let t0 = x1.mul(x2.mul(x3));
    let t1 = x1.mul(x3.mul(x2));
    let t2 = x2.mul(x3.mul(x1));

    t0.c0.assertEquals(t1.c0);
    t0.c0.assertEquals(t2.c0);
    t1.c0.assertEquals(t2.c0);
    t0.c1.assertEquals(t1.c1);
    t0.c1.assertEquals(t2.c1);
    t1.c1.assertEquals(t2.c1);
    t0.c2.assertEquals(t1.c2);
    t0.c2.assertEquals(t2.c2);
    t1.c2.assertEquals(t2.c2);
  });

  // a + a == 2*a
  it('Square Fp6', function() {
    console.log("Square one Fp6");
    
  });

  // a*a^-1 == O
  // Here, we test for the Pallas Curve
  // Change it to BN254 later by using the following
  // let a = new Fp2(Field(1), Field(2));
  it('Invert Fp6', function() {
    console.log("Invert the generator of Pallas");
  });

});