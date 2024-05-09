let soldi = 5;
let acqua = 0.5,
  cocacola = 1.5,
  birra = 2;
let richiesta;
// richiesta = prompt(
//   ` Benvenuto hai inserito ${soldi}€! \nSeleziona la bevanda:  \n1: Acqua ${acqua}€ \n2 Coca-cola ${cocacola}€ \n3: Birra ${birra}€`
// );
let nuovoAcquisto;
let fineAcquisti;

do {
  richiesta = prompt(
    soldi == 5
      ? ` Benvenuto hai inserito ${soldi}€! \nSeleziona la bevanda:  \n1: Acqua ${acqua}€ \n2 Coca-cola ${cocacola}€ \n3: Birra ${birra}€`
      : `Il tuo credito residuo è ${soldi}€ \nSeleziona un nuovo prodotto o seleziona 0 per terminare gli acquisti e ritirare il resto \n1: Acqua ${acqua}€ \n2 Coca-cola ${cocacola}€ \n3: Birra ${birra}€`
  );
  if (richiesta == 1 && soldi >= acqua) {
    soldi -= acqua;
    alert(`Hai selezionato acqua!`);
  } else if (richiesta == 2 && soldi >= cocacola) {
    soldi -= cocacola;
    alert(`Hai selezionato cocacola!
    \n Il tuo credito residuo è ${soldi}€`);
  } else if (richiesta == 3 && soldi >= birra) {
    soldi -= birra;
    alert(`Hai selezionato Birra!
    \n Il tuo credito residuo è ${soldi}€`);
  } else if (richiesta == 0) {
    nuovoAcquisto = alert(
      `Il tuo resto corrisponde a ${soldi}€ \nGrazie per i suoi acquisti e buona giornata!`
    );
  } else if (soldi < acqua || soldi < cocacola || soldi < birra) {
    alert(`Credito insufficiente`);
  } else {
    alert("Prodotto non disponibile");
  }
} while (soldi >= 0.5 && richiesta != 0);

if (soldi == 0) {
  alert(
    `Hai terminato il credito! \nGrazie per i suoi acquisti e buona giornata!`
  );
}
