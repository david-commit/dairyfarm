

function displayQuantity() {
   const textData1 = document.getElementById("quantityInputA").value;
   document.getElementById("output1").innerHTML = "Your production in Shed A is " + textData1 + " litres per day ";
   console.log(textData1);
//    return textData1;

   const textData2 = document.getElementById("quantityInputB").value;
   document.getElementById("output2").innerHTML = "Your production in Shed B is " + textData2 + " litres per day ";
   console.log(textData2);
//    return textData2;

   const textData3 = document.getElementById("quantityInputC").value;
   document.getElementById("output3").innerHTML = "Your production in Shed C is " + textData3 + " litres per day ";
   console.log(textData3);
//    return textData3;

   const textData4 = document.getElementById("quantityInputD").value;
   document.getElementById("output4").innerHTML = "Your production in Shed D is " + textData4 + " litres per day ";
   console.log(textData4);
//    return textData4;
}
    
addBtn.addEventListener("click", displayQuantity);