// Template button and it's extended sidebar
const templateBtn = document.getElementById("templateBtn");
const templateSidebarExt = document.getElementById("templateSidebarExt");

templateBtn.addEventListener("click", function () { 
    templateSidebarExt.classList.toggle("hide-element");
});

// Uplaod button and it's extended sidebar
const uploadBtn = document.getElementById("uploadBtn");
const uploadSidebarExt = document.getElementById("uploadSidebarExt");

uploadBtn.addEventListener("click", function () { 
    uploadSidebarExt.classList.toggle("hide-element");
});

// Elements button and it's extended sidebar
const elementsBtn = document.getElementById("elementsBtn");
const elementSidebarExt = document.getElementById("elementSidebarExt");

elementsBtn.addEventListener("click", function () { 
    elementSidebarExt.classList.toggle("hide-element");
});

// Text button and it's extended sidebar
const textBtn = document.getElementById("textBtn");
const textSidebarExt = document.getElementById("textSidebarExt");

textBtn.addEventListener("click", function () { 
    textSidebarExt.classList.toggle("hide-element");
});


// Canvas
const canvas = new fabric.Canvas('canvas', {
    width: 595,
    height: 340,
});

canvas.renderAll();