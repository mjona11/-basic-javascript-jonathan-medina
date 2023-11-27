const scanner = require("prompt-sync")({ sigint: true });

let texto = scanner ("escribir un texto:");
console.log("texto:", texto);
let concatenado = ""

while (texto !=="cancelar"){
    texto = scanner("escribe texto , pasa salair esecribir cancelar:")
    concatenado=concatenado + "-" + texto 
    console.log ("while",concatenado)
};
console.log (concatenado)

