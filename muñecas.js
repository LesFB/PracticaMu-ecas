console.log("Aqui inicia el ejercicio jugueteria");
payaso = 112;
muñeca = 75;
numero_de_muñecas = 14;
numero_de_payasos = 27;
peso_paquete = (numero_de_muñecas*muñeca) + (numero_de_payasos*payaso);

console.log("El peso total del paquete es: " + peso_paquete);

function peso(){
    payaso = 112;
    muñeca = 75;
    numero_de_muñecas = prompt("Ingresa el numero de muñecas: ");
    numero_de_payasos = prompt("Ingresa el numero de payasos: ");
    peso_paquete = (numero_de_muñecas * muñeca) + (numero_de_payasos * payaso);
    alert("El peso total del paquete es: " + peso_paquete+ " gramos")
    console.log("El peso total del paquete es: " + peso_paquete+ " gramos");

}

peso();