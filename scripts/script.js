button = document.querySelector("button");
body = document.querySelector("body");
panels = document.querySelector("div.panel-container");

// button.addEventListener('mouseover', (e)=>{
 setTimeout(function(){
  body.classList.add('open');
   body.setAttribute('style', 'overflow: scroll;');
   button.setAttribute('style', 'z-index: 0;');
   button.classList.add('shake');
   window.scroll(0,0);

   setTimeout(function(){ panels.setAttribute('style', 'visibility:hidden;'), 1000 });
  
},2100);
   
// });





function toScroll(element, dist) {
  let el = document.querySelector(element);
  return el.addEventListener('click', (e) => {
    window.location.href = dist;
    history.pushState('', document.title, window.location.pathname); // nice and clean
    // e.preventDefault(); // no page reload
  });
};

toScroll('a.about', "#about");
toScroll('a.skills', "#skills");
toScroll('a.projects', "#projects");
// toScroll('a.interests', "#interests");
toScroll('a.contact', "#contact");
toScroll('a.resume', "#resume");


