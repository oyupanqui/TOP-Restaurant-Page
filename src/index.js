const body = document.getElementById("content")

function createMainPage() {
    const header = document.createElement("header")
    const main = document.createElement("div")
    const footer = document.createElement("footer")

    header.setAttribute("class", "header")
    main.setAttribute("class", "main")
    footer.setAttribute("class", "footer")

    body.appendChild(header)
    body.appendChild(main)
    body.appendChild(footer)
}

createMainPage()