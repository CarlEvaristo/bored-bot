const textContainerEl = document.getElementById("txt-container")
const newActivityButton = document.getElementById("new-activity")
const container = document.querySelector(".container")

newActivityButton.addEventListener("click", (event) => {
    event.target.disabled = true
    textContainerEl.classList.remove("text-animation")
    container.classList.remove("container-animation")
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            textContainerEl.textContent = data.activity
            event.target.disabled = false
            setTimeout(function() {
              textContainerEl.classList.add("text-animation")}, 1000)
            container.classList.add("container-animation")
        })

})
