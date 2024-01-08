import G1 from './g1_new';
import G2 from './g2_new';
import Fq12 from './fq12';

export default class Pairing{

    static line_eval: [Fq12, G2];

    static BN_X_BINARY = [
        0, 1, 0, 0, 0, 1, 0, 0, 
        1, 1, 1, 0, 1, 0, 0, 1, 
        1, 0, 0, 1, 0, 0, 1, 0, 
        1, 0, 1, 1, 0, 1, 0, 0, 
        0, 1, 0, 0, 1, 0, 1, 0, 
        0, 1, 1, 0, 1, 0, 0, 1, 
        0, 0, 0, 0, 1, 0, 0, 1, 
        1, 1, 1, 1, 0, 0, 0, 1
    ];

}