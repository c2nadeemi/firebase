const auth = new Auth();
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
       auth.showAlert('Passwords do not match');
        return;
    }
    auth.showLoader();
    const result = await auth.signup(email, password);
    auth.hideLoader();
    if (!result.success) {
        auth.showAlert(result.error);
    }
});