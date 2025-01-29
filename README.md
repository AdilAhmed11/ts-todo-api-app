# tech-test-w4

# To do list

## Introduction

It will be a static page. There'll be a greeting at the top of the page based on time of day.
Underneath that will be a quote/message generated from an API call.

Underneath that will be an input box where a new item on the todo list can be created.

Underneath that will be the to do list. Each to-do list item will be contained in its own rectangular 'box'.
It will be checklist. When it is ticked off, the item will have a strike through it.
There will also be a image of a bin so the item can be deleted.

## Time Break Down

-   [ ] 10am - 11:30 am: HTML & Basic SCSS
-   [ ] 11:30am - 12:30pm: Quality Gate
-   [ ] 1pm - 2:30pm: TypeScript & API Call
-   [ ] 2:30pm - 3pm: Final bits and submission

## Logic

### HTML

First Section
Div containing:
Header Element for the greeting
Paragraph element for the random fact. Will need to have placeholder test.

Second Section
Div containing:
An input element where the new to do list item will be written.
A button element to delete the the to do list item

Third Section
Div containing:
An list (unordered or ordered?) containing all the to do list items.

### CSS

Basic styling for now
USE BEM CONVENTION

### TypeScript

Constant for the input, buttons, task list, others...
Object containing the task. The task should contain the id of the task, text, completed as a boolean.
Function for the greeting depending on time of day.
Function for the random fact
Function to add a task
Function to complete the task
Function to remove/clear the task

Event listeners for the buttons.

### API call
