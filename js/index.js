function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error');

  errorElement.textContent = '';

  if (!email.includes('@')) {
      errorElement.textContent = 'Por favor, insira um email válido.';
      return false;
  }

  if (password.length < 6) {
      errorElement.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      return false;
  }

  return true;
}