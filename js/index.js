console.log("I'm ready!");

// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Diego"

//1.2 Print "The driver's name is XXXX".
console.log(`The drive's name is ${hacker1}`);

//1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Liliam"

//1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops
/* 
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/
let newDriversName = ""; // esta é a variável que será preenchida com o loop
for(let i=0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());
// ao invés de comaçar por i = 0, vou começar por 1 igual ao tamanho do nome
// para haver conflitos nos nomes das variávels setei a nova variável acrescentada do número 2

let newNavigatorsName2 = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName2 += hacker2[i];
}
console.log(newNavigatorsName2);

// Neste exercício eu fiquei em dúvida e procurei ajuda na internet. Há mais de um jeito de fazer a regra, escrevi abaixo a que fez mais sentido para meu entendimento, ou sej, a regra em que eu eu entendi a lógica do que está sendo feito.

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}


// vou fazer o git do exercício obrigatório e caso eu termine os exercícios bonus, envio ainda hoje