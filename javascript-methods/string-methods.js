//string-length
let name = "jagan, mohan pujari";
let namelength = name.length
console.log(namelength) // 18
console.log("\n")


//string-slice()
let str = "iphone, vivo, oppo, samsung, realme";
let slicedString0 = str.slice(0); 
let slicedString1 = str.slice(0,9); 
let slicedString2 = str.slice(4,20); 
let slicedString3 = str.slice(-10,-4);
let slicedString4 = str.slice(-14);
console.log(slicedString0) // iphone, vivo, oppo, samsung, realme
console.log(slicedString1) // iphone, v
console.log(slicedString2) // ne, vivo, oppo,
console.log(slicedString3) // ng, re
console.log(slicedString4) // amsung, realme
console.log("\n")


//string-subString(start,end)
let friuts = "apple, guava, grapes, mango, banana";
let part = friuts.substring(6,1)
console.log(part); // pple,
console.log("\n")


//string-substr(start,length)
let cars = "Tesla, Tata, Ford, Volvo, Mahindra"
let modifiedCars = cars.substr(2,9)
console.log(modifiedCars); //sla, Tata
console.log("\n")


//string-toUpperCase()
let string = "jagan";
let string2 = string.toUpperCase();
console.log(string2)  // JAGAN
console.log("\n")


//string-toLowerCase()
let str1 = "MOHAN"
let lstr1 = str1.toLowerCase();
console.log(lstr1); // mohan
console.log("\n")


//string-replace()
let os = "Microsoft"
let changeOs = os.replace("/Microsoft","Linux")
console.log(changeOs)
console.log("\n")


//string-concat()
 let txt1 = "Hi! This is Jagan."
 let txt2 = "Welcome to our family!"
 let txt3 =txt1.concat(" ",txt2);
 let txt4 = txt1+" "+txt2;
 console.log(txt4) // Hi! This is Jagan. Welcome to our family!
 console.log(txt3) // Hi! This is Jagan. Welcome to our family!
 console.log("\n");


 //string-trim()
 let text = "          Hi, Sai Pallavi            ";
 let textLength  = text.length;
 console.log(textLength) //  37
 let text2 = text.trim();
 console.log(text2) // Hi, Sai Pallavi
 let text3 = text2.length
 console.log(text3) // 15
 console.log("\n")


 //string-padStart()
 let pad = "jagan"
 let padded = pad.padStart(8,"p")
 console.log(padded); // pppjagan
 console.log("\n")


 //string-padEnd()
 let epad = "jagan"
 let epadded = pad.padEnd(8,"p")
 console.log(epadded); // jaganppp
 console.log("\n")


 //string-charAt() & string-charCodeAt()
 let msg = "Namaskaram"
 let char = msg.charAt(3)
 let ccode = msg.charCodeAt(3)
 console.log(char); // a
 console.log(ccode) // 97
 console.log("\n")

 //------------------------STRING-SEARCH-----------------------------//
 //string lastIndexOf(start)- returns the index of the string in last position of a string.
 //string indexOf(string, start)- returns the first occurence of the string 
 //string search(string)
 let message = "Vanakam, yepidi irikinge , nala irikinge pa"
 let index = message.indexOf('irikinge')
 let index1 = message.indexOf('irikinge', 20)
 let lindex = message.lastIndexOf('irikinge')
 let sindex = message.search("yepidi")
 console.log(index) // 16
 console.log(index1) // 32
 console.log(lindex) //32
 console.log(sindex) // 9
 console.log("\n")


 //string-match()
 let mat = "The rain in spain stays mainly in the plain" 
 let mat1 = mat.match(/ain/g)
 console.log(mat1) // [ 'ain', 'ain', 'ain', 'ain' ]
 console.log("\n")


 //string-includes(string, start) - returns the boolean value
 let alert = "Heavy rainfall expected"
 let amsg = alert.includes("rainfall")
 console.log(amsg) 
 console.log("\n")


//string-startsWith()
let warning = "Stop consuming alcohol"
let swarining = warning.startsWith("Stop")
let ewarning = warning.endsWith("alcohol")
console.log(swarining)
console.log(ewarning)