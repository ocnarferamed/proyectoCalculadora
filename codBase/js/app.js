  function inicializar (){

    var a =0;
    var b = 0;
    var operacion="";
   var visorCalculadora = document.getElementById('display');
   var encendido = document.getElementById('on');
   var signo = document.getElementById('sign');
   var raiz=document.getElementById('raiz');
   var suma = document.getElementById('mas');
   var resta = document.getElementById('menos');
   var producto = document.getElementById('por');
   var division=  document.getElementById('dividido');
   var punto= document.getElementById('punto');
   var igual = document.getElementById('igual');
   var btn1 = document.getElementById('1');
   var btn2 = document.getElementById('2');
   var btn3 = document.getElementById('3');
   var btn4 = document.getElementById('4');
   var btn5 = document.getElementById('5');
   var btn6 = document.getElementById('6');
   var btn7 = document.getElementById('7');
   var btn8 = document.getElementById('8');
   var btn9 = document.getElementById('9');
   var btn0 = document.getElementById('0');
   var raizCuadrada = document.getElementById('raiz');
   var positivo = true;


  // METODOS...................................
  // funcion que recibe el valor de la tecla presionada como parametro y lo muestra en pantalla sumado al contenido que ya este en ella
    function actualizar(valor) {
     if(visorCalculadora.innerHTML.length <=7){// este if permite que los botones  de numeros dejen de funcionar si se supera la cantidad estblecida de digitos.
    visorCalculadora.innerHTML= visorCalculadora.innerHTML+valor;
    if(operacion==""){
      a=visorCalculadora.innerHTML;
    }else if (operacion!=""){
      b= visorCalculadora.innerHTML;
    }
  }
}
function actualizarCero(valor){
  visorCalculadora.innerHTML=valor;
  if(operacion==""){
    a=visorCalculadora.innerHTML;
  }else if ( operacion!="") {
    b= visorCalculadora.innerHTML;
  }
}

//.....................................................................................
function limpiar(){
  visorCalculadora.innerHTML="";
}
//......................................................................................
function resetear(){
  visorCalculadora.innerHTML=0;
  a = 0;
  b = 0;
  operacion = "";
}

//.....................................................
function animacion1(boton){
  boton.style.padding="3px";

}
function animacion2(boton){
  boton.style.padding="0px";

}
//.............................................................................


// FUNCION DE CALCULOS: MEDIANTE UN SWITCH CON CADA CASO DEPENDIENDO DEL STRING ALMACENADO EN 'operacion' TOMA LOS VALORES DE 'a' Y 'b'
function obtenerRes (){
  var r = 0;
  switch (operacion) {
    case "+":
      r = parseFloat(a) + parseFloat(b);
      break;
      case "-":
      r = parseFloat(a) - parseFloat(b);
      break;
      case "*":
      r = parseFloat(a) * parseFloat(b);
      break;
      case "/":
      r= parseFloat(a) / parseFloat(b);
  }
  visorCalculadora.innerHTML= r.toString().substr(0,8);// se muestra el resultado pero solo hasta 8 digitos
  a=r;// a sigue conteniendo el valor completo de r.
  alert(r);
}





//CAPTURA DE LOS EVENTOS CON CADA TECLA...........................................
// al presionar cada numero  se llamara a una funcion distinta dependiendo y el visor contiene unicamente un cero"0" o no. si contiene unicamente al cero, este es reemplazado, de lo contrario se  agrega un numero.
   btn1.onclick = function(){
      if(visorCalculadora.innerHTML=="0"){
       actualizarCero(1);
     }else{
       actualizar(1);
      }
     };

   btn2.onclick = function(){
     if(visorCalculadora.innerHTML=="0"){
     actualizarCero(2)
   }else{
     actualizar(2);
    }

  };

   btn3.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(3)
   }else{
     actualizar(3);
    }
  };

   btn4.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(4)
   }else{
     actualizar(4);
    }
  };

   btn5.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(5)
   }else{
     actualizar(5);
    }
  };

   btn6.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(6)
   }else{
     actualizar(6);
    }
  };

   btn7.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(7)
   }else{
     actualizar(7);
    }
  };

   btn8.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(8)
   }else{
     actualizar(8);
    }
  };

   btn9.onclick = function(){if(visorCalculadora.innerHTML=="0"){
     actualizarCero(9)
   }else{
     actualizar(9);
    }
  };

   btn0.onclick = function(){
     if(visorCalculadora.innerHTML!="0"){
       actualizar(0);
      }
    };

   punto.onclick = function(){
     if(visorCalculadora.innerHTML.indexOf(".")==(-1)){
     actualizar(".")
    }
  };

//OPERACIONES...................................................................................

   suma.onclick= function(){
     operacion = "+";// SE GUARDA EL TIPO DE OPERACION COMO STRING '+' ( ESTO LO DEBEMOS RECORDAR PARA UTILIAR EL SWITCH DE obtenerRes())
     limpiar();// SE LLAMA A LA FUNCION LIMPIAR() QUE VACIA EL CONTENIDO DEL VISOR
   }

   // AL PRESIONAR RESTA OCURRE LO MISMO QUE CON LAS OTRAS. SOLO CAMBIA EL TIPO DE OPERACION.
   resta.onclick= function(){
     operacion = "-";
     limpiar();
   }

   producto.onclick= function(){
     operacion = "*";
     limpiar();
   }

   division.onclick= function(){
     operacion = "/";
     limpiar();
   }

   encendido.onclick= function(){
     resetear();

   }

   igual.onclick=function(){        // CUANDO SE PRESIONA EL BOTON DE IGUAL LLAMA A LA FUNCION obtenerRes() Y DEVUELVE EL RESULTADO. LOS OPERANDOS A Y B SON ASIGNADOS ANTES DE PRESIONAR IGUAL.
    obtenerRes();
 }
 signo.onclick = function(){  // esta funcion se encarga de colocar el signo "-" (el signo"+" no se escribe ) y ademas modifica el valor de la variable a positivo o negativo.
   if(operacion=="" && visorCalculadora.innerHTML!=0){
   var numero;
   a= visorCalculadora.innerHTML;
   numero=Number(a);
    numero=-numero;
    a=numero;
    visorCalculadora.innerHTML=a;
  }else if(operacion!="" && visorCalculadora.innerHTML!=0){
    var numero;
    b= visorCalculadora.innerHTML;
    numero=Number(b);
     numero=-numero;
     b=numero;
     visorCalculadora.innerHTML=b;
  }
}
//animacion de botones .....................................................
btn1.onmousedown = function(){
  animacion1(btn1);
}
btn1.onmouseup = function(){
  animacion2(btn1);
}

btn2.onmousedown = function(){
  animacion1(btn2);
}
btn2.onmouseup = function(){
  animacion2(btn2);
}

btn3.onmousedown = function(){
  animacion1(btn3);
}
btn3.onmouseup = function(){
  animacion2(btn3);
}

btn4.onmousedown = function(){
  animacion1(btn4);
}
btn4.onmouseup = function(){
  animacion2(btn4);
}

btn5.onmousedown = function(){
  animacion1(btn5);
}
btn5.onmouseup = function(){
  animacion2(btn5);
}

btn6.onmousedown = function(){
  animacion1(btn6);
}
btn6.onmouseup = function(){
  animacion2(btn6);
}

btn7.onmousedown = function(){
  animacion1(btn7);
}
btn7.onmouseup = function(){
  animacion2(btn7);
}

btn8.onmousedown = function(){
  animacion1(btn8);
}
btn8.onmouseup = function(){
  animacion2(btn8);
}

btn9.onmousedown = function(){
  animacion1(btn9);
}
btn9.onmouseup = function(){
  animacion2(btn9);
}

btn0.onmousedown = function(){
  animacion1(btn0);
}
btn0.onmouseup = function(){
  animacion2(btn0);
}

igual.onmousedown = function(){
  animacion1(igual);
}
igual.onmouseup = function(){
  animacion2(igual);
}

encendido.onmousedown = function(){
  animacion1(encendido);
}
encendido.onmouseup = function(){
  animacion2(encendido);
}

producto.onmousedown = function(){
  animacion1(producto);
}
producto.onmouseup = function(){
  animacion2(producto);
}

resta.onmousedown = function(){
  animacion1(resta);
}
resta.onmouseup = function(){
  animacion2(resta);
}
// debido a la disposicion y estilos del boton de suma , este no comparte la funcion de animacion con los demas botones, aunque funciona de manera identica.
suma.onmousedown = function(){
  suma.style.padding="2px";
  suma.style.marginTop="0.5px";
  suma.style.marginRight="1px";
  suma.style.marginBottom="1px";
  suma.style.marginLeft="11px";
}
suma.onmouseup = function(){
  suma.style.padding="0px";
  suma.style.marginTop="0px";
  suma.style.marginRight="0px";
  suma.style.marginBottom="0px";
  suma.style.marginLeft="10px";
}

division.onmousedown = function(){
  animacion1(division);
}
division.onmouseup = function(){
  animacion2(division);
}

punto.onmousedown = function(){
  animacion1(punto);
}
punto.onmouseup = function(){
  animacion2(punto);
}

signo.onmousedown = function(){
  animacion1(signo);
}
signo.onmouseup = function(){
  animacion2(signo);
}

raizCuadrada.onmousedown = function(){
  animacion1(raizCuadrada);
}
raizCuadrada.onmouseup = function(){
  animacion2(raizCuadrada);
}
}
