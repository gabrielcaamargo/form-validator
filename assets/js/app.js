const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const userEmail = document.getElementById('userEmail')
  const userPassword = document.getElementById('userPassword')
  
  const alertLayout = document.getElementById('formValidation')
  
  if(userEmail.value == '' || userPassword.value == ''){
    alertLayout.innerHTML = '<p>Por favor, insira todos os campos'
  } 

   if(!userEmail.value.includes('@') || !userEmail.value.includes('.com')){
    alertLayout.innerHTML = '<p>Por favor, insira um email válido</p>'
  } else if(userPassword.value.length <= 5){
    alertLayout.innerHTML += '<p>A senha deve conter no mínimo 6 dígitos'
  } else{
    alertLayout.innerHTML = '<p style="color: green;">Sucesso ao entrar'
    
  }

  setTimeout(()=>{location.reload()}, 2500)
  
})