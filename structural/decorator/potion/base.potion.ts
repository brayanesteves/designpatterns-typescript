class BasePotion implements Potion {
    private alchemist:string;

    constructor(alchemist:string) {
        this.alchemist = alchemist;
    }

    effect():string {
        return `Electrolytes for the body.`;
    }

    price():number {
        return 10;
    }

    getAlchemist() {
        return this.alchemist;
    }
}