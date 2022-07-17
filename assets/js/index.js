var sellingPrice = 45;

let leapYear = {
    jan : 31,
    feb : 29,
    mar : 31,
    apr : 30,
    may : 31,
    jun : 30,
    jul : 31,
    aug : 31,
    sep : 30,
    oct : 31,
    nov : 30,
    dec : 31
}

function displayQuantity() {
   const textData1 = parseInt(document.getElementById("quantityInputA").value);
   document.getElementById("output1").innerHTML = "Your production in Shed A is " + textData1 + " litres per day ";
   console.log(textData1);
//    return textData1;

   const textData2 = parseInt(document.getElementById("quantityInputB").value);
   document.getElementById("output2").innerHTML = "Your production in Shed B is " + textData2 + " litres per day ";
   console.log(textData2);
//    return textData2;

   const textData3 = parseInt(document.getElementById("quantityInputC").value);
   document.getElementById("output3").innerHTML = "Your production in Shed C is  " + textData3 + " litres per day ";
   console.log(textData3);
//    return textData3;

   const textData4 = parseInt(document.getElementById("quantityInputD").value);
   document.getElementById("output4").innerHTML = "Your production in Shed D is " + textData4 + " litres per day ";
   console.log(textData4);
//    return textData4;

    var totalProduction = parseInt(textData1 + textData2 + textData3 + textData4);
    document.getElementById("output5").innerHTML = "Your production in all Sheds is " + totalProduction + " litres per day ";
    console.log(totalProduction)

    // Weekly Income
    var weeklyIncome = totalProduction * sellingPrice * 7;
    document.getElementById("weeklyIncome").innerHTML = "Your weekly income is Ksh. " + weeklyIncome;
    console.log(weeklyIncome)

    // Yearly Income
    var yearlyIncome = totalProduction * sellingPrice * 365;
    document.getElementById("yearlyIncome").innerHTML = "Your yearly income will be Ksh. " + yearlyIncome;
    console.log(yearlyIncome)

        // Monthly Income
        var janIncome = totalProduction * sellingPrice * leapYear.jan;
        document.getElementById("jan").innerHTML = "Your January income is Ksh. " + janIncome;
        console.log(janIncome)

        var febIncome = totalProduction * sellingPrice * leapYear.feb;
        document.getElementById("feb").innerHTML = "Your February income is Ksh. " + febIncome;
        console.log(febIncome)

        var marIncome = totalProduction * sellingPrice * leapYear.mar;
        document.getElementById("mar").innerHTML = "Your March income is Ksh. " + marIncome;
        console.log(marIncome)
        
        var aprIncome = totalProduction * sellingPrice * leapYear.apr;
        document.getElementById("apr").innerHTML = "Your April income is Ksh. " + aprIncome;
        console.log(aprIncome)
        
        var mayIncome = totalProduction * sellingPrice * leapYear.may;
        document.getElementById("may").innerHTML = "Your May income is Ksh. " + mayIncome;
        console.log(mayIncome)

        var junIncome = totalProduction * sellingPrice * leapYear.jun;
        document.getElementById("jun").innerHTML = "Your June income is Ksh. " + junIncome;
        console.log(junIncome)

        var julIncome = totalProduction * sellingPrice * leapYear.jul;
        document.getElementById("jul").innerHTML = "Your July income is Ksh. " + julIncome;
        console.log(julIncome)

        var augIncome = totalProduction * sellingPrice * leapYear.aug;
        document.getElementById("aug").innerHTML = "Your August income is Ksh. " + augIncome;
        console.log(augIncome)

        var sepIncome = totalProduction * sellingPrice * leapYear.sep;
        document.getElementById("sep").innerHTML = "Your September income is Ksh. " + sepIncome;
        console.log(sepIncome)

        var octIncome = totalProduction * sellingPrice * leapYear.oct;
        document.getElementById("oct").innerHTML = "Your October income is Ksh. " + octIncome;
        console.log(octIncome)

        var novIncome = totalProduction * sellingPrice * leapYear.nov;
        document.getElementById("nov").innerHTML = "Your November income is Ksh. " + novIncome;
        console.log(novIncome)

        var decIncome = totalProduction * sellingPrice * leapYear.dec;
        document.getElementById("dec").innerHTML = "Your December income is Ksh. " + decIncome;
        console.log(decIncome)
}
    
addBtn.addEventListener("click", displayQuantity);