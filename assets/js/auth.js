class Auth {
    constructor() {
        this.auth = firebase.auth();
        this.checkAuthState();
    }
    checkAuthState() {
        this.auth.onAuthStateChanged(user => {
            if (user) {
                if (document.getElementById('pageWrapper')) {
                    document.getElementById('pageWrapper').classList.remove('d-none');
                    document.getElementById('Loader').remove();
                }
                if (!window.location.pathname.includes('dashboard.html')) {
                    window.location.href = '/dashboard.html';
                }
            } else {
                const protectedPages = ['dashboard.html'];
                if (protectedPages.some(page => window.location.pathname.includes(page))) {
                    window.location.href = '/';
                }
            }
        });
    }
    showAlert(message, type = 'danger') {
        const alertElement = document.getElementById('alertMessage');
        alertElement.className = `alert alert-${type} alert-dismissible fade show`;
        alertElement.innerHTML = `${message}`;
        alertElement.style.display = 'block';
        setTimeout(() => {
            alertElement.style.display = 'none';
        }, 5000);
    }
    showLoader() {
        document.getElementById('waitingButton').classList.remove('d-none');
        document.getElementById('actionButton').classList.add('d-none');
    }
    hideLoader() {
        document.getElementById('waitingButton').classList.add('d-none');
        document.getElementById('actionButton').classList.remove('d-none');
    }
    async login(email, password) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem('authToken', token);
            this.showAlert('Login successful! Redirecting...', 'success');
            setTimeout(() => window.location.href = '/dashboard.html', 1500);
            return { success: true };
        } catch (error) {
            console.log('error', error);
            console.log('error.code', error.code);
            this.showAlert(this.getErrorMessage(error.code));
            return { success: false, error: this.getErrorMessage(error.code) };
        }
    }


    async signup(email, password) {
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem('authToken', token);
            this.showAlert('Signup successful! Redirecting...', 'success');
            return { success: true };
        } catch (error) {
            console.log('error', error);
            console.log('error.code', error.code);
            
            this.showAlert(this.getErrorMessage(error.code));
            return { success: false, error: this.getErrorMessage(error.code) };
        }
    }

    async logout() {
        try {
            await this.auth.signOut();
            localStorage.removeItem('authToken');
            window.location.href = '/';
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    getErrorMessage(errorCode) {
        const errorMessages = {
            'auth/invalid-email': 'Invalid email address',
            'auth/user-disabled': 'This account has been disabled',
            'auth/user-not-found': 'No account found with this email',
            'auth/invalid-credential': 'The supplied auth credential is incorrect.',
            'auth/email-already-in-use': 'Email already in use. Please use a different email.',
            'auth/weak-password': 'Password should be at least 6 characters'
        };
        return errorMessages[errorCode] || 'An error occurred';
    }
}