import {Field, Poseidon} from 'o1js';
import PrimeField from './bigint';

function hashField(preimage: Field) {
    let hash = Poseidon.hash([preimage]);
    console.log(hash)
  }

describe('calculate', function() {
  it('add', function() {
    //console.log(Poseidon.hash([Field(0x2342), Field(0x333)]));
    console.log("hello");
    let x = new PrimeField(Field(20));
    console.log(x.value);
    console.log(Field(28948022309329048855892746252171976963363056481941560715954676764349967630336n))
  }); 
});

// field element is at most 256 bit.
// So, it would be easier to implement snark_prime_field with this
// BigInt'e ihtiyacımız yok.
// prime_field nereden implement edelim??