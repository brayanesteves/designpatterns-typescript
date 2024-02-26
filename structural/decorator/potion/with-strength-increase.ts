class WithStrengthIncrease extends DecoratorPotion {
    
    effect():string {
        return `${this.potion.effect()} with strength increase.`;
    }

    price():number {
        return this.potion.price() + 20;
    }
    
}