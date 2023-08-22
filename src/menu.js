const loadMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu")
    main.appendChild(menu)

    const menuPhrase = document.createElement("p")
    menuPhrase.textContent = "Menu coming soon!"
    menu.appendChild(menuPhrase)
    console.log('menu')
}

export default loadMenu