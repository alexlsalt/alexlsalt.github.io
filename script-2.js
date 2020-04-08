// Travel Go Budget project details

const button1 = document.getElementById('button-one');
const descr1 = document.getElementById('first-description');

// Three To-Do's A Day project details

const button2 = document.getElementById('button-two');
const descr2 = document.getElementById('second-description');

function showDescription(event) {
  console.log(event);
  desc.style.display = 'block';
  button.textContent = 'Hide project details';

  button.addEventListener('click', () => {
    desc.style.display = 'none';
    button.textContent = 'Project Details';

    });
  };  

button1.addEventListener('click', showDescription(descr1, button1));

 /* 

function showTwo() {
  descrTwo.style.display = 'block';
  buttonTwo.style.display = 'none';
  };

  buttonTwo.onclick = showTwo;


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
*/