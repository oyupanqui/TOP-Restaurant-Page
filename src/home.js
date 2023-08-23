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
}

export default loadHome