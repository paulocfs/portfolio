export default function scrollSuaveMenu(){

  const linksMenu = document.querySelectorAll('[data-menu="list-menu"] a');


  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topSection = section.offsetTop;

    window.scrollTo({
      top: topSection,
      behavior: 'smooth'
    });
  } 
  linksMenu.forEach((link)=>{
    link.addEventListener('click', scrollToSection);
  });
  

}