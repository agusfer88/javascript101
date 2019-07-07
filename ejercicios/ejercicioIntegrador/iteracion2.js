let empresaASaludar = prompt('Ingresa el nombre de la empresa')
let empresa1 = ['Stensul', 200];
let empresa2 = ['Oracle', 200];
let empresa3 = ['Despegar', 200];
let saludoFormal = 'Buenas Tardes ' + empresaASaludar + '!';
let saludoInformal = 'Como va ' + empresaASaludar + '!';
let saludoDeBienvenida = 'Cómo estas ' + empresaASaludar + '? Bienvenido a Pasteleria Carolina';

let tortaExtra;
let precioXUnidad = 200
let ventaTotal;
let descuentoCorrespondiente;



let descuentoAaplicar =  (cantVendida) =>{
    if (cantVendida >= 500){
      descuentoCorrespondiente = 15
          console.log(`tenes un descuento del ${descuentoCorrespondiente}%`)
    }
    else if (cantVendida > 100){
      descuentoCorrespondiente = 10
          console.log(`tenes un descuento del ${descuentoCorrespondiente}%`)
    }

}
//Saludar
function saludar() {if (empresaASaludar == empresa1[0])
  {
    console.log(saludoFormal);
  }
else if (empresaASaludar == empresa2[0] || empresaASaludar == empresa3[0])
  {
    console.log(saludoInformal);
  }
else 
    {
      //preguntar si la empresa es correcta
      let nuevaEmpresa = prompt('Tu empresa es ' + empresaASaludar + '?');
      // si es correcta le da saludo de bienvenida
      if (nuevaEmpresa == 'si')
        {
        console.log(saludoDeBienvenida);
        }
        //volver a pedir el nombre de la empresa
      else {
          empresaASaludar = prompt('Ingresa el nombre de la empresa');
          console.log(saludoDeBienvenida);
        }
  };
  let cantVendida = prompt(`¿cuantas tortas queres?`) 
 descuentoAaplicar(cantVendida);
  calcularTortasExtras(cantVendida);
}

//DESCUENTOS
// Si una empresa tiene más de 100 tortas compradas, tienen un 10% de descuento en sus próximas tortas.
// Si una empresa tiene más de 500 tortas compradas, tienen un 15% de descuento.
// Independientemente de cuantas tortas tenga compradas, si compra más de 10 tortas, recibe 1 torta extra cada 15 tortas.

 


//Calcular TORTAS
function calcularTortasExtras(cantVendida){
  if (cantVendida >=15){
      tortasExtras = cantVendida/15;
  console.log(`Ademas te regalamos ${tortasExtras} tortas extras`)
  }

};

saludar();