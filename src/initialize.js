function createHeader() {
    const header = document.createElement("header")
    header.setAttribute("class", "header")

    const homeButton = document.createElement("button")
    homeButton.setAttribute("class", "btn-nav home")
    homeButton.textContent = "Home"
    homeButton.addEventListener("click", (e) => {
        //loadHome()

    })

    const menuButton = document.createElement("button")
    menuButton.setAttribute("class", "btn-nav menu")
    menuButton.textContent = "Menu"
    menuButton.addEventListener("click", (e) => {
        //loadMenu()
    })

    const contactButton = document.createElement("button")
    contactButton.setAttribute("class", "btn-nav contact")
    contactButton.textContent = "Contact"
    contactButton.addEventListener("click", (e) => {
        //loadMenu()
    })

    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactButton)

    return header
}

function createMain() {

}

function createFooter() {
    
}

function initialize() {
    const content = document.getElementById("content")
    content.appendChild(createHeader())
}

export default initialize