button = document.querySelector("button");
body = document.querySelector("body");
panels = document.querySelector("div.panel-container");
// anchor = document.querySelectorAll("a");

button.addEventListener('click', ()=>{
   body.classList.toggle('open');
   body.setAttribute('style', 'overflow: scroll;');
   button.setAttribute('style', 'z-index: 0;');
   window.scroll(0,0);
  
});

// anchor.addEventListener('click', (e) => {
//     window.location.hash = ''; // for older browsers, leaves a # behind
//     history.pushState('', document.title, window.location.pathname); // nice and clean
//     e.preventDefault(); // no page reload
   
// });


function toScroll(element, dist) {
  let el = document.querySelector(element);
  return el.addEventListener('click', () => {
    window.location.href = dist;
    history.pushState('', document.title, window.location.pathname); // nice and clean
    e.preventDefault(); // no page reload
  });
};

 toScroll('a.about', "#about");
toScroll('a.skills', "#skills");
toScroll('a.projects', "#projects");
toScroll('a.interests', "#interests");
toScroll('a.contact', "#contact");
toScroll('a.resume', "#resume");
