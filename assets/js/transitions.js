const projectsLink = document.querySelector('#projects-link');
const aboutLink = document.querySelector('#about-link');
const homeLink = document.querySelector('#home-link');
const languageLink = document.querySelector('#language-link');
const leaveProjectsPageLinks = document.querySelectorAll('.leave-projects-link');

const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const transitions = document.querySelectorAll('.transition');
const contentToBeHidden = document.querySelector('.content-container');

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
  if (window.location.href.indexOf("fr") > -1) {
    const french = link.split(".");
    window.location = french[0] + "_fr." + french[1];
  } else {
    window.location = link;
  }
}

const animateTransition = () => {
  anime({
      targets: '.left-line',
      width: '100%',
      duration: 600,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  setTimeout(displayNone, 300, contentToBeHidden);
  anime({
      targets: '.main-container',
      width: '10px',
      duration: 1500,
      delay: 300,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '.main-container',
      height: '0',
      duration: 1500,
      delay: 800,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '.main-container',
      rotate: '180deg',
      duration: 3000,
      delay: 800,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '.main-container',
      opacity: '0',
      duration: 1000,
      delay: 1500,
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
    console.log('Already on about page :)');
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
  if (homeLink) { homeLink.addEventListener("click", goToHome) }
};

const goToOtherLanguagePage = () => {
  const url = window.location.href.split("/");
  if (url[url.length - 1] == "") {
    window.location = 'index_fr.html'
    return
  }
  if (window.location.href.indexOf("fr") > -1) {
    let english = url[url.length - 1];
    english = english.replace("_fr", "");
    window.location = english;
  } else {
    let french = url[url.length - 1];
    french = french.split(".");
    french = french[0] + "_fr." + french[1];
    window.location = french
  }
};

const changeLanguage = (event) => {
  event.preventDefault();
  animateTransition();
  setTimeout(goToOtherLanguagePage, 3000);
};

const languageLinkListen = () => {
  // Don't add event listener on projects page in order to ensure
  // unique transition when leaving the page.
  const bool = window.location.href.indexOf("projects") > -1
  if (!bool) {
    languageLink.addEventListener("click", changeLanguage);
  }
};

const leaveProjectsPage = (event) => {
  event.preventDefault();
  anime({
      targets: ['.left-line','.right-line'],
      width: '100%',
      duration: 1000,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  anime({
      targets: '.projects-container',
      width: '0px',
      delay: 500,
      duration: 1500,
      elasticity: 0,
      easing: 'easeOutExpo'
    });
  const page = document.body
  anime({
      targets: page,
      opacity: 0,
      delay: 500,
      duration: 500,
      elasticity: 0,
      easing: 'easeInSine',
    });
  const target = event.target
  if (target == homeLink) {
    setTimeout(goToLink, 1500, homeURL);
  } else if (target == aboutLink) {
    setTimeout(goToLink, 1500, aboutURL);
  } else if ((event.path[1] || target) == languageLink) {
    setTimeout(goToOtherLanguagePage, 1500)
  }
};

const leaveProjectsPageListen = () => {
  for (let i = 0; i < leaveProjectsPageLinks.length; i++) {
    leaveProjectsPageLinks[i].addEventListener("click", leaveProjectsPage);
  }
}

const addAllLinkEventListeners = () => {
  projectsLinkListen();
  aboutLinkListen();
  homeLinkListen();
}



document.addEventListener("DOMContentLoaded",function(){
  languageLinkListen();
  // Only add other link listeners if we are not on the projects page,
  // in order to facilitate unique transition when leaving projects page.
  if (window.location.href.indexOf("projects") > -1) {
    leaveProjectsPageListen();
  } else {
    addAllLinkEventListeners();
  }
});
