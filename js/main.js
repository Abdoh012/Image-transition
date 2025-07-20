// Variables
const imgscontainer = document.querySelector(".image-transition"); // Images and slider container
const originalContainer = document.querySelector(".original-div"); // Original image container
const originalImg = document.getElementById("original"); // Original images
const arrow = document.querySelector(".arrow"); // Arrow
// End of variables

// Functions
// mouseup event => document
function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
}

// mousemove event => document
function onMouseMove(e) {
  // If the mouse is in the range of imgcontainer change the width of the original image
  if (
    e.pageX > imgscontainer.offsetLeft &&
    e.pageX < imgscontainer.clientWidth + imgscontainer.offsetLeft
  ) {
    originalContainer.style.cssText = `width: ${
      e.pageX - imgscontainer.offsetLeft
    }px`;
    // Move the arrow
    arrow.style.cssText = `left: ${e.pageX - imgscontainer.offsetLeft}px;`;
  }
}
// End of functions

// Set the width of original image
originalImg.style.width = imgscontainer.offsetWidth + "px";

// mousedown event => arrow
arrow.addEventListener("mousedown", function (e) {
  e.preventDefault();
  document.addEventListener("mousemove", onMouseMove);
});

// Add mouseup event function to document
document.addEventListener("mouseup", onMouseUp);

// Set images and arrow to default onresize
window.onresize = () => {
  originalContainer.style.width = "100%";
  originalImg.style.width = "100%";
  arrow.style.left = "100%";
};
