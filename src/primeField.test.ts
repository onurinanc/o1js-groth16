import {Field, Poseidon, Group} from 'o1js';
import { isConstructorDeclaration } from 'typescript';
import Fp2 from './fp2';
import PrimeField from './primeField';


describe('test PrimeField', function() {
  //it('test noble curve field', function() {
  //  console.log("Testing the noble Field.");
  //  let a = nonField(BigInt('0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47'));
  //  console.log(a);
  //  console.log("Print bigint")
  //  console.log(BigInt(28948022309329048855892746252171976963317496166410141009864396001978282409984));
  //  let b = nonField(BigInt('0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47'));
  //  console.log(b);
  //  let c = nonField(BigInt(234234));
  //  let d = c.mulN(6n, 4n);
  //  console.log(11%5);
  //}); 

  //it('test PrimeField add', function() {
  //  let x = new PrimeField(1n);
  //  let y = new PrimeField(21888242871839275222246405745257275088696311157297823662689037894645226208583n);
  //  let z = x.add(y);
  //  console.log(z);
  //});

  it('new field element montgomery', function() {
    let x = new PrimeField(2n);
    let y = new PrimeField(1n);
    let mont_x = x.mul(new PrimeField(6350874878119819312338956282401532409788428879151445726012394534686998597021n));
    let mont_y = y.mul(new PrimeField(6350874878119819312338956282401532409788428879151445726012394534686998597021n));

    console.log(mont_x);
    console.log(mont_y);
  });

  //it('test PrimeField exp', function() {
  //  let x = new PrimeField(1n);
  //  let y = new PrimeField(21888242871839275222246405745257275088696311157297823662689037894645226208583n);
  //  let z = x.exp(y);
  //  console.log(z);
//
  //  let base = new PrimeField(2n);
  //  let exponent = new PrimeField(3n);
  //  let res = base.exp(exponent);
  //  console.log(res);
  //}); 
//
  //it('test assertEquals', function() {
  //  let x = new PrimeField(1n);
  //  let y = new PrimeField(1n);
  //  
  //  x.assertEquals(y);
  //}); 
//
  //it('test inv and div', function() {
  //  let x = new PrimeField(3451234123523542345345n);
  //  let y = x.inv();
//
  //  let res = x.mul(y);
//
  //  let res_z = x.div(x);
  //  console.log(res_z);
  //  console.log(res);
  //  //x.assertEquals(y);
  //}); 
//
//
  //it('test neg', function() {
  //  console.log("testing neg");
  //  let x = new PrimeField(3451234123523542345345n);
  //  let y = x.neg();
  //  let sum = x.add(y);
  //  console.log(sum);
  //  //x.assertEquals(y);
  //});
});