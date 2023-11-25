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

});