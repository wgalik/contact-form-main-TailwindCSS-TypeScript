# Frontend Mentor – Contact Form Solution

This is my solution for the **Contact Form** challenge from Frontend Mentor.  
The project focuses on building an accessible, responsive form using **HTML**, **Tailwind CSS**, and **TypeScript**, with custom validation and ARIA support.

## 🚀 Live Demo

[Site](https://wgalik.github.io/contact-form-main-TailwindCSS-TypeScript/)

## 🛠 Built With

- **HTML5** – semantic structure, accessible form markup
- **Tailwind CSS** – utility-first styling, custom CSS variables
- **TypeScript** – form validation logic
- **ARIA attributes** – improved accessibility for screen readers
- **Custom validation** – no external libraries

---

## ✨ Features

### ✔ Fully accessible form

- `aria-describedby` links all inputs with error messages
- `aria-invalid` dynamically indicates invalid fields
- `role="alert"` ensures error messages and popup are read by screen readers
- Proper use of `fieldset`, `legend`, and `label`
- Keyboard-friendly UI

### ✔ Custom validation

- Empty fields detection
- Email format validation
- Query type (radio) selection validation
- Checkbox consent validation
- Success popup shown only when all inputs pass validation

### ✔ Responsive design

- Tailwind CSS grid and utilities
- Mobile-first layout

### ✔ Clean and modern UI

- Custom color variables
- Smooth transitions
- Focus and hover states

---

## 📄 Code Overview

### **HTML**

The form uses semantic elements and ARIA attributes to ensure accessibility:

- `aria-describedby` for pairing fields with error messages
- `aria-invalid` dynamically set via TypeScript
- `role="alert"` for instant screen reader feedback
- Hidden success popup that becomes visible when the form is valid

### **TypeScript**

The script handles:

- Input validation for text fields
- Email format check using regex
- Radio input validation
- Checkbox validation
- Managing `aria-invalid` and `aria-describedby` states
- Displaying the success popup only when no errors are present

---

## 🧠 What I Learned

- How to structure a fully accessible form using ARIA
- How to manage dynamic accessibility attributes in TypeScript
- Tailwind components with custom CSS layers
- Building custom validation logic without external libraries
- Improving UX while keeping the project WCAG-friendly

---

## 🌟 Acknowledgements

Solution built based on the Frontend Mentor Contact Form challenge.
Thanks to Frontend Mentor for providing great UI challenges.
