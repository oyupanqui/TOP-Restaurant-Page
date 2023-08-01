const createHome = () => {
    const body = document.getElementById("content")

    const header = document.createElement("div")
    header.setAttribute("class", "header")
    header.textContent = 'Welcome to my Restaurant!'
    body.appendChild(header)

    const main = document.createElement("div")
    main.setAttribute("class", "main")

    const image = document.createElement("img")
    image.src = 'images/main-logo.jpeg'
    image.height = '300'

    main.appendChild(image)
    body.appendChild(main)

    const footer = document.createElement("div")
    footer.setAttribute("class", "footer")
    const ty = document.createElement("p")
    ty.textContent = "Thanks for visiting!"
    footer.appendChild(ty)
    body.appendChild(footer)
}

export default createHome