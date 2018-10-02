const projectsLink = document.querySelector('#projects-link');
const aboutLink = document.querySelector('#about-link');
const homeLink = document.querySelector('#home-link');
const languageLink = document.querySelector('#language-link');

const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const transitions = document.querySelectorAll('.transition');

const checkIfDisplayNone = (element) => {
  style = window.getComputedStyle(element),
  display = style.getPropertyValue('display');
  if (display === 'none') {
    return true;
  }
  else {
    return false;
  }
}

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

const displayBlock = (element) => {
  element.style.display = 'block';
};

const displayFlex = (element) => {
  element.style.display = 'flex';
};

const animateTransition = () => {
  resetTransition();
  // anime({
  //     targets: '.home-container',
  //     rotate: 70,
  //     duration: 1000,
  //     delay: 1000,
  //     elasticity: 200,
  //     easing: 'easeInOutSine',
  //   });
  anime({
      targets: transitions,
      height: '100vh',
      duration: 2500,
      elasticity: 0,
      easing: 'easeInOutSine',
      delay: function(el, i, l) {
          return i * 300;
        }
    });
  anime({
      targets: transitions,
      top: '100vh',
      duration: 2000,
      delay: 2000,
      elasticity: 0,
      easing: 'easeInSine',
    });
};

const resetTransition = () => {
  for (let i = 0; i < transitions.length; i++) {
    transitions[i].style.height = '0';
    transitions[i].style.top = '0';
  }
}

const goToProjects = (event) => {
  event.preventDefault();
  if (checkIfDisplayNone(projects)) {
    // opacityZero(home);
    // opacityZero(about);
    animateTransition();
    setTimeout(displayNone, 1700, home);
    setTimeout(displayNone, 1700, about);
    // setTimeout(opacityOne, 1700, projects);
    setTimeout(displayBlock, 1700, projects);
    setTimeout(displayBlock, 1700, homeLink);
    setTimeout(displayBlock, 1700, languageLink);
  }
}

const projectsLinkListen = () => {
  projectsLink.addEventListener("click", goToProjects);
};

const goToAbout = (event) => {
  event.preventDefault();
  if (checkIfDisplayNone(about)) {
    // opacityZero(home);
    // opacityZero(projects);
    animateTransition();
    setTimeout(displayNone, 1700, home);
    setTimeout(displayNone, 1700, projects);
    // setTimeout(opacityOne, 1700, about);
    setTimeout(displayBlock, 1700, about);
    setTimeout(displayBlock, 1700, homeLink);
    setTimeout(displayBlock, 1700, languageLink);
  }
}

const aboutLinkListen = () => {
  aboutLink.addEventListener("click", goToAbout);
};

const goToHome = (event) => {
  event.preventDefault();
  if (checkIfDisplayNone(home)) {
    // opacityZero(about);
    // opacityZero(projects);
    animateTransition();
    setTimeout(displayNone, 1700, about);
    setTimeout(displayNone, 1700, projects);
    // setTimeout(opacityOne, 1700, home);
    setTimeout(displayFlex, 1700, home);
    setTimeout(displayNone, 1700, homeLink);
    setTimeout(displayNone, 1700, languageLink);
  }
}

const homeLinkListen = () => {
  homeLink.addEventListener("click", goToHome);
};



document.addEventListener("DOMContentLoaded",function(){
  projectsLinkListen();
  aboutLinkListen();
  homeLinkListen();
});
