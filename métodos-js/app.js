var persona = {
  nombre: "John",
  saludar: function() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
};

persona.saludar(); // "Mi nombre es John"

var persona2 = {
  nombre: "Jane",
  saludar: persona.saludar // referencia al método de persona
};

var persona4 = {
  nombre:"Karla"
}

persona2.saludar(); // Mi nombre es Jane

var persona3 = persona.saludar.bind(persona4);
persona3();

var fullName = 'Avelino Cáceres';

var personaje = {
  otro:{
    fullName:'Francisco Bolognesi'
  },
  fullName: 'Miguel Grau',
  getName: function(){
    console.log('Mi nombre es '+ this.fullName);
  }
}

personaje.getName();

var personajeGlobal= personaje.getName;
personajeGlobal();

var personajeOtro = personajeGlobal.bind(personaje.otro);
personajeOtro();

/*closure*/
/*Es una funcion que esta dentro de otra funcion y que esta accede a las variables declaradas dentro del entorno donde fue creada*/
function operacion(){
  valor=0;
  var incrementar = function(){
    return valor += 3;
  }
  return incrementar;
}

var ejecutar = operacion();
console.info(ejecutar());
console.info(ejecutar());
