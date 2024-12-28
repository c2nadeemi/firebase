const auth = new Auth();
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.showLoader();
    const result = await auth.login(email, password);
    auth.hideLoader();
    if (!result.success) {
        auth.showAlert(result.error);
    }
});