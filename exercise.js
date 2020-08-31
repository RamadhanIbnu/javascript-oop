class Enemy{
    constructor(speed, healthPoint, manaPoint, normalAttack){
        this.speed = speed;
        this.hp = healthPoint;
        this.mp = manaPoint;
        this.atk = normalAttack;
    }

    attack(){
        this.hp -= 50;
        return this.hp;
    }

    skillAttack(){
        this.hp -= 100;
        this.mp -=20
    }

}

class Zombie extends Enemy {
    constructor(speed, healthPoint, manaPoint, normalAttack){
        super(speed, healthPoint, manaPoint, normalAttack)
    }

    walk(){
        this.speed *= 1;
    }

    running(){
        this.speed *= 5
    }
}

class Cerberus extends Enemy{
    constructor(speed, healthPoint, manaPoint, normalAttack){
        super(speed, healthPoint, manaPoint, normalAttack)
    }

    clawsAttack(){
        this.hp -= 100;
    }

    skillRoaring(){
        this.hp -= 500;
        this.mp -= 50;
    }

    enhanceAttack(){
        this.atk *= 2;
        this.mp -= 10;
    }

}



class hero{
    constructor(healthPoint, manaPoint, normalAttack, skillAttack){
        this.hp = healthPoint;
        this.mp = manaPoint;
        this.atk = normalAttack;
        this.skill = skillAttack;
    }

    attack(){

    }
}