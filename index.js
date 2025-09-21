import { concateValue } from "./lib/concate.ts";

const concatenatedWord = concateValue('johndoe@gmail.com','astrix',3,3);
document.getElementById("value").textContent = concatenatedWord;