const nomeUtente = prompt("Qual è il tuo nome ?");

const cognomeUtente = prompt("Qual è il tuo cognome ?");

const coloreUtente = prompt("Qual è il tuo colore preferito ?");

const numeroUtente = prompt("Qual è il tuo numero fortunato ?");

let password = `${nomeUtente}${cognomeUtente}${coloreUtente}${numeroUtente}`;

console.log(password);

document.getElementById("contenitore_password").innerHTML = password;
