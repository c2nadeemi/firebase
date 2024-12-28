# Firebase Authentication System

A web-based authentication system built using Firebase, HTML, JavaScript, and Bootstrap that provides secure user authentication functionality.

## Features

- User registration with email and password
- User login with email and password
- Protected routes/content for authenticated users
- Responsive design using Bootstrap

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have a Firebase account and project set up
* Basic understanding of HTML, JavaScript, and Bootstrap
* Modern web browser
* Text editor or IDE

## Installation

1. Clone the repository:
```bash
git clone https://github.com/c2nadeemi/firebase.git
```

2. Navigate to the project directory:
```bash
cd firebase
```

3. Configure Firebase:
   - Create a new project in Firebase Console
   - Enable Email/Password authentication in Firebase Console
   - Copy your Firebase configuration from Project Settings
   - Replace the Firebase configuration in `config.js` with your own:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Usage

1. Open `index.html` in your web browser
2. Use the registration form to create a new account
3. Login with your credentials
4. Test the authentication flow

## Project Structure

```
├── index.html            # Main HTML file
├── signup.html           # Sinup HTML file
├── asset/js/
│   ├── auth.js           # Authentication logic
│   └── config.js         # Firebase configuration
│   └── dashboard.js      # Dashboard page Scripts
│   └── login.js          # Login Scripts
│   └── signup.js         # Signup Scripts
└── README.md             # Project documentation
```

## Dependencies

- Firebase v9.x
- Bootstrap v5.x

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License

## Contact

Nadeem Iqbal - [c2nadeem@gmail.com]
Project Link: [https://github.com/c2nadeemi]