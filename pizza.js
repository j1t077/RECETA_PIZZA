//funcion InputDeviceInfo, solo se puede ejecutar esta
function star() {
    const flour = "Harina de trigo 160grs";
    const salt = "1 cucharadita de sal  fina";
    const water = "100ml agua";
    const oil = "1 cucharada de Aceite de oliva";
    const yeast = "7 gramos levadura fresca";

    const ingredients = ["Tomate triturado", "Queso Mozarella fior di latte", "Atun", "Cebolla", "Olivas", "Pimiento rojo", "Oregano", "Pimienta"];
    let olivesQuantity = 10;
    let slicesPepperQuantity = 8;
    let bakeTime = 10;
    let pizzaDelivered = "Pizza Entregada"; 
    
    //MASA
    console.log('Mezcla: ' + flour + ' con ' + yeast);
    console.log('luego añadimos ' + water + ' y ' + salt);
    console.log('y para terminar la masa ' + oil);

    //REPOSO MASA
    console.log('\nDejamos reposar 45 minutos');

    //INGREDIENTES
    console.log('\nLuego del reposo la estiramos ');
    console.log('\nañadimos ' + ingredients[0]  + '\n' + ingredients[1] + '\n' + ingredients[2] + '\n' + ingredients[3] + '\n' + ingredients[4] + ' ' + olivesQuantity + '(cantidad)\n' + ingredients[5] + ' ' + slicesPepperQuantity + '(cantidad)\n' + ingredients[6] + '\n' + ingredients[7] + '\n');

    //ESPERA
    console.log('Tiempo de conccion ' + bakeTime);

    //ENTREGA
    console.log(pizzaDelivered);
    
}
star()

