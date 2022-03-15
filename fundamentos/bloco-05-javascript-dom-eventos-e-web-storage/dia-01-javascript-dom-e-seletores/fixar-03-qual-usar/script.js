const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = '#2fc18c';

const emergencyTasksContainer = document.getElementsByClassName('emergency-tasks');
emergencyTasksContainer[0].style.backgroundColor = '#FF9F84';

const noEmergencyTasksContainer = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasksContainer[0].style.backgroundColor = '#F9DB5E';

const titleOfEmergencyTasksContainer = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titleOfEmergencyTasksContainer.length; index += 1) {
  titleOfEmergencyTasksContainer[index].style.backgroundColor = '#A500F3';
}

const titleNoEmergencyTasksContainer = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < titleNoEmergencyTasksContainer.length; index += 1) {
  titleNoEmergencyTasksContainer[index].style.backgroundColor = '#232525'
}

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = '#003533';