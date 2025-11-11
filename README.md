Venda_Valley_Engineering_Web_XISD6329
Venda Valley Engineering Website

A web platform for Venda Valley Engineering — designed to allow users to sign up, log in, book services, send messages, and for the admin to manage all activities from a single dashboard.

Features Users

Create an account and log in using Firebase Authentication

Book services using a connected Firestore database

View booking confirmations

Send messages to the admin using the contact page

Download the Venda Valley app directly from the website

Admin

Log in securely using Firebase Authentication

View, approve, or reject bookings in real-time

View and respond to messages from users

Manage and activate/deactivate users

View total and pending bookings

Logout functionality with session protection

Technologies Used

HTML5, CSS3, JavaScript (ES6)

TailwindCSS for styling

Firebase Hosting

Firebase Authentication

Firebase Firestore Database

Installation and Setup

Follow these steps to run the website locally on your machine.

1️⃣ Clone the repository

Open Visual Studio Code and run:

git clone https://github.com//Venda_Valley_Engineering_Web_XISD6329.git

Then open the project folder:

cd Venda_Valley_Engineering_Web_XISD6329

2️⃣ Set up Firebase

Go to Firebase Console .

Create a new project called Venda Valley Engineering.

Go to Project Settings → Your Apps → Web.

Copy your Firebase configuration and paste it into the Firebase scripts in:

signup.html

login.html

book.html

confirmations.html

contact.html

admin-login.html

admin-dashboard.html

Example:

const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT.firebaseapp.com", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT.appspot.com", messagingSenderId: "YOUR_SENDER_ID", appId: "YOUR_APP_ID" };

3️⃣ Enable Firebase Services

In your Firebase console:

Go to Build → Authentication → Get Started

Enable Email/Password Sign-in

Go to Build → Firestore Database → Create Database

Choose test mode for development.

Collections to create manually (if not auto-generated):

users

bookings

messages

4️⃣ Add Admin Account

In Firebase Authentication → Users, click Add User.

Enter:

Email: admin@vendavalley.com

Password: Admin@vve

Copy the UID generated (for example: MvlYNJyu4OX0SLZQbkHPZRweeFl2).

In the Firestore users collection, create a document with the same UID:

{ "email": "admin@vendavalley.com", "role": "admin", "name": "Venda Valley Admin" }

5️⃣ Run the Website Locally

To view the website:

Open index.html in your browser

Or, install the Live Server extension in Visual Studio Code and click “Go Live”

6️⃣ Deploy to Firebase Hosting (optional)

If you want to deploy online:

npm install -g firebase-tools firebase login firebase init firebase deploy

🧠 Admin Login Details Role Email Password Admin admin@vendavalley.com Admin@vve Download App

The website includes a Download Our App section in the footer.

Both Play Store and App Store badges link to download-app.html

On that page, users can download the APK directly from /apk/app-release.apk

Place your APK file here:

/apk/app-release.apk

Security Rules (Firestore)

Make sure these Firestore rules are applied:

rules_version = '2'; service cloud.firestore { match /databases/{database}/documents {

function isAuthenticated() { return request.auth != null; }
function isAdmin() { return isAuthenticated() && request.auth.uid == "MvlYNJyu4OX0SLZQbkHPZRweeFl2"; }

match /users/{userId} {
  allow read: if isAuthenticated();
  allow write: if isAdmin() || request.auth.uid == userId;
}

match /bookings/{bookingId} {
  allow read: if isAuthenticated();
  allow create: if isAuthenticated();
  allow update, delete: if isAdmin();
}

match /messages/{msgId} {
  allow read, create: if isAuthenticated();
  allow update, delete: if isAdmin();
}
} }

Notes

Admin Dashboard requires Firebase Authentication to verify admin credentials.

Users cannot access admin pages without authentication.

Data syncs in real-time between the website and Firestore.

To reset admin password, use the Firebase Console.

License

© Venda Valley Engineering 2025. All rights reserved.
