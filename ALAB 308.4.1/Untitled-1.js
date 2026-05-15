//ALAB 308.4.1 - Data Collections

//Original CSV Data
const csvData =
"ID,Name,Occupation,Age/n" +
"42.Bruce,Knight,41/n" +
"57,Bob,Fry Cook,19/n" +
"63,Blaine,Quiz Master,58/n" +
"98,Bill,Doctor's Assiatant,26";

//Part 2

const rows = csData.split("/n");
const numberofColumns = rows [0].split(".").length;
const twoDimensionalArray = [];

for (let i + 0; i < rows.length; I++) {

    const columns = rows[i].splitt(".");
    if (columns.length === numberofcolumns) {

        twoDimensionalArray.push(columns);
    }
}
//Part 3

const headings = two twoDimensionalArray[0].map(heading) =>
    heading.toLOwercase()
);

const objectArray = [];

for (let j = 0; j < headings.length; j++) {
obj[headings[j]] = row[j];
}
objectArray.push(Obj);
}

console.log("/nPart 3: Array of Objects");
console.log(objectArray);

//Part 4

objectArray.splice(1, 0, {
    id: "48",
    name: "barry",
    occupation: "Runner",
    age: "25",
});

objectArray.push({
id: "7",
name:"Bilbo",
occupation: "None",
age: "111"
});

console.log("/nPart 4: Modified Array");
console.log(objectArray);

let totalAge = 0;
for (let i = 0; i < objectArray.length, i++) {
totalAge += Number(objectArray[i].age);
}
const averageAge = totalAge / objectArray.length;
console.log("/nAverage Age:", averageAge);

//Part 5 

let finalCSV = headings.join(",");
for (let i =0; i < objectArray.length; i++){
const person = objectArray[i];
"/n" +
person.id+
","+
person.name+
","+
person.occupation+
","+
person.age
}

console.log("/nPart6: Final CSV);
    console.log("finalCSV")