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

const fetchRandomFact = async (): Promise<void> => {
  const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  const data = await response.json();
  factElement.textContent = data.text;

};







document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
    fetchRandomFact();
});