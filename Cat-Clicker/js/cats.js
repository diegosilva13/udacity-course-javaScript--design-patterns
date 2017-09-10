window.addEventListener('load', function(){
  var elem = document.getElementById('cats');
  elem.addEventListener('click', function(){
    var value = document.getElementById('clicks').innerHTML;
    if(value){
      value = Number(value) + 1;
      document.getElementById('clicks').innerHTML = value;
    }else{
      document.getElementById('clicks').innerHTML = 1;
    }
  }, false);
}, false);