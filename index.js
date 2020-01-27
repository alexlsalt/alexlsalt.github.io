// Display Travel Go Budget project details

const buttonOne = document.getElementById('button-one');
const descrOne = document.getElementById('first-description');

function showOne() {
  descrOne.style.display = 'block';
  buttonOne.style.display = 'none';
  };

  buttonOne.onclick = showOne;
  



// Display Port Townsend Eats project details

const buttonThree = document.getElementById('button-three');
const descrThree = document.getElementById('third-description');

function showThree() {
  descrThree.style.display = 'block';
  buttonThree.style.display = 'none';
};

buttonThree.onclick = showThree;

// Display Mahalo project details

const buttonFour = document.getElementById('button-four');
const descrFour = document.getElementById('fourth-description');

function showFour() {
  descrFour.style.display = 'block';
  buttonFour.style.display = 'none';
};

buttonFour.onclick = showFour;