let homePage = document.getElementById('home')
let projectsPage = document.getElementById('projects');
let projectsButton = document.getElementById('projects-button');
let homeButton = document.getElementById('home-button');

//Project button global variables

let buttonOne = document.getElementById('button-one');
let descrOne = document.getElementById('first-description');

let buttonThree = document.getElementById('button-three');
let descrThree = document.getElementById('third-description');

let buttonFour = document.getElementById('button-four');
let descrFour = document.getElementById('fourth-description');




let projectsActive = () => {
  homePage.style.display = 'none';
  projectsPage.style.display = 'block';
};

projectsButton.onclick = projectsActive;

let homeActive = () => {
  buttonOne.style.display = '';
  buttonThree.style.display = '';
  buttonFour.style.display = '';

  descrOne.style.display = '';
  descrThree.style.display = '';
  descrFour.style.display = '';

  projectsPage.style.display = 'none';
  homePage.style.display = 'block';
};

homeButton.onclick = homeActive;



//First example element

let showOne = () => {
  descrOne.style.display = 'block';
  buttonOne.style.display = 'none';
};

buttonOne.onclick = showOne;

//Second example element

//Third example element

let showThree = () => {
  descrThree.style.display = 'block';
  buttonThree.style.display = 'none';
};

buttonThree.onclick = showThree;

//Fourth example element

let showFour = () => {
  descrFour.style.display = 'block';
  buttonFour.style.display = 'none';
};

buttonFour.onclick = showFour;
