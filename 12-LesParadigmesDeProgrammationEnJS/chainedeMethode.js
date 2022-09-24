class Voiture {
    constructor(marque, annee, option) {
        this.marque = marque,
        this.annee = annee,
        this.option = option
    }
    rajoutOption(nomOption){
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'option: ${this.option}`);
        return this;
    }
}
const voiture1 = new Voiture("sigma", 2020,0);

voiture1
.rajoutOption('5 porte')
.rajoutOption('2 pneu')
.rajoutOption('Gps');
