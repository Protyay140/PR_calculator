var click_button = document.querySelectorAll("button");
var show = document.querySelector(".appear");
var string = "";

for (let i = 0; i < click_button.length; i++) {

    click_button[i].addEventListener("click", function (event) {
        if (event.target.innerHTML == '=') {
            string = eval(string);
            show.innerHTML = string;
        }

        else if (event.target.innerHTML == 'AC') {
            string = "";
            show.innerHTML = string;
        }
        else if (event.target.innerHTML == 'BS') {
            string = string.substring(0, string.length - 1);;
            show.value = string;
        }
        else {
            string += event.target.innerHTML;
            show.innerHTML = string;
        }
    });
}

// var show = document.querySelector(".appear");
// console.log(show.value);

