document.getElementById("resultado").style.display="none"
const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');
let resultado = 0

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();
/*tipo de moneda*/
dolar=[0,0,19.7839,3465.98,0.824990,0.704107]
pesoMexicano=[0, 0.0505497,0, 175.204,0.0417030,0.0376144]
pesoColombiano=[0,0.000288519,0.00570805,0,0.000238015,0.000214685]
euro=[0,1.21218,23.39819,4201.41,0,0.901979]
libraEsterlina=[0,1.34392,26.5881,4657.99,1.10867,0]


//Vector Moneda
var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
//Vector Moneda destino
var cambio=["Elige moneda de cambio","Dolar","Peso Mexicano","Peso Colombiano","Euro","Libra Esterlina"]

moneda.forEach((data,index)=>{
     const item = document.createElement('option');
     item.setAttribute('value',index)
     item.textContent = data;
     fragmento.appendChild(item)   
})
cambio.forEach((data,index)=>{
     const item = document.createElement('option');
     item.setAttribute('value',index)
     item.textContent = data;
     fragmento2.appendChild(item)   
})

listaMoneda.appendChild(fragmento);
//Recorrer vector para insertar la informacion de la lista
listaCambio.appendChild(fragmento2);
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.getElementById('moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
     let cantidadingresada = parseFloat(document.getElementById("cantidad").value);
     // leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.getElementById('criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
 
     const divMensaje = document.createElement('div');
     divMensaje.classList.add('text-center', 'alert');

     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas'));
          alerta.appendChild(divMensaje)
          document.getElementById("resultado").style.display="none"
     } else if(monedaSeleccionada==criptoMonedaSeleccionada) {
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Los valores de conversión deben ser diferentes'));
          alerta.appendChild(divMensaje)
          document.getElementById("resultado").style.display="none"
     }
     else if(cantidadingresada < 0 || isNaN(formulario.cantidad.value)==true){
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Ingrese un valor válido'));
          alerta.appendChild(divMensaje)
          document.getElementById("resultado").style.display="none"
     }
     
     else if(monedaSeleccionada == 1){
          resultado = dolar[criptoMonedaSeleccionada]*cantidadingresada;
                
     }
     else if(monedaSeleccionada == 2){
          resultado = pesoMexicano[criptoMonedaSeleccionada]*cantidadingresada;
                
     }
     else if(monedaSeleccionada == 3){
          resultado = pesoColombiano[criptoMonedaSeleccionada]*cantidadingresada;
                
     }
     else if(monedaSeleccionada == 4){
          resultado = euro[criptoMonedaSeleccionada]*cantidadingresada;
                
     }
     else if(monedaSeleccionada == 5){
          resultado = libraEsterlina[criptoMonedaSeleccionada]*cantidadingresada;
                
     }
     else {divMensaje.classList.add('alert-success');
     divMensaje.appendChild(document.createTextNode('Gracias'));
     alerta.appendChild(divMensaje)}

     setTimeout(function() {
          document.querySelector('#principal .alert').remove();
          formulario.reset();
     }, 3000);
     document.getElementById("valort").innerHTML=resultado.toFixed(2);
})
function convertir(){
     document.getElementById("resultado").style.display="block";
    
     
}