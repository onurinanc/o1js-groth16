import Fq from "./fq";
import Fq2 from "./fq2";
import G2 from "./g2_new";

export default class G2Affine{   
    x: Fq2;
    y: Fq2;

    constructor(x: Fq2, y: Fq2) {
        // we can add checks later
        this.x = x;
        this.y = y;
    }

    static a = new Fq2(
        new Fq(0n),
        new Fq(0n)
    );

    static b = new Fq2(
        new Fq(19485874751759354771024239261021720505790618469301721065564631296452457478373n),
        new Fq(266929791119991161246907387137283842545076965332900288569378510910307636690n)
    );

    static curve_constant_3b = new Fq2(
        new Fq(14681138511599513868579906292550611339979233093309515871315818100066920017953n),
        new Fq(800789373359973483740722161411851527635230895998700865708135532730922910070n)
    );

    to_proj() {
        return new G2(
            this.x,
            this.y,
            new Fq2(
                new Fq(1n),
                new Fq(0n)
            )
        )
    }
    
}