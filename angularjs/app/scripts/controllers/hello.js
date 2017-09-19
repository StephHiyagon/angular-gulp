(function(){
  'use strict'

  function Hello(){
    var vm = this;
    vm.msg =' Hola Stephanie!!!';
  }
  angular
    .module('myApp')
      .controller('hello', Hello);
})();

/*crear una funcion inmediatamente ejecutable, dentro estará el código, colocaremos la function
como si fuese un constructor en javascript y usaremos la palabra reservada this para asignarselo
a una variable y así obtener el scope que pasaremos como alias en el index*/
