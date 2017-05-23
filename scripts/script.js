button = document.querySelector("button");
body = document.querySelector("body")

button.addEventListener('click', ()=>{
   body.classList.toggle('open');
   body.setAttribute('style', 'overflow: scroll;');
   button.setAttribute('style', 'z-index: 0;');
   window.scroll(0,0);
  
});

function toScroll(element, dist) {
  let el = document.querySelector(element);
  return el.addEventListener('click', () => {
    window.scroll(0, dist);
  });
};

toScroll('p.about', 778);
toScroll('p.skills', 1560);
toScroll('p.projects', 2420);
toScroll('p.interests', 3200);
toScroll('p.contact', 4100);
toScroll('p.resume', 4878);

// if (window.scroll(0, 778)){
//     document.querySelector('p.about').setAttribute('style', 'background-color: #00b4ff;');
// }
// else if (typeof(window.pageYOffset) === 1560){
//     document.querySelector('p.skills').setAttribute('style', 'background-color: #00b4ff;');
// }
// else if (typeof(window.pageYOffset) === 2420){
//     document.querySelector('p.projects').setAttribute('style', 'background-color: #00b4ff;');
// }
// else if (typeof(window.pageYOffset) === 3200){
//     document.querySelector('p.interests').setAttribute('style', 'background-color: #00b4ff;');
// } 
// else if (typeof(window.pageYOffset) === 4100){
//     document.querySelector('p.contact').setAttribute('style', 'background-color: #00b4ff;');
// }
// else if(typeof(window.pageYOffset) === 4878){
//     document.querySelector('p.resume').setAttribute('style', 'background-color: #00b4ff;');
// }
 