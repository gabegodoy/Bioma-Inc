// SIDEBAR
// Variables
const trigger = document.querySelector('.trigger');
const sidebar = document.querySelector('.sidebar');

// Functions
const sidebarToggle = () => {
  trigger.classList.toggle('active');
  sidebar.classList.toggle('show');
};

// Event Listeners
trigger.addEventListener('click', sidebarToggle);


// LOAD MORE CARDS ON PROJECT PAGE GRID
function showMoreCards () {
 let projectGridViewMoreBtn = document.querySelector('#projectGridViewMore');
 let projectGridPhotos = document.querySelectorAll('.project__page__grid__img__container');

 projectGridPhotos.forEach(pic => {
   if (pic.classList.contains('d-none')) {
     pic.classList.remove('d-none')
     projectGridViewMoreBtn.classList.add('d-none')
   }
   
 });
}
