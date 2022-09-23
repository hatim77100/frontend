const carre = n => n * n;
const returntype = n => typeof(n);

const manipuleData = (val, carre, type) => {
    let valFinal;
    valFinal = carre(val);
    return `Valeur final est ${valFinal} est c'est un type : ${type(val)}`;
}
console.log(manipuleData(4,carre,returntype));