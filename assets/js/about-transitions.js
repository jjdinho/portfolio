const projectsLink = document.querySelector('#projects-link');
const aboutLink = document.querySelector('#about-link');
const homeLink = document.querySelector('#home-link');
const languageLink = document.querySelector('#language-link');

const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const transitions = document.querySelectorAll('.transition');
const contentToBeHidden = document.querySelectorAll('.content-to-be-hidden');

const projectsURL = 'projects.html';
const aboutURL = 'about.html';
const homeURL = 'index.html';

const opacityZero = (element) => {
  anime({
      targets: element,
      opacity: '0',
      duration: 700,
      delay: 0,
      elasticity: 0,
      easing: 'easeInOutSine'
    });
};

const opacityOne = (element) => {
  element.style.opacity = '1';
};

const displayNone = (element) => {
  element.style.display = 'none';
};

const displayNoneMultiple = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
};

const goToLink = (link) => {
  window.location = link;
}

const animateTransition = () => {
  anime({
      targets: '.left-line',
      width: '100%',
      duration: 1500,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  setTimeout(displayNoneMultiple, 300, contentToBeHidden);
  anime({
      targets: '.about-info',
      width: '10px',
      duration: 2000,
      delay: 700,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '#about, .home-nav-container',
      height: '0px',
      duration: 2000,
      delay: 1000,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '.home-container',
      rotate: '180deg',
      duration: 3000,
      delay: 1000,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '.home-container',
      opacity: '0',
      duration: 1000,
      delay: 2000,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
};

const goToProjects = (event) => {
  event.preventDefault();
  animateTransition();
  setTimeout(goToLink, 3000, projectsURL);
}

const projectsLinkListen = () => {
  projectsLink.addEventListener("click", goToProjects);
};

const goToAbout = (event) => {
  event.preventDefault();
  if (window.location.href.indexOf("about") > -1) {
    console.log('on about page');
  } else {
    animateTransition();
    setTimeout(goToLink, 3000, aboutURL);
  }
}

const aboutLinkListen = () => {
  aboutLink.addEventListener("click", goToAbout);
};

const goToHome = (event) => {
  event.preventDefault();
  animateTransition();
  setTimeout(goToLink, 3000, homeURL);
}

const homeLinkListen = () => {
  homeLink.addEventListener("click", goToHome);
};

const goToOtherLanguagePage = () => {
  if (window.location.href.indexOf("fr") > -1) {
    window.location = 'index.html';
  } else {
    window.location = 'index_fr.html';
  }
};

const changeLanguage = (event) => {
  event.preventDefault();
  page = document.body
  anime({
      targets: page,
      opacity: 0,
      duration: 1000,
      elasticity: 0,
      easing: 'easeInSine',
    });
  setTimeout(goToOtherLanguagePage, 1000);
};

const languageLinkListen = () => {
  languageLink.addEventListener("click", changeLanguage);
};




document.addEventListener("DOMContentLoaded",function(){
  projectsLinkListen();
  aboutLinkListen();
  homeLinkListen();
  languageLinkListen();
});
