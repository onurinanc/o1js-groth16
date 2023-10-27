import {Field, Poseidon, Group} from 'o1js';
import { isConstructorDeclaration } from 'typescript';
import Fp2 from './fp2';


describe('test fp2', function() {
  it('new', function() {
    console.log("Construct a new Fp2");
    let x_fp2 = new Fp2(Field(20), Field(10));
    console.log(x_fp2.c0);
    console.log(x_fp2.c1);

    console.log("Construct a zero Fp2");
    let zero = new Fp2(Field(0), Field(0));
    console.log(zero.c0);
    console.log(zero.c1);
  }); 

  it('Add Fp2 example', function() {
    console.log("Add two Fp2");
    let x = new Fp2(Field(20), Field(10));
    let y = new Fp2(Field(12), Field(15));
    let sum = x.add(y);
    console.log(sum.c0);
    console.log(sum.c1);

    sum.c0.assertEquals(Field(32));
    sum.c1.assertEquals(Field(25));
  });

  // a + (b + c) == a + (c + b) == b + (c + a)
  it('Add Fp2', function() {
    console.log("Add two Fp2");
    let x = new Fp2(Field(20), Field(10));
    let y = new Fp2(Field(12), Field(15));
    let z = new Fp2(Field(25), Field(40));

    let t0 = x.add(y.add(z));
    let t1 = x.add(z.add(y));
    let t2 = y.add(z.add(x));

    t0.c0.assertEquals(t1.c0);
    t0.c0.assertEquals(t2.c0);
    t1.c0.assertEquals(t2.c0);
    t0.c1.assertEquals(t1.c1);
    t0.c1.assertEquals(t2.c1);
    t1.c1.assertEquals(t2.c1);
  });

  // a * (b * c) == a * (c * b) = b * (c * a)
  it('Mul Fp2', function() {
    console.log("Mul two Fp2");
    let x = new Fp2(Field(20), Field(10));
    let y = new Fp2(Field(12), Field(15));
    let z = new Fp2(Field(25), Field(40));
    
    let t0 = x.mul(y.mul(z));
    let t1 = x.mul(z.mul(y));
    let t2 = y.mul(z.mul(x));

    t0.c0.assertEquals(t1.c0);
    t0.c0.assertEquals(t2.c0);
    t1.c0.assertEquals(t2.c0);
    t0.c1.assertEquals(t1.c1);
    t0.c1.assertEquals(t2.c1);
    t1.c1.assertEquals(t2.c1);
  });

  // a + a == 2*a
  it('Square Fp2', function() {
    console.log("Square one Fp2");
    let a = new Fp2(Field(20), Field(10));
    let b = a.mul(a);
    let c = a.square();

    b.c0.assertEquals(c.c0);
    b.c1.assertEquals(c.c1);
  });

  // a*a^-1 == O
  // Here, we test for the Pallas Curve
  // Change it to BN254 later by using the following
  // let a = new Fp2(Field(1), Field(2));
  it('Invert Fp2', function() {
    console.log("Invert the generator of Pallas");
    let gen = Group.generator;

    let a = new Fp2(gen.x, gen.y);
    let b = a.invert();
    let c = a.mul(b);

    c.isOne()
  });

});