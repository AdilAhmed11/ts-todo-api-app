import './style.css'

const taskInput = document.getElementById<HTMLInputElement>("taskInput");
const addTaskBtn = document.getElementById<HTMLButtonElement>("addTaskBtn");
const clearTaskBtn = document.getElementById<HTMLButtonElement>("clearTaskBtn");
const greetingElement = document.getElementById<HTMLHeadingElement>("greeting");
const factElement = document.getElementById<HTMLParagraphElement>("randomFact");


// if (!taskInput || !addTaskBtn || !clearTaskBtn || !greetingElement || !factElement) {
//     throw new Error('Some elements can not be found');
// };

const setGreeting = (): void => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";
    greetingElement.textContent = greeting;
};









document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
});