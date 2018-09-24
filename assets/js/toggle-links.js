const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const branding = document.querySelector('#branding');
const email = document.querySelector('#email');

const projectsLink = document.querySelector('#projects-link');
const aboutLink = document.querySelector('#about-link');
const homeLink = document.querySelector('#homepage');

const goToProjects = (event) => {
  projects.classList.remove('hide');
  branding.classList.remove('hide');
  email.classList.remove('hide');
  home.classList.add('hide');
  about.classList.add('hide');
};

const projectsLinkListen = () => {
  projectsLink.addEventListener("click", goToProjects);
};

const goToAbout = (event) => {
  about.classList.remove('hide');
  branding.classList.remove('hide');
  branding.classList.remove('fadeOut');
  email.classList.remove('fadeOut');
  email.classList.add('fadeIn');
  branding.classList.add('fadeIn');
  email.classList.remove('hide');
  home.classList.add('hide');
  projects.classList.add('hide');
};

const aboutLinkListen = () => {
  aboutLink.addEventListener("click", goToAbout);
};

const goToHome = (event) => {
  home.classList.remove('hide');
  email.classList.remove('fadeIn');
  branding.classList.remove('fadeIn');
  branding.classList.add('fadeOut');
  email.classList.add('fadeOut');
  projects.classList.add('hide');
  about.classList.add('hide');
};

const homeLinkListen = () => {
  homeLink.addEventListener("click", goToHome);
};

document.addEventListener("DOMContentLoaded",function(){
  projectsLinkListen();
  aboutLinkListen();
  homeLinkListen();
});


