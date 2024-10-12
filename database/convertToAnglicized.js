function convertToAnglicized() {
    let azText = document.getElementById('azText').value;
    let anglicizedText = azText;

    // Special cases
    anglicizedText = anglicizedText.replace(/ə/g, "ae");
    anglicizedText = anglicizedText.replace(/Ə/g, "AE");
    anglicizedText = anglicizedText.replace(/Ə/g, "Ae");
    anglicizedText = anglicizedText.replace(/ö/g, "oe");
    anglicizedText = anglicizedText.replace(/Ö/g, "OE");
    anglicizedText = anglicizedText.replace(/Ö/g, "Oe");
    anglicizedText = anglicizedText.replace(/ı/g, "ii");
    anglicizedText = anglicizedText.replace(/ü/g, "ue");
    anglicizedText = anglicizedText.replace(/Ü/g, "Ue");
    anglicizedText = anglicizedText.replace(/Ü/g, "UE");
    anglicizedText = anglicizedText.replace(/İ/g, "I");
    anglicizedText = anglicizedText.replace(/ş/g, "sh");
anglicizedText = anglicizedText.replace(/Ş/g, "Sh");
anglicizedText = anglicizedText.replace(/ç/g, "ch");
anglicizedText = anglicizedText.replace(/Ç/g, "Ch");
anglicizedText = anglicizedText.replace(/ğ/g, "gh");
anglicizedText = anglicizedText.replace(/Ğ/g, "Gh");
anglicizedText = anglicizedText.replace(/x/g, "kh");
anglicizedText = anglicizedText.replace(/X/g, "Kh");
anglicizedText = anglicizedText.replace(/j/g, "zh");
anglicizedText = anglicizedText.replace(/J/g, "Zh");
    anglicizedText = anglicizedText.replace(/c/g, "c"); // Keeping 'c' as 'c' in Anglicized
    anglicizedText = anglicizedText.replace(/C/g, "C"); // Keeping 'C' as 'C' in Anglicized

    // Other conversions
    anglicizedText = anglicizedText.replace(/a/g, "a");
    anglicizedText = anglicizedText.replace(/b/g, "b");
    anglicizedText = anglicizedText.replace(/g/g, "g");
    anglicizedText = anglicizedText.replace(/d/g, "d");
    anglicizedText = anglicizedText.replace(/e/g, "e");
    anglicizedText = anglicizedText.replace(/ə/g, "ae");
    anglicizedText = anglicizedText.replace(/f/g, "f");
    anglicizedText = anglicizedText.replace(/q/g, "q");
    anglicizedText = anglicizedText.replace(/k/g, "k");
    anglicizedText = anglicizedText.replace(/l/g, "l");
    anglicizedText = anglicizedText.replace(/m/g, "m");
    anglicizedText = anglicizedText.replace(/n/g, "n");
    anglicizedText = anglicizedText.replace(/o/g, "o");
    anglicizedText = anglicizedText.replace(/p/g, "p");
    anglicizedText = anglicizedText.replace(/r/g, "r");
    anglicizedText = anglicizedText.replace(/s/g, "s");
    anglicizedText = anglicizedText.replace(/t/g, "t");
    anglicizedText = anglicizedText.replace(/u/g, "u");
    anglicizedText = anglicizedText.replace(/v/g, "v");
    anglicizedText = anglicizedText.replace(/y/g, "y");
    anglicizedText = anglicizedText.replace(/z/g, "z");

    // Handle special cases for digraphs
    anglicizedText = anglicizedText.replace(/ya/g, "ya");
    anglicizedText = anglicizedText.replace(/yu/g, "yu");

    document.getElementById('anglicizedText').value = anglicizedText;
}

function convertToAzerbaijani() {
    let anglicizedText = document.getElementById('anglicizedText').value;
    let azText = anglicizedText;

    // Special cases
    azText = azText.replace(/ae/g, "ə");
    azText = azText.replace(/Ae/g, "Ə");
    azText = azText.replace(/AE/g, "Ə");
    azText = azText.replace(/oe/g, "ö");
    azText = azText.replace(/Oe/g, "Ö");
    azText = azText.replace(/OE/g, "Ö");
    azText = azText.replace(/ii/g, "ı");
    azText = azText.replace(/I/g, "İ");
    azText = azText.replace(/ue/g, "ü");
    azText = azText.replace(/Ue/g, "Ü");
    azText = azText.replace(/UE/g, "Ü");
    azText = azText.replace(/sh/g, "ş");
    azText = azText.replace(/ch/g, "ç");
    azText = azText.replace(/Sh/g, "Ş");
    azText = azText.replace(/Ch/g, "Ç");
    azText = azText.replace(/SH/g, "Ş");
    azText = azText.replace(/CH/g, "Ç");
    azText = azText.replace(/kh/g, "x");
    azText = azText.replace(/gh/g, "ğ");
    azText = azText.replace(/zh/g, "j");
    azText = azText.replace(/c/g, "c"); // Keeping 'c' as 'c' in Azerbaijani
    azText = azText.replace(/C/g, "C"); // Keeping 'C' as 'C' in Azerbaijani

    // Other conversions
    azText = azText.replace(/a/g, "a");
    azText = azText.replace(/b/g, "b");
    azText = azText.replace(/g/g, "g");
    azText = azText.replace(/d/g, "d");
    azText = azText.replace(/e/g, "e");
    azText = azText.replace(/ae/g, "ə");
    azText = azText.replace(/f/g, "f");
    azText = azText.replace(/q/g, "q");
    azText = azText.replace(/k/g, "k");
    azText = azText.replace(/l/g, "l");
    azText = azText.replace(/m/g, "m");
    azText = azText.replace(/n/g, "n");
    azText = azText.replace(/o/g, "o");
    azText = azText.replace(/p/g, "p");
    azText = azText.replace(/r/g, "r");
    azText = azText.replace(/s/g, "s");
    azText = azText.replace(/t/g, "t");
    azText = azText.replace(/u/g, "u");
    azText = azText.replace(/v/g, "v");
    azText = azText.replace(/y/g, "y");
    azText = azText.replace(/z/g, "z");

    // Handle special cases for digraphs
    azText = azText.replace(/ya/g, "ya");
    azText = azText.replace(/yu/g, "yu");

    document.getElementById('azText').value = azText;
}
