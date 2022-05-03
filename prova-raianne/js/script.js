

function calc(){

        //entrada
        let horario = document.form.horario.value;
    
        //processamento
        if (horario == "manhã"){
            valor = 1500;
        }
        else if(horario == "tarde"){
            valor = 1800;
        }
        else{
            valor = 2300;
        }
    
        //saida
        document.getElementById('total').value = valor;
    
}

 
function trocatema(){
    
//entrada
 let tema= document.getElementById("tema").value;
 alert(tema);
// processamento 
if(tema=="Naruto") {
    newfundo="img/raianne.png";
    titulo="Naruto";
    cor="laranja";
    }
    else if (tema=="My Hero Academia"){
     newfundo="img/rai.jpg"
     titulo="My Hero Academia"
     cor="Azul"
     
    }
    else if(tema=="Demon Slayer"){
    newfundo= "img/ll.jpg"
    titulo="Demon Slayer";
    cor="Azul"
   
    }
    else {
        titulo="cinema"
        newfundo="img/linda.jpg";
        cor="Azul"
    
    } 



    //saida
document.getElementById("titulo").value.titulo
document.body.style.backgroundImage ="url(" + newfundo + ")";
document.getElementById('titulo').value = titulo;
document.getElementById('titulo').style.color = cor;
document.body.style.color = cor;




}
function alerta(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 1500){
        msg = "Selecione o Horário da Festa."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}


