import Fq from './fq';
import G2 from './g2_new';

describe('test G2 for BN254', function() {
  //G + G in projective coordinates is: 
  
  //Parameters for G2 Generator Two
  //G2 x c0
  //18064657650266314310872833882734510304469342224960895762840452673540398385663
  //G2 x c1
  //15767209469806156760211170373387620603270210844572625444480773861832148323813
  //G2 y c0
  //18350387758438165722514006433324734852126505429007818091896560652419680779208
  //G2 y c1
  //2361120538552305763462588552289584032113666280040005078430227626567900900889
  //G2 z c0
  //11295011439305748432050915375304030887315222387144299555868531462511479541127
  //G2 z c1
  //21586188435259680269345972498488110271568572496353012928929868286300284796401

  it('add G2 example 1 comparison', function() {
    console.log("Add two generators");
    let g2_generator = G2.generator();
    let g2_generator_tw0 = g2_generator.add(g2_generator);

    console.log(g2_generator_tw0.x.c0.toBigInt());
    console.log(g2_generator_tw0.x.c1.toBigInt());
    console.log(g2_generator_tw0.y.c0.toBigInt());
    console.log(g2_generator_tw0.y.c1.toBigInt());
    console.log(g2_generator_tw0.z.c0.toBigInt());
    console.log(g2_generator_tw0.z.c1.toBigInt());
  }); 

  //2G + G in projective coordinates is: 

  //Parameters for G2 Generator Three
  //G2 x c0
  //5926278295631546541848273937383093992051957430605921609878905845370630022265
  //G2 x c1
  //20909916127742404614880828019765423001920616525637362121537299264611053476790
  //G2 y c0
  //17358201550752063428277563349129460395037108519145474230082971451955670087441
  //G2 y c1
  //4404603156095844367897556658925657679538289256686592432186242055289372496100
  //G2 z c0
  //14530595373659815785016120591752764358880173935729604246930766651462313748071
  //G2 z c1
  //20227398610188772026961144541529511078561459339161223150593172520713142552154

  it('add G2 example 2 comparison', function() {
    console.log("Add three generators");
    let g2_generator = G2.generator();
    let g2_generator_tw0 = g2_generator.add(g2_generator);
    let g2_generator_three = g2_generator_tw0.add(g2_generator);

    console.log(g2_generator_three.x.c0.toBigInt());
    console.log(g2_generator_three.x.c1.toBigInt());
    console.log(g2_generator_three.y.c0.toBigInt());
    console.log(g2_generator_three.y.c1.toBigInt());
    console.log(g2_generator_three.z.c0.toBigInt());
    console.log(g2_generator_three.z.c1.toBigInt());
  }); 

  //G + G in projective coordinates is: 
  //Parameters for G2 Generator Four by addition
  
  //Parameters for G2 Generator Four Affine
  //G2 x c0
  //18936818173480011669507163011118288089468827259971823710084038754632518263340
  //G2 x c1
  //18556147586753789634670778212244811446448229326945855846642767021074501673839
  //G2 y c0
  //18825831177813899069786213865729385895767511805925522466244528695074736584695
  //G2 y c1
  //13775476761357503446238925910346030822904460488609979964814810757616608848118
  it('double G2 example 1 comparison', function() {
    console.log("Double the generator");
    let g2_generator = G2.generator();
    let g2_generator_tw0 = g2_generator.add(g2_generator);
    let g2_generator_double = g2_generator_tw0.double();
    g2_generator_double = g2_generator_double.to_affine();

    console.log(g2_generator_double.x.c0.toBigInt());
    console.log(g2_generator_double.x.c1.toBigInt());
    console.log(g2_generator_double.y.c0.toBigInt());
    console.log(g2_generator_double.y.c1.toBigInt());
    console.log(g2_generator_double.z.c0.toBigInt());
    console.log(g2_generator_double.z.c1.toBigInt());
  }); 
  
  //2 * (2 * G) in affine coordinates is: 

  it('double G2 example 2 comparison', function() {
    console.log("3*G + G = 2*(2*G) Affine Repr Check");
    console.log("Double the generator");
    let g2_generator = G2.generator();
    let g2_generator_tw0 = g2_generator.double();
    let g2_generator_double = g2_generator_tw0.double();
    g2_generator_double = g2_generator_double.to_affine();

    console.log(g2_generator_double.x.c0.toBigInt());
    console.log(g2_generator_double.x.c1.toBigInt());
    console.log(g2_generator_double.y.c0.toBigInt());
    console.log(g2_generator_double.y.c1.toBigInt());
    console.log(g2_generator_double.z.c0.toBigInt());
    console.log(g2_generator_double.z.c1.toBigInt());
  });
  
});