let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(element => {
    element.addEventListener("click", function (e) {
        console.log(e.target.textContent);

        if (e.target.textContent === "C") {
            input.innerText = "";
        } else if (e.target.textContent === "<") {
            input.innerText = input.innerText.slice(0, -1);
        } else if (e.target.textContent === "=") {
            // Evaluate the expression and update the input's content
            input.innerText = eval(input.innerText);
        } else {
            input.innerText += e.target.textContent;
        }
        input.scrollLeft= input.scrollWidth;
    })
});

