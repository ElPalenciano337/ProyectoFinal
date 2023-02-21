//Planes
const planBase = 2000;
let planFinal = 0;
//Recargos
let recargoUsuario = 0;
let recargoConyugue = 0;
let recargoHijos = 0;
let recargoPropiedades = 0;
let recargoSalario = 0;
//Si y No
let conyugue = String;
let hijos = String;
let propiedades = String;
/* var salida = "continuar"; */

//Edades / Cantidades
let edadUsuario = 0;
let edadConyugue = 0;
let cantidadHijos = 0;
let cantidadPropiedades = 0;
let salario = 0;
const porcentajeEdad_18 = 0.1;
const porcentajeEdad_25 = 0.2;
const porcentajeEdad_50 = 0.3;
const porcentajeHijos = 0.2;
const porcentajePropiedades = 0.35;
const porcentajeSalario = 0.05;

//Declarando funciones
function rango_1(){
    return planBase * porcentajeEdad_18;
}
function rango_2(){
    return planBase * porcentajeEdad_25;
}
function rango_3(){
    return planBase * porcentajeEdad_50
}
function calculoHijos(){
    return (planBase * porcentajeHijos) * cantidadHijos;
}
function calculoPropiedades(){
    return (planBase * porcentajePropiedades) * cantidadPropiedades;
}
function calculoSalario(){
    return salario * porcentajeSalario;
}

do{
    edadUsuario = prompt("Cuántos años tienes?");
    if(edadUsuario < 18){
        alert("Debes ser mayor de edad para poder solicitar un seguro");
        }else {
        
        if(edadUsuario >= 18 && edadUsuario <= 24){
            recargoUsuario = rango_1();
        }else if(edadUsuario >= 25 && edadUsuario <= 49){
            recargoUsuario = rango_2();
        }else if(edadUsuario >= 50){
            recargoUsuario = rango_3();
    }

    salario = prompt("Ingresa tu salario");
    recargoSalario = calculoSalario();

    hijos = prompt("Tienes hijos?");
    if("si" == hijos.toLowerCase()){
        cantidadHijos = prompt("Cuántos hijos tienes?");
        recargoHijos = calculoHijos();
    }

    propiedades = prompt("Tienes propiedades?");
    if("si" == propiedades.toLowerCase()){
        cantidadPropiedades = prompt("Cuántas propiedades tienes?");
        recargoPropiedades = calculoPropiedades();
    }

    conyugue = prompt("Tienes espos@?");
    if("si" == conyugue.toLowerCase()){
        edadConyugue = prompt("Cuántos años tiene tu espos@?");
        if(edadConyugue < 18){
            alert("Tu espos@ debe ser mayor de edad");
            }else if(edadConyugue >= 18 && edadConyugue <= 24){
                recargoConyugue = rango_1();
            }else if(edadConyugue >= 25 && edadConyugue <= 49){
                recargoConyugue = rango_2();
            }else if(edadConyugue >= 50){
                recargoConyugue = rango_3();
        }
    }

    planFinal = planBase + recargoUsuario + recargoConyugue + recargoHijos + recargoPropiedades + recargoSalario;
    alert("El precio de tu seguro es de: " + planFinal);
        }
    salida = prompt("Escribe salir para terminar el proceso.");
}while(salida.toLowerCase() != "salir");