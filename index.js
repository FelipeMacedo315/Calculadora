
var title
function capture_numbers1(num) {

 title= document.getElementById('resultado').innerHTML += num
  

}

function result() {
    
 var result = eval(title)
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