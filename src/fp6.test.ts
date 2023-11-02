import PrimeField from './primeField';
import Fp2 from './fp2';
import Fp6 from './fp6';


describe('test fp6', function() {
  it('new', function() {
    console.log("Construct a new Fp6");
    
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

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
    let zero_fp2 = new Fp2(new PrimeField(0n), new PrimeField(0n));
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
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

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
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

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

  // a * a == 2*a
  it('Square Fp6', function() {
    console.log("Square one Fp6");
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));
    
    let x1 = new Fp6(x, y, z);
    
    let a = x1.mul(x1);
    let b = x1.square();

    a.assertEquals(b);

    console.log(a);
    console.log(b);
    console.log(a.assertEquals(b));
    
  });

  
  it('Invert Fp6', function() {
    console.log("Invert an element in Fp6");
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));
    
    let a = new Fp6(x, y, z);
    let b = a.invert();
    let c = a.mul(b);

    c.isOne();
  });

});