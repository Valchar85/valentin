document.getElementById("button1").addEventListener("click", function()
{
    let messageElement = document.getElementById("message");
    if (messageElement.innerHTML == "") {
        messageElement.innerHTML = "Привет";
    } else {
        messageElement.innerHTML = "";
    }
});

document.getElementById("button2").addEventListener("click", function()
{
    let messageElement = document.getElementById("message");
    if (messageElement.innerHTML == "") {
        messageElement.innerHTML = "Пока";
    } else {
        messageElement.innerHTML = "";
    }
});
