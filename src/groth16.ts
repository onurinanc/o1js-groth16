import {Field, Group, Poseidon, Scalar} from 'o1js';
import Fp12 from './fp12';
import Fp2 from './fp2';
import Pairing from './pairing';
import G2Group from './g2_depreceated';
import { Pallas } from 'o1js/dist/node/bindings/crypto/elliptic_curve';


// struct VerifyingKey
// struct Proof
// function that brings VerifyingKey -> Constructor
// pairing function that uses pairings
// verifyProof function


class VerifyingKey {
    alfa1: Group;
    beta2: G2Group;
    gamma2: G2Group;
    delta2: G2Group;
    IC: Group[];

    constructor(alfa1: Group, beta2: G2Group, gamma2: G2Group, delta2: G2Group, IC: Group[]) {
        this.alfa1 = alfa1;
        this.beta2 = beta2;
        this.gamma2 = gamma2;
        this.delta2 = delta2;
        this.IC = IC;
    }
}

class Proof {
    A: Group;
    B: G2Group;
    C: Group;

    constructor(A: Group, B: G2Group, C: Group) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
}

export default function verifyGroth16(vkVerifier: VerifyingKey, publicSignals: Field[], _proof: Proof){
    let vk_x = Group({x: Field(0), y: Field(0)});
    vk_x = vk_x.add(vkVerifier.IC[0]);

    for(let i = 0; i < publicSignals.length; i++) {
        // scalar multiplication !not_implemented
        // let temp = vkVerifier.IC[i+1].
        // scale function is scalar multiplication in the Pallas Curve
        // we need to implement a new scalar multiplication in BN254 G1Curve
        
        // TEMPORARY! FIX THE SCALAR MULTIPLICATION

        // let x = publicSignals[i];
        // let temp: Group = vkVerifier.IC[i+1].scale(Scalar(x));
        // Scale fonksiyonu scalar kullanıyor. Biz ise, field ile bunu implement edeceğiz.

        let temp: Group = new Group({x: Field(0), y:Field(0)});
        vk_x = vk_x.add(temp);
    }

    // add the special pairing in here (Tornado-like pairing)
    
}
