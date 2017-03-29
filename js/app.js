document.addEventListener('DOMContentLoaded', function (e) {
   var images = document.querySelectorAll('#gallery img');
   var showButton = document.querySelector('#showButton');
   var hideButton = document.querySelector('#hideButton');
   var tagInput = document.querySelector('#tagInput');

   showButton.addEventListener('click', function (e) {
       for (var i = 0; i < images.length; i++) {
            if (images[i].className == 'hidden') {
                images[i].classList.remove('hidden');
            }
            var tag = tagInput.value;
            if (images[i].dataset.tag.indexOf(tag) < 0 ) {
                images[i].classList.add('hidden')
            }
       }
   });
   hideButton.addEventListener('click', function (e) {
       for (var i = 0; i < images.length; i++) {
           if (images[i].className == 'hidden') {
               images[i].classList.remove('hidden');
           }
           var tag = tagInput.value;
           if (images[i].dataset.tag.indexOf(tag) > -1 ) {
                images[i].classList.add('hidden')
           }
       }
   })
});