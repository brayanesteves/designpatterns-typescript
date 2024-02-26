abstract class DecoratorPotion implements Potion {
    protected potion:Potion;
    constructor(potion:Potion) {
        this.potion = potion;
    }

    abstract effect():string;
    abstract price():number;
}