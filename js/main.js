 window.onload = function() {

     var btn = document.getElementsByClassName('btn');

     for (var i = 0; i < btn.length; i++) {
         btn[i].addEventListener("click", DeleteShow);
     }

     function DeleteShow() {
         var elems = document.querySelectorAll("[data-p]");
         console.log(this);
         for (var i = 0; i < elems.length; i++) {
             elems[i].setAttribute('style', 'color: crimson; transition: 2s all;');
             elems[i].classList.add('show');
             if (this.getAttribute("data-btn") == "p" + i) {
                 elems[i].classList.remove("hidden");
             } else if (this.getAttribute("data-btn") != elems[i].getAttribute("data-p")) {
                 elems[i].classList.add("hidden");
                 elems[i].classList.remove('show');
             } else {
                 elems[i].classList.remove("hidden");
             }
         }
     }
 };