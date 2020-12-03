const panels = document.querySelectorAll('.panel');
// Obtain panels node list
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

function removeActiveClasses() {
  panels.forEach(removePanel => {
    removePanel.classList.remove('active');
  })
}