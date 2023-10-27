import {Field, Poseidon} from 'o1js';

export default class Fp2{
    // An element of Fp2 is respresented by c0 + c1 * u
    c0: Field;
    c1: Field;
    
    constructor(c0: Field, c1: Field) {
        // we can add checks later
        this.c0 = c0;
        this.c1 = c1;
    }

    static zero() {
        return new Fp2(Field(0), Field(0));
    }

    static one() {
        return new Fp2(Field(1), Field(0));
    }

    add(y: Fp2) {
        return new Fp2(
            this.c0.add(y.c0),
            this.c1.add(y.c1)
        );
    }

    sub(y: Fp2) {
        return new Fp2(
            this.c0.sub(y.c0),
            this.c1.sub(y.c1)
        );
    }

    mul(y: Fp2) {
        let t1 = this.c0.mul(y.c0);
        let t0 = this.c0.add(this.c1);
        let t2 = this.c1.mul(y.c1);

        let c1 = y.c0.add(y.c1);
        let c0 = t1.sub(t2);

        t1 = t1.add(t2);
        t0 = t0.mul(c1);
        c1 = t0.sub(t1);

        return new Fp2(c0, c1);
    }

    double() {
        return new Fp2(
            this.c0.add(this.c0),
            this.c1.add(this.c1)
        );
    }

    square() {
        let ab = this.c0.mul(this.c1);
        let c0c1 = this.c0.add(this.c1);
        let c0 = this.c1.neg();
        c0 = c0.add(this.c0);
        c0 = c0.mul(c0c1);
        c0 = c0.sub(ab);

        return new Fp2 (
            c0.add(ab),
            ab.add(ab)
        );
    }

    neg() {
        return new Fp2(
            this.c0.neg(),
            this.c1.neg()
        );
    }

    conjugate() {
        return new Fp2(
            this.c0,
            this.c1.neg()
        );
    }

    // do we need to return bool?
    assertEquals(y: Fp2) {
        this.c0.assertEquals(y.c0);
        this.c1.assertEquals(y.c1);
    }

    equals(y: Fp2) {
        if(this.c0.equals(y.c0) && this.c1.equals(y.c1)) {
            return true;
        } else {
            return false;
        }
    }

    notEquals(y: Fp2) {
        if(this.c0.equals(y.c0) && this.c1.equals(y.c1)) {
            return false;
        } else {
            return true;
        }
    }

    // do we need to return bool?
    // now, isZero() returns bool
    isZero() {
        //this.c0.assertEquals(Field(0));
        //this.c1.assertEquals(Field(0));

        if(this.c0.equals(0) && this.c1.equals(0)) {
            return true;
        } else {
            return false;
        }
    }

    // do we need to return bool?
    isOne() {
        this.c0.assertEquals(Field(1));
        this.c1.assertEquals(Field(0));
    }

    // Algorithm 7 from: https://eprint.iacr.org/2010/354.pdf
    mul_by_b0(b0: Field) {
        return new Fp2(
            this.c0.mul(b0),
            this.c1.mul(b0)
        );
    }

    // Algorithm 8 from: https://eprint.iacr.org/2010/354.pdf
    invert() {
        let t0 = this.c0.mul(this.c0);
        let t1 = this.c1.mul(this.c1);
        t0 = t0.add(t1);
        t1 = t0.inv();
        let c0 = t1.mul(this.c0);
        let c1 = this.c1.mul(t1);
        c1 = c1.neg();

        return new Fp2(
            c0,
            c1
        );
    }

    // We need to implement quadratic nonresidue of Pallas as temporary
    // Implemented quadratic nonresidue of BN254
    mul_by_nonresidue() {
        let t0 = this.c0;
        let t1 = this.c1;

        let p2 = this.double();
        let p4 = p2.double();
        let p8 = p4.double();

        let c0 = p8.c0.add(t0);
        c0 = c0.sub(t1);

        let c1 = p8.c1.add(t1);
        c1 = c1.add(t0);

        return new Fp2(
            c0,
            c1
        );
    }

    // parameters for bn254
    mul_by_non_residue_1_power_1() {
        let y = new Fp2(
            Field(8376118865763821496583973867626364092589906065868298776909617916018768340080),
            Field(16469823323077808223889137241176536799009286646108169935659301613961712198316)
        );
        return this.mul(y);
    }

    mul_by_non_residue_1_power_2() {
        let y = new Fp2(
            Field(21575463638280843010398324269430826099269044274347216827212613867836435027261),
            Field(10307601595873709700152284273816112264069230130616436755625194854815875713954)
        );
        return this.mul(y);
    }

    mul_by_non_residue_1_power_3() {
        let y = new Fp2(
            Field(2821565182194536844548159561693502659359617185244120367078079554186484126554),
            Field(3505843767911556378687030309984248845540243509899259641013678093033130930403)
        );
        return this.mul(y);
    }

    mul_by_non_residue_1_power_4() {
        let y = new Fp2(
            Field(2581911344467009335267311115468803099551665605076196740867805258568234346338),
            Field(19937756971775647987995932169929341994314640652964949448313374472400716661030)
        );
        return this.mul(y);
    }

    mul_by_non_residue_1_power_5() {
        let y = new Fp2(
            Field(685108087231508774477564247770172212460312782337200605669322048753928464687),
            Field(8447204650696766136447902020341177575205426561248465145919723016860428151883)
        );
        return this.mul(y);
    }

    mul_by_non_residue_2_power_1() {
        return this.mul_by_b0(Field(21888242871839275220042445260109153167277707414472061641714758635765020556617));
    }

    mul_by_non_residue_2_power_2() {
        return this.mul_by_b0(Field(21888242871839275220042445260109153167277707414472061641714758635765020556616));
    }

    mul_by_non_residue_2_power_3() {
        return this.mul_by_b0(Field(21888242871839275222246405745257275088696311157297823662689037894645226208582));
    }

    mul_by_non_residue_2_power_4() {
        return this.mul_by_b0(Field(2203960485148121921418603742825762020974279258880205651966));
    }

    mul_by_non_residue_2_power_5() {
        return this.mul_by_b0(Field(2203960485148121921418603742825762020974279258880205651967));
    }

    mul_by_non_residue_3_power_1() {
        let y = new Fp2(
            Field(11697423496358154304825782922584725312912383441159505038794027105778954184319),
            Field(303847389135065887422783454877609941456349188919719272345083954437860409601)
        );
        return this.mul(y);
    }

    mul_by_non_residue_3_power_2() {
        let y = new Fp2(
            Field(3772000881919853776433695186713858239009073593817195771773381919316419345261),
            Field(2236595495967245188281701248203181795121068902605861227855261137820944008926)
        );
        return this.mul(y);
    }

    mul_by_non_residue_3_power_3() {
        let y = new Fp2(
            Field(19066677689644738377698246183563772429336693972053703295610958340458742082029),
            Field(18382399103927718843559375435273026243156067647398564021675359801612095278180)
        );
        return this.mul(y);
    }

    mul_by_non_residue_3_power_4() {
        let y = new Fp2(
            Field(5324479202449903542726783395506214481928257762400643279780343368557297135718),
            Field(16208900380737693084919495127334387981393726419856888799917914180988844123039)
        );
        return this.mul(y);
    }

    mul_by_non_residue_3_power_5() {
        let y = new Fp2(
            Field(8941241848238582420466759817324047081148088512956452953208002715982955420483),
            Field(10338197737521362862238855242243140895517409139741313354160881284257516364953)
        );
        return this.mul(y);
    }
}