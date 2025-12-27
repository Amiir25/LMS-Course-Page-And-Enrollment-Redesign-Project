# 📚 LMS Course Page & Enrollment Redesign

This project is part of the **Software Programmer Internship assessment** for **Fidel Tutorial**.  
The goal is to redesign and implement a modern, student-facing **course page and enrollment experience**, inspired by platforms like **Udemy**, with a focus on usability, performance, and mobile-first design.

---

## 🎯 Project Objective

- Audit and redesign the LMS course page
- Streamline the enrollment workflow to reduce friction
- Implement a responsive, high-performance frontend using **React**
- Apply modern UX best practices such as:
  - One-click enrollment
  - Clear learning outcomes
  - Social proof (ratings, reviews)
  - Accessibility-aware design

---

## 🛠️ Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Figma** (UI/UX design)
- **Git & GitHub**

---

## 📐 Design Prototype (Figma)

**[Figma Prototype]**(https://www.figma.com/design/e1vqbe3LaHMNCaOOLxBmgo/LMS-Course-Page---Enrollment-Redesign-Project?node-id=0-1&t=6Y8vG4PZkzvRIhyt-1)

The prototype includes:
- Course details page
- Sticky enrollment bar
- Course syllabus with expandable sections
- Instructor bio and related courses
- Mobile-first layout

---

## ⚙️ Local Setup Instructions

1. **Clone the repository**

git clone https://github.com/Amiir25/LMS-Course-Page-And-Enrollment-Redesign-Project.git

2. **Navigate to the project directory**

cd LMS-Course-Page-And-Enrollment-Redesign-Project

3. **Install dependencies**

npm install

4. **Start the development server**

npm run dev

4. **Open in browse**

http://localhost:5173


## 🚀 Enrollment Logic

The enrollment system is **state-driven and consistent across the UI**.

- **Enrollment state is lifted to `App.jsx`**, so multiple buttons (Navbar, page buttons) stay in sync.
- **Supported states:**
  - Default (“Enroll Now”)
  - Enrollment in progress (“Enrolling…”)
  - Enrollment completed (“Enrolled”)
- **Success feedback** is displayed via a popup notification.
- **Duplicate enroll actions** are prevented while loading.

This approach keeps logic **simple, readable, and scalable** without using Context unnecessarily.

---

## 📱 Key Features Implemented

- ✅ Mobile-first responsive layout  
- ✅ Sticky enrollment bar (desktop)  
- ✅ Expandable course syllabus (accordion-style)  
- ✅ Social proof elements (ratings & enrollment count)  
- ✅ Accessible typography and contrast-aware UI  
- ✅ Smooth enrollment UX with visual feedback  

---

## 📦 Repository & Submission Links

- **[GitHub Repository]**(https://github.com/Amiir25/LMS-Course-Page-And-Enrollment-Redesign-Project.git)  
- **[Figma Prototype]**(https://www.figma.com/design/e1vqbe3LaHMNCaOOLxBmgo/LMS-Course-Page---Enrollment-Redesign-Project?node-id=0-1&t=6Y8vG4PZkzvRIhyt-1)  

---

## 👤 Author

**[Your Name]**  
Software Programmer Intern  
[My Portfolio](https://amirsadik.vercel.app/)  

---

## ✅ Final Note

This project focuses on **clarity, usability, and real-world frontend architecture**, aligning with modern LMS and EdTech platform standards.
