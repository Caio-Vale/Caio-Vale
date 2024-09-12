 function insertAfter(newElement, reference) {
     reference.parentNode.insertBefore(newElement, reference.nextSibling);
}


const el = document.createElement("tr")

// let topese = "oi";

el.innerHTML = `<td>${topese}</td>`;

const div = document.querySelector("#test");

insertAfter(el, div);



