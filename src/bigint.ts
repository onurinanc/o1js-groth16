import {Field, Poseidon} from 'o1js';

export default class PrimeField{
    value: Field;
    
    add(y: Field): Field {
        return new Field(15);
    }

    constructor(x: Field) {
        this.value = Field(10);
        return;
    }
}

