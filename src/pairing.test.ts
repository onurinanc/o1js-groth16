import PrimeField from './primeField';
import Fp12 from './fp12';
import Fp2 from './fp2';
import Fp6 from './fp6';
import G1Group from './g1';
import G2Group from './g2';
import Pairing from './pairing';


describe('test pairing functions', function() {
  it('Test final exponentiation', function() {
    console.log("test fp12.one()");
    let res = Pairing.final_exponentiation_gnark(Fp12.one());
    res.assertEquals(Fp12.one());
  });

  it('Test final exponentiation', function() {
    console.log("test fp12.one() + fp12.one()");
    //let res = Pairing.final_exponentiation(Fp12.one().add(Fp12.one()));
    //let res = Pairing.final_exponentiation_2_gnark(Fp12.one().add(Fp12.one()).add(Fp12.one()));

    //let ress = Fp12.one().add(Fp12.one().add(Fp12.one()));
    //console.log(ress.c0);
    //console.log(ress.c1);
    //res.assertEquals(Fp12.one());
    //let res = Pairing.final_exponentiation_2_gnark(ress);
    //console.log(res.c0);
    //console.log(res.c1);

    let val = new Fp12(
      new Fp6(
        new Fp2(new PrimeField(1n), new PrimeField(1n)),
        new Fp2(new PrimeField(1n), new PrimeField(1n)),
        new Fp2(new PrimeField(1n), new PrimeField(1n))
      ),
      new Fp6(
        new Fp2(new PrimeField(1n), new PrimeField(0n)),
        new Fp2(new PrimeField(0n), new PrimeField(0n)),
        new Fp2(new PrimeField(0n), new PrimeField(0n))
      )
    )

    let res = Pairing.final_exponentiation_gnark(val);
    console.log(res.c0);
    console.log(res.c1);

    //console.log(val.c0);
    //console.log(val.c1);
    //let res1 = Pairing.final_exponentiation(val);
    //console.log("Res1 final exp");
    //console.log(res1.c0);
    //console.log(res1.c1);

    //let res2 = Pairing.final_exponentiation_2_gnark(val);
    //console.log("Res2 final exp");
    //console.log(res2.c0);
    //console.log(res2.c1);
    //let t = 2**62 - 2**54 + 2**44
    //console.log("THE TRACE T is:");
    //console.log(t);
    //let t_another = 2**63 - 2**49
    //// 4965661367192848881 -> t is in garaga/gnark
    //// 4593689212103950300 -> t is in the optimal ate pairing
    //console.log("This is another t");
    //console.log(t_another);
  });

  // e(P, Q + R) = e(P, Q) * e(P, R)
  //it('Test pair function', function() {
  //  console.log("ttest bilinearity");
  //  let g1 = G1Group.generator();
  //  let g2 = G2Group.generator();
  //  g2 = g2.double();
  //  let pair12 = Pairing.pair(g2, g1);
//
  //  let g3 = G1Group.generator();
  //  let g4 = G2Group.generator();
  //  g3 = g3.double();
  //  let pair21 = Pairing.pair(g4, g3);
//
  //  console.log(pair12.c0);
  //  console.log(pair21.c0);
  //  
  //  console.log(pair12.c1);
  //  console.log(pair21.c1);
  //});
//
  //it('Pairing test', function() {
  //  console.log("test pairing");
  //  let res = Pairing.pair(G2Group.generator(), G1Group.generator());
  //  console.log("Result of the pairing test")
  //  console.log(res.c0);
  //  console.log(res.c1);
  //});

  //(18443897754565973717256850119554731228214108935025491924036055734000366132575, 10734401203193558706037776473742910696504851986739882094082017010340198538454, 5985796159921227033560968606339653189163760772067273492369082490994528765680, 4093294155816392700623820137842432921872230622290337094591654151434545306688, 642121370160833232766181493494955044074321385528883791668868426879070103434, 4527449849947601357037044178952942489926487071653896435602814872334098625391, 3758435817766288188804561253838670030762970764366672594784247447067868088068, 18059168546148152671857026372711724379319778306792011146784665080987064164612, 14656606573936501743457633041048024656612227301473084805627390748872617280984, 17918828665069491344039743589118342552553375221610735811112289083834142789347, 19455424343576886430889849773367397946457449073528455097210946839000147698372, 7484542354754424633621663080190936924481536615300815203692506276894207018007)
  
});