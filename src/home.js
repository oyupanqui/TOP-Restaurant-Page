const loadHome = () => {
    const mainImage = document.createElement("img")
    mainImage.setAttribute("src", "../dist/images/main-logo.jpeg")
    main.appendChild(mainImage)
    console.log("home")
}

export default loadHome