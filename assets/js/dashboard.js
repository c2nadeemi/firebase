const auth = new Auth();
const logoutButton = document.getElementById('logoutButton');
const userEmail = document.getElementById('userEmail');

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        userEmail.textContent = user.email;
    }
});

logoutButton.addEventListener('click', () => {
    auth.logout();
});