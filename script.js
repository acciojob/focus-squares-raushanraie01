//your JS code here. If required.
      let boxes = document.querySelectorAll(".square");
      boxes.forEach((box) => {
        box.addEventListener("mouseover", function handleSquare() {
          let sq1 = document.getElementById("square1");
          let sq2 = document.getElementById("square2");
          let sq3 = document.getElementById("square3");
          for (let box of boxes) {
            if (box.id != this.id) {
              box.style.backgroundColor = "#6F4E37"; /*slateblue*/
            }
          }
        });
        box.addEventListener("mouseout", function handleSquare() {
            boxes.forEach(box=>{
          box.style.backgroundColor = "#E6E6FA";

            })
        });
      });