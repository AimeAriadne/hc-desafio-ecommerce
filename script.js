// swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  }
})

// save email
function saveEmail() {
  let email = document.getElementById('email').value
  if (email !== '') {
    localStorage.setItem('savedEmail', email)
    alert('Email salvo com sucesso')
  } else {
    alert('Preencha o campo e-mail')
  }
}
