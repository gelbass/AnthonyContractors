const btn = document.getElementById("sendEmail");

document.getElementById("formContact").addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceID = "service_nn4mr6c"; //Remplazar 
  const templateID = "template_h85zjtp"; //Remplazar 

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      Swal.fire(
        'Message sent succesfully',
        'Our team will contact you shortly',
        'success'
      )
    },
    err => {
      Swal.fire(
        'Message not sent',
        'Try again later.',
        'error'
      )
    }
  );
  document.getElementById("firstName").value ="";
  document.getElementById("email").value ="";
  document.getElementById("address").value ="";
  document.getElementById("service").value ="";
  document.getElementById("comments").value ="";
});


document.addEventListener("scroll", function () {
  const menu = document.getElementById("menu");
  const services = document.getElementById("services");

  // Obtener las posiciones de ambos elementos
  const menuRect = menu.getBoundingClientRect();
  const servicesRect = services.getBoundingClientRect();

  if ((servicesRect.top) <= menuRect.bottom) {
      // Cuando la sección toca el menú, sube
      //menu.style.opacity = 0;
      menu.style.transform = `translateY(-100%)`;
      menu.style.transition = "transform 0.5s ease";
  } else if (servicesRect.top > menuRect.bottom) {
      // Cuando la sección se aleja, el menú baja
      //menu.style.opacity = 1;
      menu.style.transform = `translateY(0)`;
      menu.style.transition = "transform 0.5s ease";
  }
});

window.addEventListener('resize', () => {
  const homeSection = document.querySelector('#home');
  const svgHome = document.querySelector('.svg--home');
  svgHome.style.top = `${homeSection.offsetHeight - svgHome.offsetHeight}px`;
});
