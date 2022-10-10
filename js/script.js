// js

const tuoNome = prompt('Qual é il tuo nome?');
const tuoCognome = prompt('Qual é il tuo cognome?');
const colPref = prompt('Qual é il tuo colore preferito?');

document.getElementById('hello').innerHTML += ` ${tuoNome}, la tua password super sicura é:  `;

document.getElementById('password').innerHTML += `${tuoNome}${tuoCognome}${colPref}22`;