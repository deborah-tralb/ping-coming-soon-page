//Check if the e-mail entered is valid

document.getElementById("submitButton").addEventListener("click", function validateEmail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (document.getElementById("placeholder-text").value.match(validRegex)) {

        if (confirm('Successful Message')) {
            window.location.reload();
        }

    } else {

        document.getElementById("validator").style.display = "block";
        document.getElementById("placeholder-text").classList.add("error");

    }
});