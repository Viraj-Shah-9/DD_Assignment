document.addEventListener("DOMContentLoaded", function () {
  var draggedItem = null;
  var successMessage = document.getElementById("successMessage");
  var resetButton = document.getElementById("resetButton");
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  var container1Items = container1.querySelectorAll(".item");

  document.querySelectorAll(".item").forEach(function (item) {
    item.addEventListener("dragstart", function (event) {
      draggedItem = event.target;
      event.target.classListadd("dragging");
    });

    item.addEventListener("dragend", function (event) {
      event.target.classListremove("dragging");
    });
  });

  document
    .getElementById("container2")
    .addEventListener("dragover", function (event) {
      event.preventDefault();
    });

  document
    .getElementById("container2")
    .addEventListener("drop", function (event) {
      event.preventDefault();

      if (draggedItem && event.target.id === "container2") {
        event.target.appendChild(draggedItem);
        draggedItem = null;
        successMessage.style.display = "block";
      }
    });

  resetButton.addEventListener("click", function () {
    container2.innerHTML = "";
    successMessage.style.display = "none";

    container1Items.forEach(function (item) {
      container1.appendChild(item);
    });
  });
});
