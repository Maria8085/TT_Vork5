var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
var submit = document.getElementById('submit')

console.log(myModal);

myModal.addEventListener('shown.bs.modal', function () { 
  myInput.focus();
})

submit.onclick = function(){
    alert('Заявка отправлена')
}