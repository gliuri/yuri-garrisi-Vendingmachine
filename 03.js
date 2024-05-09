let soldi = 5;
let acqua = 0.5,
  cocacola = 1.5,
  birra = 2;
let richiesta = prompt(
  ` Benvenuto hai inserito ${soldi}€! \nSeleziona la bevanda:  \n1: Acqua ${acqua}€ \n2 Coca-cola ${cocacola}€ \n3: Birra ${birra}€`
);

if (richiesta == 1 && soldi >= acqua) {
  soldi -= acqua;
  alert(`Hai selezionato acqua!
  \n Il tuo credito residuo è ${soldi}€`);
} else if (richiesta == 2 && soldi >= cocacola) {
  soldi -= cocacola;
  alert(`Hai selezionato cocacola!
  \n Il tuo credito residuo è ${soldi}€`);
} else if (richiesta == 3 && soldi >= cocacola) {
  soldi -= birra;
  alert(`Hai selezionato Birra!
  \n Il tuo credito residuo è ${soldi}€`);
} else {
  prompt("Prodotto non disponibile");
}
