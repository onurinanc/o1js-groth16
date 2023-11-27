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

  // a + a == 2*a
  it('Square Fq2', function() {
    
  });

  // a*a^-1 == O
  it('Invert Fq2', function() {
    
  });

  // (2+2u) * (9+u) = (16+20u)
  it('Mul By Nonresidue Fq2', function() {
    
  });
});