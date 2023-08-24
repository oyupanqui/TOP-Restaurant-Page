import loadMenu from './menu'

const loadHome = () => {
    const home = document.createElement("div");
    home.classList.add("home")
    main.appendChild(home)
    
    const mainImage = document.createElement("img")
    mainImage.setAttribute("src", "../dist/images/main-logo.jpeg")
    home.appendChild(mainImage)

    const mainPhrase = document.createElement("p")
    mainPhrase.textContent = "We offer the best traditional food in town!"
    home.appendChild(mainPhrase)
    
    const orderButton = document.createElement("button")
    orderButton.classList.add("order-btn")
    orderButton.textContent = "Order now!"
    orderButton.addEventListener("click", (e) => {
        home.querySelectorAll('*').forEach(n => n.remove())
        loadMenu()
    })    

    home.appendChild(orderButton)

    return home
}

export default loadHome