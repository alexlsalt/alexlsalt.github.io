// Function to display project info for each button

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', event => {
    const values = event.target.id.split('-');
    const num = values[1];

    // Hide 'project details' button
    document.querySelector(`#button-${num}`).style.display = 'none';

    // Display project information for specific box
    document.querySelector(`#description-${num}`).style.display = 'block'
  });
})