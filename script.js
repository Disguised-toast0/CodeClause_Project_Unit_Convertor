function convert() {
    var fromValue = document.getElementById("fromValue").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = document.getElementById("result");
   
    if (fromUnit === toUnit) {
     result.innerHTML = "Do I have to tell you this also seriously?...change the units dude!";
     return;
    }
   
    var conversionFactor = getConversionFactor(fromUnit, toUnit);
    if (conversionFactor === null) {
     result.innerHTML = "I will do it Tommorow :)";
     return;
    }
   
    var convertedValue = fromValue * conversionFactor;
    result.innerHTML =   " Here you go = " + convertedValue.toFixed(2) + " " + toUnit ;
   }
   
   function getConversionFactor(fromUnit, toUnit) {
    switch(fromUnit) {
     case "meters":
      switch(toUnit) {
       case "feet":
        return 3.28084;
       case "inches":
        return 39.3701;
       case "centimeters":
        return 100;
       case "kilometers":
        return 0.001;
       case "miles":
        return 0.000621371;
       default:
        return null;
      }
     case "feet":
      switch(toUnit) {
       case "meters":
        return 0.3048;
       case "inches":
        return 12;
       case "centimeters":
        return 30.48;
       case "kilometers":
        return 0.0003048;
       case "miles":
        return 0.000189394;
       default:
        return null;
      }
     case "inches":
      switch(toUnit) {
       case "meters":
        return 0.0254;
       case "feet":
        return 0.0833333;
       case "centimeters":
        return 2.54;
       case "kilometers":
        return 0.0000254;
       case "miles":
        return 0.0000157828;
       default:
        return null;
      }
     case "centimeters":
      switch(toUnit) {
       case "meters":
        return 0.01;
       case "feet":
        return 0.0328084;
       case "inches":
        return 0.393701;
       case "kilometers":
        return 0.00001;
       case "miles":
        return 0.00000621371;
       default:
        return null;
      }
     case "kilometers":
      switch(toUnit) {
       case "meters":
        return 1000;
       case "feet":
        return 3280.84;
       case "inches":
        return 39370.1;
       case "centimeters":
        return 100000;
       case "miles":
        return 0.621371;
       default:
        return null;
      }
     case "miles":
      switch(toUnit) {
       case "meters":
        return 1609.34;
       case "feet":
        return 5280;
       case "inches":
        return 63360;
       case "centimeters":
        return 160934;
       case "kilometers":
        return 1.60934;
       default:
        return null;
      }
     default:
      return null;
    }
   }
 