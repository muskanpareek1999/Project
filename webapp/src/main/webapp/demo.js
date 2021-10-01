carousel = (function(){
  var imagecounter = document.querySelector('.imagecounter');
  var box = document.querySelector('.imagebox');
  var next = box.querySelector('.content');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
    
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
    imagecounter.innerHTML = "["+(counter+1) +"/"+amount+"]";
    
  });
  navigate(0);
})();
