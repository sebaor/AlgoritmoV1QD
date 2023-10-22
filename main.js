alert("¡Bienvenido a Querido Dinero!");
alert("Mejora tus finanzas personales llevando un control de tus gastos");
//Variable Global;
let balanceActual = 0;
// funcion para sumar un ingreso con el balance actual;
function agregarIngreso (ingreso){
    balanceActual += ingreso;
    //esto es lo mismo que decir balance = balance + ingreso || x = x + y;
}
//funcion para restar el restar un egreso al balance actual;
function restarIngreso (egreso){
    balanceActual -= egreso;
}
//Variables Globales;
let categoriaIngresada;
let datosValidosOpc1 = true;
let datosValidosOpc2 = true;
let preguntaUsuario;
let nuevoIngreso;
let nuevoEgreso;
let ultimosMovimientos;
confirmacionDeUsuario = true;

while(confirmacionDeUsuario){
    preguntaUsuario = prompt("Menú principal: OPC 1: Nuevo Ingreso || OPC 2: Nuevo Egreso || OPC 3: Balance Disponible || OPC 4: Salir");
    if(preguntaUsuario == "1"){
        datosValidosOpc1 = true; //Permite reiniciar la variable;
        while(datosValidosOpc1){
            categoriaIngresada = prompt("> Nuevo Ingreso < | Ingrese una categoría: 1) Sueldo | 2) Prestamo | 3)Intereses | 4) Alquileres | 5) Otros");
            if(categoriaIngresada == "1" || categoriaIngresada == "2" || categoriaIngresada == "3" || categoriaIngresada == "4" || categoriaIngresada == "5"){
                nuevoIngreso = parseFloat(prompt("Ingrese el monto en: $"));
                if(!isNaN(nuevoIngreso)){
                    agregarIngreso(nuevoIngreso);
                    alert("Su balance actual es de: $" + Math.ceil(balanceActual));
                    datosValidosOpc1 = false;
                }else{
                    alert("Datos incorrectos, intentelo nuevamente");
                }
            }else{
                alert("Credenciales invalidas: Seleccione una categoría para continuar");
            }
        }
    }else if(preguntaUsuario == "2" && balanceActual > 0){
        datosValidosOpc2 = true; // Permite reiniciar la variable;
        while(datosValidosOpc2){
            categoriaIngresada = prompt("> Nuevo Egreso < | Ingrese una categoría: 1) Alimentos | 2) Alquiler | 3) Entretenimiento | 4) Electricidad | 5) Otros");
            if(categoriaIngresada == "1" || categoriaIngresada == "2" || categoriaIngresada == "3" || categoriaIngresada == "4" || categoriaIngresada == "5"){
                nuevoEgreso = parseFloat(prompt("Ingrese el monto en: $"));
            if(!isNaN(nuevoEgreso)){
                restarIngreso(nuevoEgreso);
                alert("Su balance actual es de: $" + Math.ceil(balanceActual));
                datosValidosOpc2 = false;
            }else{
                alert("Datos incorrectos, intentelo nuevamente");
            }
        }else{
            alert("Credenciales invalidas: Seleccione una categoría para continuar");
        }
    }
} 
else if(preguntaUsuario == "3"){
        alert("Su saldo disponible es de: $" + Math.ceil(balanceActual));
}
else if(preguntaUsuario == 4){
    alert("¡Vuelve pronto!");
    confirmacionDeUsuario = false;
}
}
