console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const arr = [2, 22,12, 17, 18, 39, 129];


function arraySum(numbers){
    let sum = 0;



    numbers.forEach((number, index) => {
        sum = number + sum; 
    });

    return sum;     
}

console.log(arraySum(arr));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook= {};

favBook.title = "Junie B. Jones";
favBook.author = "Barbara Parks";
favBook.pageCount = 80;
favBook.readCount = 5;


console.log(favBook);

favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} pages and has been read ${this.readCount} times.`;
};

console.log(favBook.info());



//Exercise 3 


const sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(" "); 
console.log(words);

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    
    const tempArr = words[i].split("");
    tempArr.reverse();
    tempArr.join("");
    const tempWord = tempArr.join("");
    words[i] = tempWord;
}


const resultSentence = words.join(" ");
console.log(resultSentence); 


//Exercise 4 


let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

//string => array 
const rows = csvData.split("\n");
console.log(rows); 

console.log(rows[0]);
console.log(rows[0].split(","));
const headers = rows[0].split(",");

const arrObj = [];

for (let i = 1; i < rows.length; i ++){
    const temp = rows[i].split(",");
    const obj = {
        name: temp[0],
        age: temp[1]
    }
    arrObj.push(obj);
}

console.log(arrObj); 



