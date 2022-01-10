class automat {
    ser = 0;
    peperoni = 0;
    krewetki = 0;
}
    pizza=new automat;
    pizza.ser=parseInt(prompt('podaj ilość sera, którą mam użyć do pizzy (w precentach od 0 do 100)'));
    pizza.peperoni=parseInt(prompt('podaj ilość pepperoni, którą mam użyć do pizzy (w precentach od 0 do 100)'));
    pizza.krewetki=parseInt(prompt('podaj ilość krewetek, którą mam użyć do pizzy (w precentach od 0 do 100)'));
    let bob=(pizza.ser + pizza.peperoni + pizza.krewetki);

    if(bob>100)
        alert('przekroczono dopuszczalne 100% składników');
    else if(bob<0)
        alert('JUREK NIE!!');
    else{

        if(pizza.peperoni>0 || pizza.krewetki>0)
        document.write('Pizza nie jest wegetariańska <br>');
        else
            document.write('Pizza jest wegetariańska <br>');

        let kalorie = 248+54+(2.54*pizza.ser)+(4.935*pizza.peperoni)+(0.85*pizza.krewetki);
        document.write('wartość kaloryczna pizzy: '+kalorie+' kcal<br>');
        let cena = 5.19+1.6+(0.08*pizza.ser)+(0.06*pizza.peperoni)+(0.02*pizza.krewetki);
        document.write('Cena pizzy wynosi: '+cena+' zł<br>');
    }

