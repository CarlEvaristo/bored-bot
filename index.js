const textContainerEl = document.getElementById("txt-container")
const newActivityButton = document.getElementById("new-activity")

newActivityButton.addEventListener("click", (event) => {
    event.target.disabled = true
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            textContainerEl.textContent = data.activity
            event.target.disabled = false
        })

})
