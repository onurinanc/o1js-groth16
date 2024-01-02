import Fq from './fq';
import G1 from './g1_new';


describe('test G1 for BN254', function() {
  //G + G in projective coordinates is: 
  //x
  //21888242871839275222246405745257275088696311157297823662689037894645226208491
  //y
  //21888242871839275222246405745257275088696311157297823662689037894645226208572
  //z
  //64
  
  it('add G1 example 1 comparison', function() {
    console.log("Add two generators");
    let generator = G1.generator();
    let res = generator.add(generator);

    console.log(res.x.toBigInt());
    console.log(res.y.toBigInt());
    console.log(res.z.toBigInt());
  }); 

  //2G + G in projective coordinates is: 
  //x
  //146094
  //y
  //21888242871839275222246405745257275088696311157297823662689037894645225946843
  //z
  //118638

  it('add G1 example 2 comparison', function() {
    console.log("Add three generators");
    let generator = G1.generator();
    let res = generator.add(generator);
    res = res.add(generator);

    console.log(res.x.toBigInt());
    console.log(res.y.toBigInt());
    console.log(res.z.toBigInt());
  }); 

});