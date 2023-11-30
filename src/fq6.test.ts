import { assert } from 'o1js/dist/node/lib/errors';
import Fq from './fq';
import Fq2 from './fq2'
import Fq6 from './fq6';
import { ForeignField, Field3} from 'o1js/dist/node/lib/gadgets/foreign-field';

/// An element of Fq2, represented by c0 + c1 * u; where u^2 = -1.
describe('test Fq6 bn254', function() {
    //Fq6 First Halo2 Random Parameters
    //c0: c0:
    //243396315656041018029605402550187233771055319601070064817557336100633225
    //c0: c1:
    //486792631312082036059210805100374467542110639202140129635114672201266450
    //c1: c0:
    //243396315656041018029605402550187233771055319601070064817557336100633225
    //c1: c1:
    //2926426369854570369088071089851816439808771074387896944123342170691430575690
    //c2: c0:
    //14122467031815324139623763932299144246693120704533278122458763172487161573493
    //c2: c1:
    //18771297156368092939727873679171789259859850826830295686815922193684037700289


    //Fq6 Second Halo2 Random Parameters
    //c0: c0:
    //10909310004149137988814862231299200400927611156636347915555904953364159779029
    //c0: c1:
    //15515105713814912167975979047768554857341212808312512047788350516889035890945
    //c1: c0:
    //243396315656041018029605402550187233771055319601070064817557336100633225
    //c1: c1:
    //2926426369854570369088071089851816439808771074387896944123342170691430575690
    //c2: c0:
    //14122467031815324139623763932299144246693120704533278122458763172487161573493
    //c2: c1:
    //18771297156368092939727873679171789259859850826830295686815922193684037700289


    //Mul Result Halo2 Random Parameters
    //c0: c0:
    //6642973212751112101615147663046426024327909543677528613852693546089328334340
    //c0: c1:
    //16551619958408328798474555501118628401131206162297662067876669719534659260065
    //c1: c0:
    //9442819309296150376388577281187544594960725908190896236292973932480591696885
    //c1: c1:
    //5536365196918454006493058042967576377553844784130332630073075944375488075664
    //c2: c0:
    //11825727686293638079970891785385506580232672225392215002825048050267475207227
    //c2: c1:
    //16023870745372442504263897330164149298721876845416961942777387968406916255861
  it('Mul Fq6 comparison test', function() {
    let first = new Fq6(
        new Fq2(
            new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n),
            new Fq(486792631312082036059210805100374467542110639202140129635114672201266450n)
        ),
        new Fq2(
            new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n),
            new Fq(2926426369854570369088071089851816439808771074387896944123342170691430575690n)
        ),
        new Fq2(
            new Fq(14122467031815324139623763932299144246693120704533278122458763172487161573493n),
            new Fq(18771297156368092939727873679171789259859850826830295686815922193684037700289n)
        )
    );

    let second = new Fq6(
        new Fq2(
            new Fq(10909310004149137988814862231299200400927611156636347915555904953364159779029n),
            new Fq(15515105713814912167975979047768554857341212808312512047788350516889035890945n)
        ),
        new Fq2(
            new Fq(243396315656041018029605402550187233771055319601070064817557336100633225n),
            new Fq(2926426369854570369088071089851816439808771074387896944123342170691430575690n)
        ),
        new Fq2(
            new Fq(14122467031815324139623763932299144246693120704533278122458763172487161573493n),
            new Fq(18771297156368092939727873679171789259859850826830295686815922193684037700289n)
        )
    );

    let res = second.mul(first);

    console.log("The multiplication result is:");
    console.log(res.c0.c0.toBigInt());
    console.log(res.c0.c1.toBigInt());
    console.log(res.c1.c0.toBigInt());
    console.log(res.c1.c1.toBigInt());
    console.log(res.c2.c0.toBigInt());
    console.log(res.c2.c1.toBigInt());

  });

});