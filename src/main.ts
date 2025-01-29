import './style.css'

const taskInput = document.getElementById<HTMLInputElement>("#taskInput");
const addTaskBtn = document.getElementById<HTMLButtonElement>("#addTaskBtn");
const clearTaskBtn = document.getElementById<HTMLButtonElement>("#clearTaskBtn");
const greetingElement = document.getElementById<HTMLHeadingElement>("#greeting");
const factElement = document.getElementById<HTMLParagraphElement>("#randomFact");

let setGreeting(): void {
  const hour = new Date().getHours();
  let greeting = "Good Evening!";
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!"
  }
  greetingElement?.innerText = greeting;
}

// const greetings = [
//   "Bit early, isn't it?",
//   "Good Morning",
//   "Good Afternoon",
//   "Good Evening"
// ];

// const index = Math.floor(new Date().getHours() / 24 * greetings.length);
// document.getElementById("#greeting").innerHTML = greetings[index];

document.addEventListener("DOMContentLoaded", () => {
  setGreeting();
});