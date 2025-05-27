# ![imgonline-com-ua-Resize-o24o3Nar9A02A](https://github.com/user-attachments/assets/6942c3ed-275f-4fbd-9ee4-29bd8ed13bc1) Password Lab

## Description

Password Lab is a web-based project for generating and verifying the security and strength of passwords.  
Built with **React + TypeScript + Vite + Charts**, the app evaluates password strength using **zxcvbn** (a password strength estimator), custom internal rules (like minimum length), and even simulates **dictionary attacks**.

## 🔧 Features

- **Password Strength Analysis** using:
  - `zxcvbn`
  - Entropy
  - Time to Crack
  - log10(guesses)
  - Estimated Hacking Time
  - Internal Recommendations (e.g., too short, missing symbols, etc.)
- **Password Generator** with customizable options:
  - Password length
  - Include numbers
  - Include symbols
  - Include uppercase letters
- **Dictionary Attack Simulation**:
  - Enter a password and check if it matches common words
  - Get real-time recommendations to avoid weak choices

## 📸 Screenshots
![chrome_wQsPnTFWNY](https://github.com/user-attachments/assets/b9333df1-e579-42aa-a3d5-1aa6a2701c7a)
![chrome_kmZw7k08mM](https://github.com/user-attachments/assets/3fc270fd-04bd-4ec1-b677-15b3da33375b)
![chrome_CvEPQonwEp](https://github.com/user-attachments/assets/532c5982-24da-4b97-bdf6-69a631ce9e9c)
![chrome_lxPU4rDLPf](https://github.com/user-attachments/assets/8842a91f-b6ef-4d98-ab67-79026652b332)


## 📦 Requirements

To run the project locally:

# Clone the repository
git clone [https://github.com/your-username/password-lab.git](https://github.com/GormanProg123/PasswordLab.git)
cd password-lab

# Install dependencies
npm install

# Start the development server
npm run dev

