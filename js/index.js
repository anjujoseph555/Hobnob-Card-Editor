// Closing 3 extended sidebars and opening/closing 1.
let extendedSidebars = document.getElementsByClassName("extended-sidebar");
function togglingCurrentExtSidebar(currentExtSidebar) {
    for (let numOfExtendedSidebar=0; numOfExtendedSidebar<4; numOfExtendedSidebar++) {
        let sidebarBtnPath = document.getElementsByClassName("sidebar-btn")[numOfExtendedSidebar].childNodes[1].childNodes[1];
        let sidebarBtnLabel = document.getElementsByClassName("sidebar-btn-label");

        // Changing styles according to need.
        if (numOfExtendedSidebar === currentExtSidebar) {
            extendedSidebars[numOfExtendedSidebar].classList.toggle("hide-element");
            sidebarBtnPath.style.fill = "rgb(255, 183, 3)";
            sidebarBtnLabel[numOfExtendedSidebar].style.color = "rgb(255, 183, 3)";
        } else {
            extendedSidebars[numOfExtendedSidebar].classList.add("hide-element");
            sidebarBtnPath.style.fill = "rgb(255, 255, 255)";
            sidebarBtnLabel[numOfExtendedSidebar].style.color = "rgb(255, 255, 255)";
        }
    }
}

// Template button and it's extended sidebar
const templateBtn = document.getElementById("templateBtn");

templateBtn.addEventListener("click", function () { 
    togglingCurrentExtSidebar(0);
});

// Uplaod button and it's extended sidebar
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", function () { 
    togglingCurrentExtSidebar(1);
});

// Elements button and it's extended sidebar
const elementsBtn = document.getElementById("elementsBtn");

elementsBtn.addEventListener("click", function () {
    togglingCurrentExtSidebar(2);
});

// Text button and it's extended sidebar
const textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", function () { 
    togglingCurrentExtSidebar(3);
});


// Canvas
const canvas = new fabric.Canvas('canvas', {
    width: 595,
    height: 340,
});

canvas.renderAll();