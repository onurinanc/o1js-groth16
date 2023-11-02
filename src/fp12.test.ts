import PrimeField from './primeField';
import Fp2 from './fp2';
import Fp6 from './fp6';
import Fp12 from './fp12';
import { assert } from 'o1js/dist/node/lib/errors';


describe('test fp12', function() {

  // a + (b + c) == a + (c + b) == b + (c + a)
  it('Add Fp12', function() {
    console.log("Add three Fp12");
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);
    let x4 = new Fp6(z, y, x);

    let a1 = new Fp12(x1, x4);
    let a2 = new Fp12(x3, x2);
    let a3 = new Fp12(x4, x2);

    let t0 = a1.add(a2.add(a3));
    let t1 = a1.add(a3.add(a2));
    let t2 = a2.add(a3.add(a1));

    t0.assertEquals(t1);
    t0.assertEquals(t2);
    t1.assertEquals(t2);
  });

  // a * (b * c) == a * (c * b) = b * (c * a)
  it('Mul Fp12', function() {
    console.log("Mul three Fp12");
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);
    let x4 = new Fp6(z, y, x);

    let a1 = new Fp12(x1, x4);
    let a2 = new Fp12(x3, x2);
    let a3 = new Fp12(x4, x2);

    let t0 = a1.mul(a2.mul(a3));
    let t1 = a1.mul(a3.mul(a2));
    let t2 = a2.mul(a3.mul(a1));

    t0.assertEquals(t1);
    t0.assertEquals(t2);
    t1.assertEquals(t2);
  });

  // a * a == 2*a
  it('Square Fp12', function() {
    console.log("Square one Fp12");
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);
    let x4 = new Fp6(z, y, x);

    let a = new Fp12(x1, x4);
    let b = a.mul(a);
    let c = a.square();
    
    b.assertEquals(c);
  });

  
  it('Invert Fp12', function() {
    console.log("Invert an element in Fp12");
    let x = new Fp2(new PrimeField(20n), new PrimeField(10n));
    let y = new Fp2(new PrimeField(12n), new PrimeField(15n));
    let z = new Fp2(new PrimeField(25n), new PrimeField(40n));

    let x1 = new Fp6(x, y, z);
    let x2 = new Fp6(x, x, y);
    let x3 = new Fp6(y, z, z);
    let x4 = new Fp6(z, y, x);

    let a = new Fp12(x1, x3);
    let d = new Fp12(x2, x4);

    let b = a.invert();
    let c = a.mul(b);

    c.isOne();
  });

});