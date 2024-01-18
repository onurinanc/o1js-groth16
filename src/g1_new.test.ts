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

  //G + G in projective coordinates is: 
  //x
  //21888242871839275222246405745257275088696311157297823662689037894645226208491
  //y
  //21888242871839275222246405745257275088696311157297823662689037894645226208572
  //z
  //64
  
  it('double G1 example 1 comparison', function() {
    console.log("Double the generator");
    let generator = G1.generator();
    let res = generator.double();

    console.log(res.x.toBigInt());
    console.log(res.y.toBigInt());
    console.log(res.z.toBigInt());
  }); 
  
  //3G + G in projective coordinates is: 
  //x
  //9838105376
  //y
  //178203765652
  //z
  //29984768

  // 
  it('double G1 example 2 comparison', function() {
    console.log("3*G + G = 2*(2*G) Affine Repr Check");
    let generator = G1.generator();
    let res = generator.double();
    res = res.double();

    console.log(res.x.toBigInt());
    console.log(res.y.toBigInt());
    console.log(res.z.toBigInt());

    let g_3_1_jacob = new G1(
      new Fq(9838105376n),
      new Fq(178203765652n),
      new Fq(29984768n)
    )

    let res_affine = res.to_affine();
    let g_3_1_jacob_affine = g_3_1_jacob.to_affine();

    console.log(res_affine.x.toBigInt());
    console.log(res_affine.y.toBigInt());
    //console.log(res_affine.z.toBigInt());

    console.log(g_3_1_jacob_affine.x.toBigInt());
    console.log(g_3_1_jacob_affine.y.toBigInt());
    //console.log(g_3_1_jacob_affine.z.toBigInt());
  });

});