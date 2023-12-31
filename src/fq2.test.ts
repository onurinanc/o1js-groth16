import { assert } from 'o1js/dist/node/lib/errors';
import Fq from './fq';
import Fq2 from './fq2'
import { ForeignField, Field3} from 'o1js/dist/node/lib/gadgets/foreign-field';

/// An element of Fq2, represented by c0 + c1 * u; where u^2 = -1.
describe('test Fq2 bn254', function() {

  // 1 + p = 1 mod p
  it('add Fq example 1', function() {

  }); 

  // 1 + (p - 1) == 0 mod p
  it('add Fq example 2', function() {
    
  });

  // 1 - p == 1 mod p
  it('sub Fq example 1', function() {
    
  });

  // a + (b + c) == a + (c + b) == b + (c + a)
  it('Add Fq2', function() {
    console.log("Add two Fq2");
    
  });

  // a * (b * c) == a * (c * b) = b * (c * a)
  it('Mul Fq2', function() {
    console.log("Mul two Fq2");
    //
    let nineFq2 = new Fq2(
        new Fq(9n),
        new Fq(1n)
    );

    let x = new Fq2(
        new Fq(8n),
        new Fq(1n)
    );

    
  });

  // (9 + u) * (8 + u) == (71 + 17u) in normal form
  it('Mul Fq2', function() {
    console.log("Mul two Fq2");
    
    // 9 + u
    let x = new Fq2(
        new Fq(9n),
        new Fq(1n)
    );

    // 8 + u
    let y = new Fq2(
        new Fq(8n),
        new Fq(1n)
    );

    let res = x.mul(y);
    console.log(res.c0.toBigInt());
    console.log(res.c1.toBigInt());
    
  });

  // res c0: 8739174272930118246350991074272186610813592700785773244428337863339927508030n
  // res c1: 7427866275203353410928616081310925443454477010046778512011383141650n
  it('Mul Mont Fq2', function() {
    let x = new Fq2(
        new Fq(3713933137601676705464308040655462721727238505023389256005691570825n),
        new Fq(1n)
    );

    let y = new Fq2(
        new Fq(3713933137601676705464308040655462721727238505023389256005691570825n),
        new Fq(1n)
    );

    let res = x.mul(y);
    console.log(res.c0.toBigInt());
    console.log(res.c1.toBigInt());
    
  });

  // a + a == 2*a
  it('Square Fq2', function() {

  });

  // Square pseudorandom
  it('Square Fq2', function() {
    let c0 = new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n);

    let x = new Fq2(
        c0,
        c0.double()
    );

    let res = x.square();
    console.log("Test square");
    console.log(res.c0.toBigInt());
    console.log(res.c1.toBigInt());
  });

  // a*a^-1 == O
  it('Invert Fq2', function() {
    
  });

  // (2+2u) * (9+u) = (16+20u)
  it('Mul By Nonresidue Fq2', function() {
    
  });

  // Random mul_by_nonresidue test
  it('Mul By Nonresidue Fq2', function() {
    let c0 = new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n);

    let x = new Fq2(
        c0,
        c0.double()
    );

    let res = x.mul_by_nonresidue();

    console.log("Test mul_by_nonresidue");
    console.log(res.c0.toBigInt());
    console.log(res.c1.toBigInt());
  });


  // Random mul_by_nonresidue test
  it('Mul By Nonresidue Fq2', function() {
    let c0 = new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n);

    let x = new Fq2(
        c0,
        c0.double()
    );

    let res = x.mul_by_nonresidue();

    console.log("Test mul_by_nonresidue");
    console.log(res.c0.toBigInt());
    console.log(res.c1.toBigInt());
  }); 

  // Random frobeinus map test
  it('Mul By Nonresidue Fq2', function() {
    let c0 = new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n);

    let x = new Fq2(
        c0,
        c0.double()
    );

    let res0 = x.frobenius_map(0n);
    let res1 = x.frobenius_map(1n);

    console.log("Test frob 0");
    console.log(res0.c0.toBigInt());
    console.log(res0.c1.toBigInt());

    console.log("Test frob 1");
    console.log(res1.c0.toBigInt());
    console.log(res1.c1.toBigInt());
  }); 

  // comparison test
  it('Invert Fq2', function() {
    let x = new Fq2(
      new Fq(2n),
      new Fq(3n)
    );

    let res = x.invert();
    console.log("Test invert");
    console.log(res.c0.toBigInt());
    console.log(res.c1.toBigInt());
  });
  
});