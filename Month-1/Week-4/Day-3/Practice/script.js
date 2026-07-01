console.log("Hello Gyana")

// DOM Manipulation : Document Object Model
// DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// getElementById() : This method returns the element that has the ID attribute with the specified value. If no elements with the specified ID exists, it returns null.

// getElementsByClassName() : This method returns a collection of all elements in the document with the specified class name, as a NodeList object. If no elements with the specified class name exists, it returns an empty NodeList.

// getElementsByTagName() : This method returns a collection of all elements in the document with the specified tag name, as a NodeList object. If no elements with the specified tag name exists, it returns an empty NodeList.

// const p = document.getElementById("myParagraph");
// console.log(p);

// const boldElements = document.getElementsByClassName("bold-content");
// console.log(boldElements[1]);

// const h1Elements = document.getElementsByTagName("h1");
// console.log(h1Elements);

// querySelector() : This method returns the first element that matches a specified CSS selector(s) in the document. If no matches are found, it returns null.
// querySelectorAll() : This method returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors. If no matches are found, it returns an empty NodeList. 

const boldElement = document.querySelectorAll(".bold-content");
console.log(boldElement);

// console.log(boldElement[0].innerText); // innerText : This property represents the "rendered" text content of a node and its descendants. It approximates the text the user would see if they highlighted the contents of the node.

console.log(boldElement[0].textContent); // textContent : This property represents the text content of a node and its descendants. It returns the text as it appears in the HTML source code, including hidden elements.
console.log(boldElement[0].innerHTML);
console.log(boldElement[0].parentNode);
console.log(boldElement[0].parentElement);


const div_box = document.querySelector(".container");
console.log(div_box)

// how to create a new element and add it to the DOM

const para = document.createElement("p"); // createElement() : This method creates the HTML element specified by tagName or qualifiedName.
para.innerText = "This is a new paragraph created using JavaScript.";
para.style="background-color: yellow; color: red; font-size: 20px; padding: 10px; border-radius: 5px;"; // style : This property represents the inline styles of an element. It allows you to get or set the CSS styles directly on the element.
div_box.appendChild(para); // appendChild() : This method adds a node to the end of the list of children of a specified parent node.

const para2 = document.createElement("p"); // createElement() : This method creates the HTML element specified by tagName or qualifiedName.
para2.innerText = "This is a new paragraph created using JavaScript.";

div_box.prepend(para2); // prepend() : This method inserts a set of Node objects or DOMString objects before the first child of the parent element. If the parent element has no children, the new nodes are added as the only child nodes.


// Event Handling : Event handling is the process of capturing and responding to user interactions with a web page, such as clicks, key presses, mouse movements, and form submissions. In JavaScript, events are handled using event listeners, which are functions that are called when a specific event occurs on a particular element.
// target body : The target body is the element that triggered the event. It is the element that the event listener is attached to, and it is the element that will receive the event when it occurs. The target body can be accessed using the event.target property, which returns a reference to the element that triggered the event.
// event type : The event type is the specific type of event that occurred, such as a click, key press, or mouse movement. It is used to identify the type of event that triggered the event listener, and it can be accessed using the event.type property, which returns a string representing the type of event that occurred.
// handler code : The handler code is the function that is executed when the event occurs. It is the code that defines how the program should respond to the event, and it can be defined as an anonymous function or a named function. The handler code can access the target body and event type using the event object that is passed to the function as an argument.

const button = document.querySelector("#myButton");
console.log(button);

button.addEventListener("click", () => {
    console.log("Button clicked!");
})


const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // preventDefault() : This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when clicking on a "Submit" button, preventing the form from being submitted.
    
    console.log(event);
    console.log("Form submitted!");
})

const input = document.querySelector("#myInput");

input.addEventListener("input", (event) => {
    console.log(event); 
})





// document.addEventListener("keydown", () => {
//     console.log("Key down!");
// })

// document.addEventListener("keyup", () => {
//     console.log("Key up!");
// })

document.addEventListener("keypress", () => {
    console.log("Key press!");
})

const h4 = document.querySelector("h4");
h4.addEventListener("mouseover", () => {
    console.log("Mouse over!");
})


const login_form = document.querySelector(".login");
const inputs = document.querySelectorAll(".login input");


login_form.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = inputs[0].value;
    let password = inputs[1].value;

    localStorage.setItem("login_data", JSON.stringify({email, password})); // localStorage : This property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. It provides a way to store key-value pairs in a web browser with no expiration date.
    
    console.log("Email:", email);
    console.log("Password:", password);

    console.log("register form submitted");

})