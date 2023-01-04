//window details
document.getElementById("windet").innerHTML = "width: " + window.innerWidth + " height: " + window.innerHeight;

//slide mover
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i
    var slides = document.getElementsByClassName("s-text");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


//float label in input start

const FloatLabel = (() => {
  
    // add active class and placeholder 
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    
    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  
    
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);    
    };
    
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        }      
        
        bindEvents(element);
      });
    };
    
    return {
      init: init
    };
  })();
  
  FloatLabel.init();
  

//floating label in input end


//changing History and Mission

  function misAddact() {
    document.getElementById('aimm1').style.opacity = '1'
  }

  function hisAddact() {
    document.getElementById('aimm1').style.opacity = '0'
  }

//Open and close search
  function searchOpen() {
    document.getElementById('search-form-container').classList.add('activated');
  }

  function searchClose() {
    document.getElementById('search-form-container').classList.remove('activated');
  }

  window.addEventListener('keyup', event => {
    if(event.key === 'Escape') document.getElementById('search-form-container').classList.remove('activated');
  });

//Open and Close Menu
function menuOpen() {
  document.getElementById('dropmenu').classList.add('activated');
}

function menuClose() {
  document.getElementById('dropmenu').classList.remove('activated');
}









