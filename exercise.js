class Enemy{
    constructor(speed, healthPoint, manaPoint, normalAttack){
        this.speed = speed;
        this.hp = healthPoint;
        this.mp = manaPoint;
        this.atk = normalAttack;
    }

    attack(){
        this.hp - 50;
    }

    skillAttack(){
        this.hp - 100;
        this.mp -20
    }

}

class Zombie extends Enemy {
    constructor(speed, healthPoint, manaPoint, normalAttack){
        super(speed, healthPoint, manaPoint, normalAttack)
    }

    walk(){
        this.speed * 1;
    }

    running(){
        this.speed * 5
    }
}

class Cerberus extends Enemy{
    constructor(speed, healthPoint, manaPoint, normalAttack){
        super(speed, healthPoint, manaPoint, normalAttack)
    }

    clawsAttack(){
        this.hp - 100;
    }

    skillRoaring(){
        this.hp - 500;
        this.mp - 50;
    }

    enhanceAttack(){
        this.atk * 2;
        this.hp - 200;
        this.mp - 10;
    }

}