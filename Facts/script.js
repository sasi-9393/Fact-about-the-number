let userInput = document.getElementById("userInput");
let factPara = document.getElementById("fact");
let loading = document.getElementById("spinner");

function displayResult(jsonData) {
    factPara.textContent = jsonData.fact;
    loading.classList.toggle("d-none");
}

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let number = userInput.value;

        let url = "https://apis.ccbp.in/numbers-fact?number=" + number;
        let options = {
            method: "GET",
        }

        fetch(url, options)
            .then(function(response) {
                loading.classList.toggle("d-none")
                return response.json();

            })
            .then(function(jsonData) {
                displayResult(jsonData);
            })

    }
})