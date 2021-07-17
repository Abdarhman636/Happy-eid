var namee = document.getElementById('name')
var printname = document.getElementById('printname')

namee.onkeyup = function () {
     document.getElementById('printname').innerHTML = namee.value;
}