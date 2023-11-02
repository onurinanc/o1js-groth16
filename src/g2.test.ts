import G2Group from './g2'


describe('test bn254 g1', function() {

  // O + O = O
  it('Add bn254', function() {
    console.log("Add two bn254 group element");
    let x = G2Group.zero();
    let y = G2Group.zero();

    let p = x.add(y);
    p.assertEquals(G2Group.zero());
    
  });

  // O + G = G
  it('Add bn254 v2', function() {
    console.log("Add zero and the generator");
    //let p = G1Group.generator().add(G1Group.zero());
    let p = G2Group.generator();
    p = p.add(G2Group.zero());
    console.log(p);
    console.log(G2Group.zero());
    p.assertEquals(G2Group.generator());
    console.log(p);
  });

  // 2*G + G = 3G
  it('Add bn254 v3', function() {
    console.log("Test 2 * G + G = 3 * G");
    let p = G2Group.generator().double();
    let q = G2Group.generator();

    let g3 = p.add(q);
    g3.assertEquals(G2Group.g_3());
  });
});