
var title
function capture_numbers1(num) {

 title= document.getElementById('resultado').innerHTML += num
  

}

function result() {
    

 var result = eval(title)
 console.log(result)

  document.getElementById('resultado').innerText=result


}

function clean() {

  document.getElementById('resultado').innerText=''
}

function del() {
  var del= document.getElementById('resultado').innerText
   var excluir = del.slice(0,-1)
   document.getElementById('resultado').innerText=excluir
}


function change_background_color() {

  var change_background = document.getElementsByTagName('input')[0].value
  if (change_background<=30) {
    document.getElementById('calculadora').classList.remove('calculadora-roxa')
    document.getElementById('id-body').classList.remove('body-roxo')
   
  } 
  else if(change_background>30||change_background<=40){
    document.getElementById('calculadora').classList.add('calculadora-roxa')
    document.getElementById('id-body').classList.add('body-roxo')

    
  }

  console.log(change_background)
  
}