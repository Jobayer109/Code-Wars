const button = document.getElementById("btn");

button.addEventListener("click", function (e) {
  const colors = [
    "red",
    "blue",
    "yellow",
    "black",
    "indigo",
    "magenta",
    "green",
    "gray",
    "white",
    "orange",
    "violet",
    "brown",
    "chocolate",
    "pink",
    "lightBlue",
    "cream",
  ];

  colors.forEach((color) => {
    document.body.style.backgroundColor = Math.random(color);
  });
});

/*
  // Array of colors
        const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

        // Function to change the background color
        function changeBackgroundColor() {
            // Get a random index from the colors array
            const randomIndex = Math.floor(Math.random() * colors.length);

            // Get the element to change the background color
            const element = document.getElementById("elementToChange");

            // Set the background color to the randomly selected color
            element.style.backgroundColor = colors[randomIndex];
        }
*/
