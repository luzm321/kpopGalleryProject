// let ulElement = document.getElementsByClassName("KGroupsClass")[0];


// function constructNewElement(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, textOfElement, parentElement) {
//     try {
//         if(typeof attributeName2 === "string" && attributeName2 !== "") {
//             let newElement = document.createElement(elementTagName);
//             newElement.setAttribute(attributeName1, attributeValue1);
//             newElement.setAttribute(attributeName2, attributeValue2);
//             newElement.innerText = `${textOfElement}`;
//             parentElement.appendChild(newElement);
//         } else {
//             let newElement = document.createElement(elementTagName);
//             newElement.setAttribute(attributeName1, attributeValue1);
//             newElement.innerText = `${textOfElement}`;
//             parentElement.appendChild(newElement);
//         };
//     } catch (e) {
//         console.error(`${e}, TagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, 
//         attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, textOfElement: ${textOfElement}, parentElement: ${parentElement}`);
//         alert(e);
//     };   

// };

// constructNewElement("li","class","TabLi", "", "", "BtoB",ulElement);

// let newLi = document.getElementsByClassName("TabLi")[17];

// constructNewElement("a", "href", "./main.html", "", "", "Practice",newLi);

// let buttonElement = document.getElementsByClassName("KGroupsClass")[0];

// function formulateNewElement(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, innerText, parentElement) {
//     try {
//         if(typeof attributeName2 === "string" && attributeName2 !== "") {
//             let newElement = document.createElement(elementTagName);
//             newElement.setAttribute(attributeName1, attributeValue1);
//             newElement.setAttribute(attributeName2, attributeValue2);
//             newElement.innerText = `${innerText}`;
//             parentElement.appendChild(newElement);
//         } else {
//             let newElement = document.createElement(elementTagName);
//             newElement.setAttribute(attributeName1, attributeValue1);
//             newElement.innerText = `${innerText}`;
//             parentElement.appendChild(newElement);
//         };
//     } catch (e) {
//         console.error (`${e}, TagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1},
//         attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, innerText: ${innerText}, parentElement: ${parentElement}`);
//         alert(e);
//     };
// };

// formulateNewElement("button", "id", "subButton", "class", "TabLi", "Subscribe", buttonElement);
// let newButton = document.getElementsByClassName("TabLi")[18];
// formulateNewElement("a", "href", "./main.html", "", "", "Follow", newButton);

// Fat Arrow Function below being used for same dynamic function as above in terms of global scope
// basic skeleton of a fat arrow function is below:
// let hi = () => {
//     console.log("hi");
// };

// hi();

// let buttonElement = document.getElementsByClassName("KGroupsClass")[0];

// let formulateNewElement = (elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, innerText, parentElement) => {
//     try {
//         if(typeof attributeName2 === "string" && attributeName2 !== "") {
//             let newElement = document.createElement(elementTagName);
//             newElement.setAttribute(attributeName1, attributeValue1);
//             newElement.setAttribute(attributeName2, attributeValue2);
//             newElement.innerText = `${innerText}`;
//             parentElement.appendChild(newElement);
//         } else {
//             let newElement = document.createElement(elementTagName);
//             newElement.setAttribute(attributeName1, attributeValue1);
//             newElement.innerText = `${innerText}`;
//             parentElement.appendChild(newElement);
//         };
//     } catch (e) {
//         console.error (`${e}, TagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1},
//         attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, innerText: ${innerText}, parentElement: ${parentElement}`);
//         alert(e);
//     };
// };

// Event Listeners

let welcomeMessageElement = document.getElementById("appWelcomeMsgId");

let changeTextOnClick = () => {
    welcomeMessageElement.innerText = "Leggo! \\(>_<)/";

};

welcomeMessageElement.addEventListener("click", changeTextOnClick);


let titleIntroElement = document.getElementById("appTitleiId");

let alterTextOnClick = () => {
    titleIntroElement.innerText = "A Sojourn Into Kpop!";
};

titleIntroElement.addEventListener("click", alterTextOnClick);
