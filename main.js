let ulElement = document.getElementsByClassName("KGroupsClass")[0];


function constructNewElement(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, textOfElement, parentElement) {
    try {
        if(typeof attributeName2 === "string" && attributeName2 !== "") {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.setAttribute(attributeName2, attributeValue2);
            newElement.innerText = `${textOfElement}`;
            parentElement.appendChild(newElement);
        } else {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.innerText = `${textOfElement}`;
            parentElement.appendChild(newElement);
        };
    } catch (e) {
        console.error(`${e}, TagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, 
        attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, textOfElement: ${textOfElement}, parentElement: ${parentElement}`);
        alert(e);
    };   

};

constructNewElement("li","class","TabLi", "", "", "BtoB",ulElement);

let newLi = document.getElementsByClassName("TabLi")[21];

constructNewElement("a", "href", "./main.html", "", "", "Practice",newLi);

