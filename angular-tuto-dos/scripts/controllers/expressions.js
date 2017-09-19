(function(){
  'use strict';

  function Expression(){
    var ambito=this;
    ambito.msg='Esta es la version 2 de angular para expresiones';
  }
    angular
        .module('expressions')
          .controller('saludo', Expression);
})();

/*para este código se necesita un servidor*/
