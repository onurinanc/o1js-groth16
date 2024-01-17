import Pairing from "./pairing_new";
import Fq12 from "./fq12";
import Fq6 from "./fq6";
import Fq2 from "./fq2";
import Fq from "./fq";
import G1 from "./g1_new";
import G2 from "./g2_new";
import { convertToObject } from "typescript";
import G2Affine from "./g2_affine";


describe('test pairing functions', function() {

    //Fq12 result after final_exponentiation

    //c0: c0: c0:
    //798502083397251921633833674883831104730682408543675020367286750497807698645
    //c0: c0: c1:
    //20793674778978652694944268622468059656139754448735949818355501586028955257569
    //c0: c1: c0:
    //19048478524633283498085811054381399442903474179854423089240633507472524150262
    //c0: c1: c1:
    //15038731096124620452385470562243005872807692220833222100737078380290179293601
    //c0: c2: c0:
    //19681044767574525412286316344330609819205364432495350388091397098350158009791
    //c0: c2: c1:
    //14169609043629130412242917837138631876517067323018367346926035791950997191660
    //c1: c0: c0:
    //21681460614944590471230154167872844780267038250831055610345302175827879148819
    //c1: c0: c1:
    //8747515195756416269723830997182137311552961765373288911025484618924826387952
    //c1: c1: c0:
    //14855910687706175046573301839761345733585599107938739358093378151700479377612
    //c1: c1: c1:
    //8903458072238520772063941873669153241276993002477451201620137453911786119461
    //c1: c2: c0:
    //12657732548725281370731292049617675660830024822575316295880259464449340428763
    //c1: c2: c1:
    //6884837954578062278521836969300104051613900678416646060390403430109502310478

  it('Test final exponentiation', function() {
    console.log("test final exponentiation ");

    let second = new Fq12(
        new Fq6(
            new Fq2(
                new Fq(21227010742668523973779795892080484478413631586992185774992397774453111499562n),
                new Fq(19226519837628619696197361438039192285186559783794253066594478201300567625581n)
            ),
            new Fq2(
                new Fq(7782287104470559324105132304997884557026788032401170325684944465605236395051n),
                new Fq(19110893883636139580674900407653400921517208489522902969760806789675732237443n)
            ),
            new Fq2(
                new Fq(13373558987747729767106266411641782708520066622224553970810646960119770906482n),
                new Fq(8239735462772116299759198943303716067067211972951745657386023141164294230159n),
            )
        ),

        new Fq6(
            new Fq2(
                new Fq(19723498938913580838527010796995565664940964702558430218792533379614170175584n),
                new Fq(19198937630784884904531985231983944570953927007639024736778645015422755148596n)
            ),
            new Fq2(
                new Fq(318460156404207635097638769497134177093016410663420631112968904066667788855n),
                new Fq(5811915892240812086868837101820778755877273314773348243459728092795714036353n)
            ),
            new Fq2(
                new Fq(20555792769679092785671034318258460903890555657119752069678898280830359015944n),
                new Fq(3839526312266986973044379943534614883360461121168709130959429802008624145960n),
            )
        )
    );

    let res = Pairing.final_exponentiation(second);

    console.log("The final exponentiation result is:");
    console.log(res.c0.c0.c0.toBigInt());
    console.log(res.c0.c0.c1.toBigInt());
    console.log(res.c0.c1.c0.toBigInt());
    console.log(res.c0.c1.c1.toBigInt());
    console.log(res.c0.c2.c0.toBigInt());
    console.log(res.c0.c2.c1.toBigInt());
    console.log(res.c1.c0.c0.toBigInt());
    console.log(res.c1.c0.c1.toBigInt());
    console.log(res.c1.c1.c0.toBigInt());
    console.log(res.c1.c1.c1.toBigInt());
    console.log(res.c1.c2.c0.toBigInt());
    console.log(res.c1.c2.c1.toBigInt());

  });

  it('Test final exponentiation', function() {
    console.log("test final exponentiation ");

    let second = new Fq12(
        new Fq6(
            new Fq2(
                new Fq(21227010742668523973779795892080484478413631586992185774992397774453111499562n),
                new Fq(19226519837628619696197361438039192285186559783794253066594478201300567625581n)
            ),
            new Fq2(
                new Fq(7782287104470559324105132304997884557026788032401170325684944465605236395051n),
                new Fq(19110893883636139580674900407653400921517208489522902969760806789675732237443n)
            ),
            new Fq2(
                new Fq(13373558987747729767106266411641782708520066622224553970810646960119770906482n),
                new Fq(8239735462772116299759198943303716067067211972951745657386023141164294230159n),
            )
        ),

        new Fq6(
            new Fq2(
                new Fq(19723498938913580838527010796995565664940964702558430218792533379614170175584n),
                new Fq(19198937630784884904531985231983944570953927007639024736778645015422755148596n)
            ),
            new Fq2(
                new Fq(318460156404207635097638769497134177093016410663420631112968904066667788855n),
                new Fq(5811915892240812086868837101820778755877273314773348243459728092795714036353n)
            ),
            new Fq2(
                new Fq(20555792769679092785671034318258460903890555657119752069678898280830359015944n),
                new Fq(3839526312266986973044379943534614883360461121168709130959429802008624145960n),
            )
        )
    );
    
    let g1_generator = G1.generator();
    let g1_generator_affine = g1_generator.to_affine();

    let g2_generator = G2.generator();
    let g2_generator_affine = g2_generator.to_affine();

    //let miller_result = Pairing.miller_loop(g2_generator_affine);
    let res = Pairing.final_exponentiation(second);

    console.log("The final exponentiation result is:");
    console.log(res.c0.c0.c0.toBigInt());
    console.log(res.c0.c0.c1.toBigInt());
    console.log(res.c0.c1.c0.toBigInt());
    console.log(res.c0.c1.c1.toBigInt());
    console.log(res.c0.c2.c0.toBigInt());
    console.log(res.c0.c2.c1.toBigInt());
    console.log(res.c1.c0.c0.toBigInt());
    console.log(res.c1.c0.c1.toBigInt());
    console.log(res.c1.c1.c0.toBigInt());
    console.log(res.c1.c1.c1.toBigInt());
    console.log(res.c1.c2.c0.toBigInt());
    console.log(res.c1.c2.c1.toBigInt());

  });

/*g2_affine_3g
G2 x c0
2725019753478801796453339367788033689375851816420509565303521482350756874229
G2 x c1
7273165102799931111715871471550377909735733521218303035754523677688038059653
G2 y c0
2512659008974376214222774206987427162027254181373325676825515531566330959255
G2 y c1
957874124722006818841961785324909313781880061366718538693995380805373202866
G2 z c0
0
G2 z c1
0
g2_2g
G2 x c0
18064657650266314310872833882734510304469342224960895762840452673540398385663
G2 x c1
15767209469806156760211170373387620603270210844572625444480773861832148323813
G2 y c0
18350387758438165722514006433324734852126505429007818091896560652419680779208
G2 y c1
2361120538552305763462588552289584032113666280040005078430227626567900900889
G2 z c0
11295011439305748432050915375304030887315222387144299555868531462511479541127
G2 z c1
21586188435259680269345972498488110271568572496353012928929868286300284796401
addition result
G2 x c0
14544768148792632680073221983566693239583282104557296657848306123566393475730
G2 x c1
15034324394469490987779704591448025941722072015306291430099460905795412688577
G2 y c0
11002011155701785813972642690498120535862192909530050003961781729574140785553
G2 y c1
10463967624402083525436831344787392148296280284977976166619878361459662805605
G2 z c0
8863921422321631853541600922641661429758378788881107427311426765831451334272
G2 z c1
5034616795582565734225936021994665960773476499030844842075241925330862037999*/

  it('Test addition step', function() {
    console.log("Test g1 affine and projective transform");
    let g2_affine_3g = new G2Affine(
        new Fq2(
            new Fq(2725019753478801796453339367788033689375851816420509565303521482350756874229n),
            new Fq(7273165102799931111715871471550377909735733521218303035754523677688038059653n)
        ),
        new Fq2(
            new Fq(2512659008974376214222774206987427162027254181373325676825515531566330959255n),
            new Fq(957874124722006818841961785324909313781880061366718538693995380805373202866n)
        )
    )

    let g2_2g = new G2(
        new Fq2(
            new Fq(18064657650266314310872833882734510304469342224960895762840452673540398385663n),
            new Fq(15767209469806156760211170373387620603270210844572625444480773861832148323813n)
        ),
        new Fq2(
            new Fq(18350387758438165722514006433324734852126505429007818091896560652419680779208n),
            new Fq(2361120538552305763462588552289584032113666280040005078430227626567900900889n)
        ),
        new Fq2(
            new Fq(11295011439305748432050915375304030887315222387144299555868531462511479541127n),
            new Fq(21586188435259680269345972498488110271568572496353012928929868286300284796401n)
        )
    )

    let g2_generator = G2.generator();
    let g2_generator_2g = g2_generator.add(g2_generator);
    let g2_generator_3g = g2_generator_2g.add(g2_generator);

    let g2_generator_3g_affine = g2_generator_3g.to_affine();

    console.log(g2_generator_2g.x.c0.toBigInt());
    console.log(g2_generator_2g.x.c1.toBigInt());
    console.log(g2_generator_2g.y.c0.toBigInt());
    console.log(g2_generator_2g.y.c1.toBigInt());
    console.log(g2_generator_2g.z.c0.toBigInt());
    console.log(g2_generator_2g.z.c1.toBigInt());

    console.log(g2_generator_3g_affine.x.c0.toBigInt());
    console.log(g2_generator_3g_affine.x.c1.toBigInt());
    console.log(g2_generator_3g_affine.y.c0.toBigInt());
    console.log(g2_generator_3g_affine.y.c1.toBigInt());
    
    let addition_result = Pairing.addition_step(g2_2g, g2_affine_3g);

    /*console.log(addition_result.x.c0.toBigInt());
    console.log(addition_result.x.c1.toBigInt());
    console.log(addition_result.y.c0.toBigInt());
    console.log(addition_result.y.c1.toBigInt());
    console.log(addition_result.z.c0.toBigInt());
    console.log(addition_result.z.c1.toBigInt());*/

  });

/*doubling result doubling_step(2 * G)
G2 x c0
15907470672758763390522514767003803497931353299914271700526213920442476042295
G2 x c1
20783224935215815488584337979997070790192642887381753011555001201094594645160
G2 y c0
534563814371495978974146195478125326052207300123260898857011675883367199460
G2 y c1
7451553101180931993360714965623705913038106028499313570088137992249185208430
G2 z c0
587737556357335807751429292753855402511169724545807108531042764320320964969
G2 z c1
7851120854422305789899027307305441383200543189437963269032829892620510819590*/

it('Test doubling step', function() {
    console.log("doubling_step(2 * G) comparison test");
    
    let g2_generator = G2.generator();

    console.log(g2_generator.x.c0.toBigInt());
    console.log(g2_generator.x.c1.toBigInt());
    console.log(g2_generator.y.c0.toBigInt());
    console.log(g2_generator.y.c1.toBigInt());
    console.log(g2_generator.z.c0.toBigInt());
    console.log(g2_generator.z.c1.toBigInt());
    
    let g2_generator_double = g2_generator.double();
    let g2_doubling_step_result = Pairing.doubling_step(g2_generator_double);

    /*console.log(g2_doubling_step_result.result.x.c0.toBigInt());
    console.log(g2_doubling_step_result.x.c1.toBigInt());
    console.log(g2_doubling_step_result.y.c0.toBigInt());
    console.log(g2_doubling_step_result.y.c1.toBigInt());
    console.log(g2_doubling_step_result.z.c0.toBigInt());
    console.log(g2_doubling_step_result.z.c1.toBigInt());*/

  });

/*f_test after ecc is
c0: c0: c0:
21539945124252953321531877303674042836786714281016248685273042078497397202541
c0: c0: c1:
2462442388266997987471204595054592958310629132689122798291536816519114805370
c0: c1: c0:
0
c0: c1: c1:
0
c0: c2: c0:
0
c0: c2: c1:
0
c1: c0: c0:
16991307846246862835209946494978544876836381174527200297540561298613916203860
c1: c0: c1:
8164735751726867362664406806290871136633702655186802416211482152428240187062
c1: c1: c0:
2
c1: c1: c1:
0
c1: c2: c0:
0
c1: c2: c1:
0*/

it('Test ell', function() {
    console.log("");
    
    let f_test = Fq12.one().add(Fq12.one());
    let coeff_test = G2.generator();
    let p_test = G1.generator().to_affine();

    let f_res = Pairing.ell(f_test, coeff_test, p_test);
    
    console.log("The multiplication result is:");
    console.log(f_res.c0.c0.c0.toBigInt());
    console.log(f_res.c0.c0.c1.toBigInt());
    console.log(f_res.c0.c1.c0.toBigInt());
    console.log(f_res.c0.c1.c1.toBigInt());
    console.log(f_res.c0.c2.c0.toBigInt());
    console.log(f_res.c0.c2.c1.toBigInt());
    console.log(f_res.c1.c0.c0.toBigInt());
    console.log(f_res.c1.c0.c1.toBigInt());
    console.log(f_res.c1.c1.c0.toBigInt());
    console.log(f_res.c1.c1.c1.toBigInt());
    console.log(f_res.c1.c2.c0.toBigInt());
    console.log(f_res.c1.c2.c1.toBigInt());

  });

/*Result of the miller loop is:
c0: c0: c0:
8435349465297435165939613326182510559432768151171456927563845943835587893318
c0: c0: c1:
6922971044582888302935485344122945678712627252066050934761503002215637833398
c0: c1: c0:
3020546541473938793128002451374960532067818205039443099811129595927388067286
c0: c1: c1:
17769323050513707778517677686953418267091010046392128507544477374469625612984
c0: c2: c0:
3763732934528536011745626858778706370427043921669046010442849159497712700772
c0: c2: c1:
14549845357758960899323156041109965068703251629332557195387415594452856987644
c1: c0: c0:
6794473403739122020442363891712360649335653313810088419703280842965192069511
c1: c0: c1:
13392128610088202061854730384851289230662074442107826208219257402048685222537
c1: c1: c0:
7433825691721511851102122167239491011947119642840494065360783975919138076820
c1: c1: c1:
19219766045438315144692585480887046659586273909639508979936361306434866171983
c1: c2: c0:
21644873758654527024745287033018303248224386386103324977073303408472355346721
c1: c2: c1:
1280249797837326183721155126067164609135389664909150424992007507737623690374*/

it('Test miller loop', function() {
    console.log("test miller loop on G2 and G1 generator");
    
    let g1_generator = G1.generator();
    let g1_generator_double = g1_generator.add(g1_generator);
    let g1_generator_trible = g1_generator_double.add(g1_generator);
    let g1_affine_3g = g1_generator_trible.to_affine();

    let g2_generator = G2.generator();
    let g2_double = g2_generator.add(g2_generator);
    let g2_affine_2g = g2_double.to_affine();
    
    let miller_loop_test = Pairing.miller_loop(g2_affine_2g, g1_affine_3g);

    let g2 = g2_affine_2g.to_proj();
    let xx = Pairing.doubling_step(g2);

    console.log("THE RESULT DOUBLING is");
    console.log(xx.result.x.c0.toBigInt());
    console.log(xx.result.x.c1.toBigInt());
    console.log(xx.r.y.c0.toBigInt());
    console.log(xx.r.y.c1.toBigInt());
    console.log(xx.r.z.c0.toBigInt());
    console.log(xx.r.z.c1.toBigInt());

    let affine_xx = xx.result.to_affine();

    console.log("THE RESULT DOUBLING AFFINE is");
    console.log(affine_xx.x.c0.toBigInt());
    console.log(affine_xx.x.c1.toBigInt());
    console.log(affine_xx.y.c0.toBigInt());
    console.log(affine_xx.y.c1.toBigInt());
  });

  it('Bilinearity tests', function() {
    console.log("test miller loop on G2 and G1 generator");
    
    let a = G1.generator();
    let b = G2.generator();

    let ac = a.add(a).add(a).add(a);
    let ad = a.add(a).add(a);

    let bc = b.add(b).add(b).add(b);
    let bd = b.add(b).add(b);

    let acbd = Pairing.pair(bd.to_affine(), ac.to_affine());
    let adbc = Pairing.pair(bc.to_affine(), ad.to_affine());

    console.log("Bilinearity test...")
    console.log(acbd.c0.c0.c0.toBigInt());
    console.log(adbc.c0.c0.c0.toBigInt());

    // Test is wrong since miller_loop works incorrect.

  });

});