import { assert } from 'o1js/dist/node/lib/errors';
import Fq from './fq';
import { ForeignField, Field3} from 'o1js/dist/node/lib/gadgets/foreign-field';


describe('test Fq bn254', function() {
  // 1 + p = 1 mod p
  it('add Fq example 1', function() {
    console.log("Construct a new Fq Test 1 + p == 1 mod p");
    let x = new Fq(1n);
    let y = new Fq(21888242871839275222246405745257275088696311157297823662689037894645226208583n);
    
    let res = x.add(y);
    let res_bigint = res.toBigInt();

    assert(res_bigint == 1n);
  }); 

  // 1 + (p - 1) == 0 mod p
  it('add Fq example 2', function() {
    console.log("Construct a new Fq Test 1 + (p - 1) == 0 mod p");
    let x = new Fq(1n);
    let y = new Fq(21888242871839275222246405745257275088696311157297823662689037894645226208582n);
    
    let res = x.add(y);
    let res_bigint = res.toBigInt();

    assert(res_bigint == 0n);
    
  });

  // 1 - p == 1 mod p
  it('sub Fq example 1', function() {
    console.log("Construct a new Fq Test 1 + (p - 1) == 0 mod p");
    let x = new Fq(1n);
    let y = new Fq(21888242871839275222246405745257275088696311157297823662689037894645226208583n);
    
    let res = x.sub(y);
    let res_bigint = res.toBigInt();

    assert(res_bigint == 1n);
    
  });

  it('Inverse Constant Montgomery Form', function() {
    console.log("Print Inverse Constant");
    console.log(0x87d20782e4866389);
  });

  it('Paralel test using Halo2Curves', function() {
    console.log("Multiply root of unities")
    let x = new Fq(21888242871839275222246405745257275088696311157297823662689037894645226208582n);
    let y = new Fq(21888242871839275222246405745257275088696311157297823662689037894645226208582n);

    let res = x.mul(y);
    let res_bigint = res.toBigInt();

    console.log(res_bigint);
  });

  // a + (b + c) == a + (c + b) == b + (c + a)
  it('Add Fq2', function() {
    console.log("Add two Fq2");
    
  });

  // a * (b * c) == a * (c * b) = b * (c * a)
  it('Mul Fq2', function() {
    console.log("Mul two Fq2");
    
  });

  // a + a == 2*a
  it('Square Fq2', function() {
    
  });

  // a*a^-1 == O
  // Here, we test for the Pallas Curve
  // Change it to BN254 later by using the following
  // let a = new Fq2(new PrimeField(1), new PrimeField(2));
  // We will try this invert now 
  it('Invert Fq2', function() {
    
  });

  // (2+2u) * (9+u) = (16+20u)
  it('Mul By Nonresidue Fq2', function() {
    
  });

  it('Calculate R^-1', function() {
    let x = Fq.R();
    let y = x.inv();
    console.log(y.toBigInt());

    console.log(Fq.R().mul(Fq.R_INV_TEMP()).toBigInt());
  });


});