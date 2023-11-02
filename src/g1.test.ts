import PrimeField from './primeField';
import { assert } from 'o1js/dist/node/lib/errors';
import G1Group from './g1';


describe('test bn254 g1', function() {

  // O + O = O
  it('Add bn254', function() {
    console.log("Add two bn254 group element");
    let x = new G1Group(new PrimeField(0n), new PrimeField(0n));
    let y = new G1Group(new PrimeField(0n), new PrimeField(0n));

    let p = x.add(y);
    p.assertEquals(G1Group.zero());
    
  });

  // O + G = G
  it('Add bn254 v2', function() {
    console.log("Add zero and the generator");
    //let p = G1Group.generator().add(G1Group.zero());
    let p = G1Group.generator();
    p = p.add(G1Group.zero());
    console.log(p);
    console.log(G1Group.zero());
    p.assertEquals(G1Group.generator());
    console.log(p);
  });

  // 2*G + G = 3G
  it('Add bn254 v3', function() {
    console.log("Test 2 * G + G = 3 * G");
    let p = G1Group.generator().double();
    let q = G1Group.generator();

    let g3 = p.add(q);
    g3.assertEquals(G1Group.g_3());
  });

  // (2*G + G) + G = 4*G
  //it('Add bn254 v3', function() {
  //  console.log("Add 3 * generator and the generator");
  //  //let p = G1Group.generator.add(G1Group.generator.double());
  //  //let q = G1Group.generator.double().add(G1Group.generator.double());
  //  //let p_add_1 = p.add(G1Group.generator);
  //  //p_add_1.assertEquals(q);
//
  //  console.log("Double generator is:");
  //  let p = G1Group.generator().double();
  //  console.log(p);
  //  console.log("p3 is");
  //  let p_3 = p.add(G1Group.generator());
  //  console.log(p_3);
  //  let p_4 = p_3.add(G1Group.generator());
//
  //  let g_4 = p.add(p);
  //  console.log(p_4);
  //  console.log(g_4);
  //  //p_4.assertEquals(g_4);
  //});
  
  //it('Add bn254 v4', function() {
  //  console.log("Add 4 * generator and the generator");
//
  //  console.log("Double generator is:");
  //  let p_2 = G1Group.generator().add(G1Group.generator());
  //  let p_3 = p_2.add(G1Group.generator());
  //  let p_4 = p_3.add(G1Group.generator());
//
  //  let q_2 = G1Group.generator().double();
  //  let q_4 = q_2.double();
//
  //  console.log("Generate p_4");
  //  console.log(p_4);
//
  //  console.log("Generate q_4");
  //  console.log(q_4);
//
  //  console.log("Generate g_4");
  //  console.log(G1Group.g_4());
  //});
});