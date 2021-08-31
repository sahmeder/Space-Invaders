alert('Game On')
const ourSpaceship = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
       alert(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            alert(`It's a direct hit!! Well done Capitan!`);
            target.hull = target.hull - this.firepower;
            alert(`alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                alert(`Alien ship is destroyed you have saved the Universe from complete destruction!!`);
            }
        } else {
            alert(`you missed!`);
        }
    }
}
const aliens = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        alert(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            alert(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            alert(`hero has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                alert(`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`);
            }
        } else {
            alert(`You dodged the attack!`);
        }
    }
}
const battle = (player, computer) => {
    while (player.isAlive && computer.isAlive) {
        player.attack(computer);
        if (computer.isAlive) {
            computer.attack(player);
        }
    }
}
battle(ourSpaceship,aliens)