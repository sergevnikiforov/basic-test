 window.onload = function() {

     var btn = document.getElementsByClassName('btn');

     for (var i = 0; i < btn.length; i++) {
         btn[i].addEventListener("click", DeleteShow);
     }

     function DeleteShow() {
         var elems = document.querySelectorAll("[data-p]");
         console.log(this);
         for (var i = 0; i < elems.length; i++) {
             alert(elems[i].style.color);
             if (this.getAttribute("data-btn") == "p" + toString(i)) {
                 elems[i].classList.remove("hidden");
             } else if (this.getAttribute("data-btn") != elems[i].getAttribute("data-p")) {
                 elems[i].classList.add("hidden");
             } else {
                 elems[i].classList.remove("hidden");
             }
         }
     }
 };