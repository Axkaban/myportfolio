button = document.querySelector("button");
body = document.querySelector("body");
panels = document.querySelector("div.panel-container");

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

toScroll('p.about', document.querySelector('div.about').getBoundingClientRect().top+window.scrollY - document.querySelector('nav').offsetHeight + .38);
toScroll('p.skills', document.querySelector('div.skills').getBoundingClientRect().top+window.scrollY - document.querySelector('nav').offsetHeight + .38);
toScroll('p.projects', document.querySelector('div.projects').getBoundingClientRect().top+window.scrollY - document.querySelector('nav').offsetHeight + .38);
toScroll('p.interests', document.querySelector('div.interests').getBoundingClientRect().top+window.scrollY - document.querySelector('nav').offsetHeight + .38);
toScroll('p.contact', document.querySelector('div.contact').getBoundingClientRect().top+window.scrollY);
toScroll('p.resume', document.querySelector('div.resume').getBoundingClientRect().top+window.scrollY - document.querySelector('nav').offsetHeight + .38);

 