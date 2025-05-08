import './style.css'

const taskInput = document.getElementById<HTMLInputElement>("taskInput");
const addTaskBtn = document.getElementById<HTMLButtonElement>("addTaskBtn");
const todoList = document.getElementById<HTMLUListElement>("taskList");
const greetingElement = document.getElementById<HTMLHeadingElement>("greeting");
const factElement = document.getElementById<HTMLParagraphElement>("randomFact");

// if (!taskInput || !addTaskBtn || !clearTaskBtn || !greetingElement || !factElement) {
//     throw new Error('Some elements can not be found');
// };

// Greeting based on time of day
const setGreeting = (): void => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";
    greetingElement.textContent = greeting;
};

// Random fact
const fetchRandomFact = async (): Promise<void> => {
  const response = await fetch("https://uselessfacts.jsph.pl/random.json");
  const data = await response.json();
  factElement.textContent = data.text;
};



document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
    fetchRandomFact();

});