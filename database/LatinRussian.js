function convertToCyrillic() {
    let latinText = document.getElementById('latinText').value;
    let cyrillicText = latinText;

    // Special case: handle 'iya' -> 'ия', 'Iya' -> 'Ия', 'IY' -> 'ИЙ' first to prevent conflict
    cyrillicText = cyrillicText.replace(/iya/g, "ия")
                               .replace(/Iya/g, "Ия")
                               .replace(/IY/g, "ИЙ");

    // Handle specific combinations before individual letters (to prevent incorrect mapping)
    cyrillicText = cyrillicText.replace(/ya/g, "я")
                               .replace(/yu/g, "ю")
                               .replace(/sh/g, "ш")
                               .replace(/sch/g, "щ");

    // Uppercase versions of the same transformations
    cyrillicText = cyrillicText.replace(/YA/g, "Я")
                               .replace(/YU/g, "Ю")
                               .replace(/SH/g, "Ш")
                               .replace(/SCH/g, "Щ");
    cyrillicText = cyrillicText.replace(/Ya/g, "Я")
                               .replace(/Yu/g, "Ю")
                               .replace(/Sh/g, "Ш")
                               .replace(/Sch/g, "Щ");

    // Convert from Latin to Cyrillic (lowercase)
    cyrillicText = cyrillicText.replace(/a/g, "а")
                               .replace(/b/g, "б")
                               .replace(/v/g, "в")
                               .replace(/g/g, "г")
                               .replace(/d/g, "д")
                               .replace(/e/g, "е")
                               .replace(/yo/g, "ё")
                               .replace(/zh/g, "ж")
                               .replace(/z/g, "з")
                               .replace(/i/g, "и")
                               .replace(/y/g, "й")
                               .replace(/k/g, "к")
                               .replace(/l/g, "л")
                               .replace(/m/g, "м")
                               .replace(/n/g, "н")
                               .replace(/o/g, "о")
                               .replace(/p/g, "п")
                               .replace(/r/g, "р")
                               .replace(/s/g, "с")
                               .replace(/t/g, "т")
                               .replace(/u/g, "у")
                               .replace(/f/g, "ф")
                               .replace(/kh/g, "х")
                               .replace(/ts/g, "ц")
                               .replace(/ch/g, "ч")
                               .replace(/y/g, "ы")
                               .replace(/e/g, "э");

    // Convert from Latin to Cyrillic (uppercase)
    cyrillicText = cyrillicText.replace(/A/g, "А")
                               .replace(/B/g, "Б")
                               .replace(/V/g, "В")
                               .replace(/G/g, "Г")
                               .replace(/D/g, "Д")
                               .replace(/E/g, "Е")
                               .replace(/YO/g, "Ё")
                               .replace(/ZH/g, "Ж")
                               .replace(/Z/g, "З")
                               .replace(/I/g, "И")
                               .replace(/Y/g, "Й")
                               .replace(/K/g, "К")
                               .replace(/L/g, "Л")
                               .replace(/M/g, "М")
                               .replace(/N/g, "Н")
                               .replace(/O/g, "О")
                               .replace(/P/g, "П")
                               .replace(/R/g, "Р")
                               .replace(/S/g, "С")
                               .replace(/T/g, "Т")
                               .replace(/U/g, "У")
                               .replace(/F/g, "Ф")
                               .replace(/KH/g, "Х")
                               .replace(/TS/g, "Ц")
                               .replace(/CH/g, "Ч")
                               .replace(/Y/g, "Ы")
                               .replace(/E/g, "Э");

    document.getElementById('cyrillicText').value = cyrillicText;
}

function convertToLatin() {
    let cyrillicText = document.getElementById('cyrillicText').value;
    let latinText = cyrillicText;

    // Handle specific Cyrillic combinations before individual letters
    latinText = latinText.replace(/я/g, "ya")
                         .replace(/ю/g, "yu")
                         .replace(/ш/g, "sh")
                         .replace(/щ/g, "sch");

    // Handle uppercase versions of the combinations
    latinText = latinText.replace(/Я/, "YA")
                         .replace(/Ю/, "YU")
                         .replace(/Ш/, "SH")
                         .replace(/Щ/, "SCH");

    latinText = latinText.replace(/Я/g, "Ya")
                         .replace(/Ю/g, "Yu")
                         .replace(/Ш/g, "Sh")
                         .replace(/Щ/g, "Sch");

    // Convert from Cyrillic to Latin (lowercase)
    latinText = latinText.replace(/а/g, "a")
                         .replace(/б/g, "b")
                         .replace(/в/g, "v")
                         .replace(/г/g, "g")
                         .replace(/д/g, "d")
                         .replace(/е/g, "e")
                         .replace(/ё/g, "yo")
                         .replace(/ж/g, "zh")
                         .replace(/з/g, "z")
                         .replace(/и/g, "i")
                         .replace(/й/g, "y")
                         .replace(/к/g, "k")
                         .replace(/л/g, "l")
                         .replace(/м/g, "m")
                         .replace(/н/g, "n")
                         .replace(/о/g, "o")
                         .replace(/п/g, "p")
                         .replace(/р/g, "r")
                         .replace(/с/g, "s")
                         .replace(/т/g, "t")
                         .replace(/у/g, "u")
                         .replace(/ф/g, "f")
                         .replace(/х/g, "kh")
                         .replace(/ц/g, "ts")
                         .replace(/ч/g, "ch")
                         .replace(/ы/g, "y")
                         .replace(/э/g, "e");

    // Convert from Cyrillic to Latin (uppercase)
    latinText = latinText.replace(/А/g, "A")
                         .replace(/Б/g, "B")
                         .replace(/В/g, "V")
                         .replace(/Г/g, "G")
                         .replace(/Д/g, "D")
                         .replace(/Е/g, "E")
                         .replace(/Ё/g, "YO")
                         .replace(/Ж/g, "ZH")
                         .replace(/З/g, "Z")
                         .replace(/И/g, "I")
                         .replace(/Й/g, "Y")
                         .replace(/К/g, "K")
                         .replace(/Л/g, "L")
                         .replace(/М/g, "M")
                         .replace(/Н/g, "N")
                         .replace(/О/g, "O")
                         .replace(/П/g, "P")
                         .replace(/Р/g, "Р")
                         .replace(/С/g, "S")
                         .replace(/Т/g, "T")
                         .replace(/У/g, "U")
                         .replace(/Ф/g, "F")
                         .replace(/Х/g, "KH")
                         .replace(/Ц/g, "TS")
                         .replace(/Ч/g, "CH")
                         .replace(/Ш/g, "SH")
                         .replace(/Щ/g, "SCH")
                         .replace(/Ы/g, "Y")
                         .replace(/Э/g, "E")
                         .replace(/Ю/g, "YU")
                         .replace(/Я/g, "YA");

    document.getElementById('latinText').value = latinText;
}
