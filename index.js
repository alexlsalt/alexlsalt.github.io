let projectsButton = document.getElementById('projects-button');

//Project button global variables

const buttonOne = document.getElementById('button-one');
const descrOne = document.getElementById('first-description');

//Project at placement two recently removed

const buttonThree = document.getElementById('button-three');
const descrThree = document.getElementById('third-description');

const buttonFour = document.getElementById('button-four');
const descrFour = document.getElementById('fourth-description');

//First example element
const showOne = () => {
descrOne.style.display = 'block';
buttonOne.style.display = 'none';
};

  buttonOne.onclick = showOne;


//Second example element recently removed

//Third example element

const showThree = () => {
  descrThree.style.display = 'block';
  buttonThree.style.display = 'none';
};

buttonThree.onclick = showThree;

//Fourth example element

const showFour = () => {
  descrFour.style.display = 'block';
  buttonFour.style.display = 'none';
};

buttonFour.onclick = showFour;