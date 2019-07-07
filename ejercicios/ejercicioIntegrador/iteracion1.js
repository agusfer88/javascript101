let empresaASaludar = prompt('Ingresa el nombre de la empresa')
let nombreDeEmpresa1 = 'Stensul';
let nombreDeEmpresa2 = 'Carnicerias Ruperto';
let nombreDeEmpresa3 = 'Fabrica De Chipa "El Infaltable De Los Inviernos"';
let saludoFormal = 'Buenas Tardes ' + empresaASaludar + '!';
let saludoInformal = 'Como va ' + empresaASaludar + '!';
let saludoDeBienvenida = 'Cómo estas ' + empresaASaludar + '? Bienvenido a Pasteleria Carolina';

if (empresaASaludar == nombreDeEmpresa1)
{
  alert(saludoFormal);
}
else if (empresaASaludar == nombreDeEmpresa2 )
{
  alert(saludoInformal);
}

else 
{
  //preguntar si la empresa es correcta
   let nuevaEmpresa = prompt('Tu empresa es ' + empresaASaludar + '?');
  // si es correcta le da saludo de bienvenida
  if (nuevaEmpresa == 'si')
  {
   alert(saludoDeBienvenida);
  }
  //volver a pedir el nombre de la empresa
  else {
    empresaASaludar = prompt('Ingresa el nombre de la empresa');
    alert(saludoDeBienvenida);
  }

};