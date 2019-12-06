let homePage = document.getElementById('home')
let projectsPage = document.getElementById('projects');
let projectsButton = document.getElementById('projects-button');
let homeButton = document.getElementById('home-button');


let projectsActive = () => {
  homePage.style.display = 'none';
  projectsPage.style.display = 'block';
};

projectsButton.onclick = projectsActive;

let homeActive = () => {
  projectsPage.style.display = 'none';
  homePage.style.display = 'block';
};

homeButton.onclick = homeActive;



//First example element

let buttonOne = document.getElementById('button-one');
let descrOne = document.getElementById('first-description');


let showOne = () => {
  descrOne.style.display = 'block';
  buttonOne.style.display = 'none';
};

buttonOne.onclick = showOne;

//Second example element

let buttonTwo = document.getElementById('button-two');
let descrTwo = document.getElementById('second-description');


let showTwo = () => {
  descrTwo.style.display = 'block';
  buttonTwo.style.display = 'none';
};

buttonTwo.onclick = showTwo;

//Third example element

let buttonThree = document.getElementById('button-three');
let descrThree = document.getElementById('third-description');


let showThree = () => {
  descrThree.style.display = 'block';
  buttonThree.style.display = 'none';
};

buttonThree.onclick = showThree;

//Fourth example element

let buttonFour = document.getElementById('button-four');
let descrFour = document.getElementById('fourth-description');


let showFour = () => {
  descrFour.style.display = 'block';
  buttonFour.style.display = 'none';
};

buttonFour.onclick = showFour;
