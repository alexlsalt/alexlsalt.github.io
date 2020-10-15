function displayProjectInfo(str) {
  const button = document.querySelector(`#button-${str}`);
  const description = document.querySelector(`#description-${str}`);

  button.addEventListener('click', () => {
    description.style.display = 'block';
    button.style.display = 'none';
  });
}

// SYTYCF project details
displayProjectInfo('eight');

// Ladies Code Collective project details
displayProjectInfo('seven');

// Wellbean project details
displayProjectInfo('six');

// Letters from Nelson project details
displayProjectInfo('five');

// Display Three To-Do's A Day project details
displayProjectInfo('two');

// Display Travel Go Budget project details
displayProjectInfo('three');