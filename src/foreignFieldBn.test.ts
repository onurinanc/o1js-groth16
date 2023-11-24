import { assert } from "o1js/dist/node/lib/errors.js";
import { ForeignField, Field3 } from "o1js/dist/node/lib/gadgets/foreign-field";


describe('test ForeignField', function() {
  it('test foreign field', function() {
    //let x = new ForeignField(2n);
    let x = Field3.from(1n);
    let y = Field3.from(1n);
    let z = Field3.from(1n);
    
    console.log(x[0]);
    console.log(x[1].value);
    console.log(x[2].value);
  });

  // 5n + 6n == 4n in mod 7n
  it('testing ForeignField.add() for 5n+6n == 4n mod 7n', function() {
    let x = Field3.from(5n);
    console.log(x);

    let y = Field3.from(6n);
  
    let z = Field3.toBigint(x);
    console.log(z);

    let res = ForeignField.add(x, y, 7n);
    let res_bigint = Field3.toBigint(res);

    console.log(res_bigint);
  });

  // Try to test it for the bn254 field
  // 1 + p = 1
  it('testing ForeignField.add() for bn254 prime', function() {
    let pbn254 = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;

    let x = Field3.from(1n);
    let y = Field3.from(21888242871839275222246405745257275088696311157297823662689037894645226208583n);

    let res = ForeignField.add(x, y, pbn254);
    let res_bigint = Field3.toBigint(res);

    assert(res_bigint == 1n);
  });

  // Try to test it for the bn254 field
  // 1 + (p - 1) = 0
  it('testing ForeignField.add() for bn254 prime', function() {
    let pbn254 = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;

    let x = Field3.from(1n);
    let y = Field3.from(21888242871839275222246405745257275088696311157297823662689037894645226208582n);

    let res = ForeignField.add(x, y, pbn254);
    let res_bigint = Field3.toBigint(res);

    assert(res_bigint == 0n);
  });
  
  // 3n * 3n == 2n mod 7n
  it('testing ForeignField.mul', function() {
    let a = Field3.from(3n);
    let b = Field3.from(3n);
    let p = 7n;

    let res = ForeignField.mul(a, b, p);
    let res_bigint = Field3.toBigint(res);

    assert(res_bigint == 2n);
  });

  
});