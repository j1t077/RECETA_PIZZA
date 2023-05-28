function hacerMasa() {
    const harina = 160;
    const agua = 100;
    const sal = 1;
    const aceite = 1;
    const levaduraFresca = 7; 
  
    console.log("\nAmasado...\n");

  const mezcla = `Mezcla ${harina} g de harina de trigo con ${agua} ml de agua templada.`;
  const salAceite = `\nAñade ${sal} cucharadita de sal fina y ${aceite} cucharada de aceite de oliva virgen extra,`;
  const levadura = `\n${levaduraFresca} g de levadura seca de panadería o fresca (un cuarto de paquete) y añádela a la mezcla.`;
  const amasado = "\nAmasa durante 10 minutos hasta que esté suave y elástica.";
  const reposado = "\nDeja reposar la masa durante 30 minutos para que fermente.\n";

  return `${mezcla} ${salAceite} ${levadura} ${amasado} ${reposado}`;
}

const instruccionesMasa = hacerMasa();
console.log(instruccionesMasa);
  

function anadirIngredientes() {
    const tomate = "triturado";
    const queso = "mozzarella fior di latte";
    const atun = true;
    const cebolla = true;
    const olivas = 10;
    const pimiento = 8;
    const oregano = true;
    const pimienta = true;
  
    console.log("Añadiendo los ingredientes...\n");

  console.log("Extiende la masa sobre una bandeja para horno.");
  console.log(`Cubre la masa con ${tomate}.`);
  console.log(`Añade ${queso} al gusto.`);

  if (atun) {
    console.log("Añade el atún al gusto.");
  }

  if (cebolla) {
    console.log("Añade la cebolla al gusto.");
  }

  console.log(`Añade ${olivas} olivas.`);

  if (pimiento) {
    console.log(`Añade ${pimiento} tiras de pimiento rojo.`);
  }

  console.log("Espolvorea orégano y pimienta al gusto.");
}

function hornearPizza() {
    const temperatura = 220; 
    const tiempo = 15;
  
    console.log("\nHorneando la pizza...\n");
    console.log(`Precalienta el horno a ${temperatura} grados Celsius.`);
    console.log("Introduce la pizza en el horno.");
    console.log(`Hornea la pizza durante ${tiempo} minutos.`);
    console.log("Saca la pizza del horno.");
    console.log("Deja reposar la pizza durante unos minutos antes de servir.");
  }
  
  function entregarPizza() {
    console.log("\n¡Lista para entregar!");
  }

  anadirIngredientes();
  hornearPizza();
  entregarPizza();