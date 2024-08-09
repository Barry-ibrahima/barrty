const students = ["Fadima", "Amadou", "Mamadou" , "Saliou"];

console.log(students); // Output: ["Fadima", "Amadou", "Mamadou", "Saliou"]

const years1 = [2000, 1995, 1990, 2001, 2002];

console.log(years1); // Output: [2000, 1995, 1990, 2001, 2002]

const years = new Array(1999, 2021, 2000);

console.log(years); // Output: [1999, 2021, 2000]

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

// Taille du tableau 

console.log(students.length);

//RECUPERE LE  DERNIERE ELEMENT d'un table

console.log(students[students.length - 1]);

// Ajout d'un element à la fin du tableau

students.push("Ndiaye");

console.log(students);

students[1] = "Alpha";
students[4] = "Idiatou";
console.log(students);

console.log(students.length);

students.push("Elhadja")

console.log(students);

// Suppression d'un element du tableau

students.pop();

console.log(students);

students.unshift("Moussa", "Ousmane");

console.log(students);  

students.shift()

console.log(students);

// Recherche d'un element dans le tableau

console.log(students.indexOf("Alpha"));

//verification avec le tableau

console.log(students.includes("Alpha"));

console.log(students.includes("Moussa"));

if (students.includes("Alpha")) {
    console.log("Alpha est dans le tableau");
}

if (students.includes("Moussa")) {
    console.log("Moussa est dans le tableau");
}

const amadou = {
    1: "test",
    true: "isAdult",
    "number of friends": 15,
    lastNamre:"ly",
    FirstName: "amadou",
    age: 2024 - 1999,
    students: ["Fadima", "Amadou", "Mamadou", "Saliou"],
};


console.log(amadou.students);
console.log(amadou.age);

const obj = new Object();

obj;  

obj.name = 'obj';
obj[obj.name + amadou.FirstName] = "Mon object a moi "
obj

if (amadou.age){
    console.log(obj.age);
} else {
    obj.age = 18
}

obj;







