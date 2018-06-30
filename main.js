document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  var botEl = document.querySelector('button');
  var botDom = botEl.value;

  var inDom = document.querySelector('input');
  //console.log(inDom);

  var inEl = inDom.value;
  //console.log(inEl);
    inEl.innerHTML = botDom;
    inDom.value = '';
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var butEl = document.querySelector('#validate-field button');
  var inEl = document.querySelector('#validate-field input');
  var inbox = inEl.value;
  var incan = inbox.length;
  //console.log(incan);

  var flaEl = document.querySelector('#validate-field .flash-message');

    if(incan < 6){
      flaEl.classList.remove('valid');
      flaEl.classList.add('invalid');
      flaEl.textContent = "Input sin suficientes caracteres";

    }else{
      flaEl.classList.remove('invalid');
      flaEl.classList.add('valid');
      flaEl.textContent = "Input valido";

    }
})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  var items = [...document.querySelectorAll('#calculate-items input')];
  //console.log(items);
  var sum = document.querySelector('.sum-total');

  var tot = 0;
  for(var i = 0; i< items.length; i++){
    var curitem = items[i];
    //console.log(curitem);
    //console.log(curitem.checked);

    if(curitem.checked === true){
      tot = tot + parseInt(curitem.value);
    }
  }
  //console.log(tot);
  sum.innerHTML = tot;
})


document.querySelector("#select-to-show-more select").addEventListener('change',function(evt){
  // TASK #4
  var selEl = document.querySelector('.selection');
  //console.log(selEl);
  var index = selEl.selectedIndex;
  //console.log(index);

  var imgInf = document.querySelector('.img-box');
  var modInf = document.querySelector('.model');
  var msrpInf = document.querySelector('.msrp');
  var mpgInf = document.querySelector('.mpg');
  var edmunds = document.querySelector('.edmunds');

  var selectedIndex = evt.target.options.selectedIndex;
  //console.log(selectedIndex);
  var indEl = evt.target.options[selectedIndex];
  //console.log(indEl);

  imgInf.innerHTML = `<img src="./images/${indEl.dataset.img}">`;
  modInf.innerHTML = selEl.value;
  msrpInf.innerHTML = indEl.dataset.msrp;
  mpgInf.innerHTML = indEl.dataset.mpg;
  edmunds.innerHTML = indEl.dataset.edmunds;
  //console.log(evt.target.value);
  //console.log(evt.target.options);

})

//TASK #5
document.querySelector("#add-guest ").addEventListener('click', function(){

  var nvo = document.getElementById("nvo").value;
  if(nvo.length > 0){

    if(find_li(nvo)){
      var li = document.createElement('li');
      li.id=nvo;
      li.innerHTML = nvo; //+ "<span onclick = 'eliminar(this)'>X</span>" ;
      document.getElementsByClassName("guest-list").appendChild(li);
    }
  }
  return false;

  function find_li(conte) {

    var el = document.getElementsByClassName("guest-list").getElementsByTagName("li");
    for(var i = 0; i < el.length; i++){

      if(el[i].innerHTML === conte){
        return false;
      }

    }
    return true;
  }
})
