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




// class ElementFactory {
//     constructor(elementTag, attribute1, attributeValue1, attribute2, attributeValue2, innerText, parentElement) {
//         this.elementTagName = elementTag;
//         this.attributeName= attribute1;
//         this.attributeName2 = attribute2;
//         this.attributeValue = attributeValue1;
//         this.attributeValue2 = attributeValue2;
//         this.elementInnerText = innerText;
//         this.elementParent = parentElement;
//     };

//     createIt = () => {
//         let newElement = document.createElement(this.elementTagName);
//         this.newElement = newElement;
//     };


//     addFirstAttribute = () => {
//         this.newElement.setAttribute(this.attributeName, this.attributeValue);
//     };

//     addSecondAttribute = () => {
//         if(typeof this.attributeName2 === undefined || this.attributeName2 === "") {
//             console.log(`no second attribute was passed`);
//         } else {
//             this.newElement.setAttribute(this.attributeName2, this.attributeValue2);
//         };
//     };

//     addInnerText = () => {
//         this.newElement.innerText = this.elementInnerText;
//     };

//     appendToParentElement = () => {
//         this.elementParent.appendChild(this.newElement);
//     };

// };

// let parentElement = document.getElementById("KGroupsId");

// let createNewElement = (elementTag, attribute1, attributeValue, attribute2, attributeValue2, innerText, parentElement) => {
//     try {
//         let newElement = new ElementFactory(elementTag, attribute1, attributeValue, attribute2, attributeValue2, innerText, parentElement);
//         newElement.createIt();
//         newElement.addFirstAttribute();
//         newElement.addSecondAttribute();
//         newElement.addInnerText();
//         newElement.appendToParentElement();
//     } catch (e) {
//         console.error (`${e}, TagName: ${elementTag}, attributeName1: ${attribute1}, attributeValue1: ${attributeValue},
//         attributeName2: ${attribute2}, attributeValue2: ${attributeValue2}, innerText: ${innerText}, parentElement: ${parentElement}`);
//         alert(e);
//     };
// };

// createNewElement("button","id", "newButton", "class", "newHomeButton", "Subscribe", parentElement);
// createNewElement("p", "id", "elementParagraph", "class", "elementParagraph", "Thanks for viewing", parentElement);
