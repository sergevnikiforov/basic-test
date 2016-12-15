 window.onload = function() {

     var btn = document.getElementsByClassName('btn');

     for (var i = 0; i < btn.length; i++) {
         btn[i].addEventListener("click", DeleteShow);
     }

     function DeleteShow() {
         var elems = document.querySelectorAll("[data-p]");
         console.log(this);
         for (var i = 0; i < elems.length; i++) {
             //  elems[i].setAttribute('style', 'color: red');
             //  elems[i].classList.add('show');
             //alert(elems[i].style.color + " i = " + i);
             if (this.getAttribute("data-btn") == "p" + i) {
                 alert(1);
                 elems[i].setAttribute('style', 'color: green');
                 elems[i].classList.add('show');
                 elems[i].classList.remove("hidden");
             } else if (this.getAttribute("data-btn") != elems[i].getAttribute("data-p")) {
                 alert(2);
                 elems[i].setAttribute('style', 'color: yellow');
                 elems[i].classList.add('show');
                 elems[i].classList.add("hidden");
             } else {
                 alert(3);
                 elems[i].setAttribute('style', 'color: purple');
                 elems[i].classList.add('show');
                 elems[i].classList.remove("hidden");
             }
         }
     }
 };