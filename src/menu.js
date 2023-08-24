function menuItem (name, url, description) {
    this.name = name
    this.url = url
    this.description = description
}

function addMenuItem (menuItem) {
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("item")

    const menuTitle = document.createElement("div")
    menuTitle.classList.add("title")
    menuTitle.textContent = menuItem.name

    const menuImg = document.createElement("img")
    menuImg.classList.add("delicacy")
    menuImg.setAttribute("src", menuItem.url)

    const menuDesc = document.createElement("div")
    menuDesc.classList.add("description")
    menuDesc.textContent = menuItem.description

    menuDiv.appendChild(menuTitle)
    menuDiv.appendChild(menuImg)
    menuDiv.appendChild(menuDesc)
    document.getElementsByClassName("menu")[0].appendChild(menuDiv)
}

const ceviche = new menuItem("Ceviche", "https://www.allrecipes.com/thmb/HO3Xp2-olPga0LdM573LPCi6r9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1984651-ceviche-peruano-zamfoll-4x3-1-f497eb29e0bb4904b3cc3e6019e19999.jpg", "A delicious citrus-infused raw seafood dish!")
const lomo = new menuItem("Lomo saltado", "https://www.allrecipes.com/thmb/TtnlxyVOZ9lWqc30vdkbMbjx8WE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4459131-45fa6a5ad961445a88b4eea8dd9c4cb1.jpg", "A popular blend of Asian and Latin flavors!")
const pollo = new menuItem("Pollo a la brasa", "https://www.allrecipes.com/thmb/_ynmSQFIFbnfFa_y41EynZKRgTI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6787607-6fa0fb49100f4f6a99af78705386b921.jpg", "The best roast chicken you'll ever taste!")
const papa = new menuItem("Pollo a la huancaina", "https://www.allrecipes.com/thmb/eoG9Q7l4Tm5fW49LSvJ2bE3Wieo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2282284-1f2369d6c3d94555ac453af58be416f8.jpg", "Gorgeus sliced potatoes with spicy cheese sauce!")
const causa = new menuItem("Causa", "https://www.allrecipes.com/thmb/W_uXJqspxMQqTo4HoBKfEFVwqkM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6691073-peruvian-potato-chicken-salad-causa-rellena-Chef-John-4x3-1-515ba3bdb3014269a8ed8824f4f097e5.jpg", "An elegant potato dish for a hot day!")
const aji = new menuItem("Aji de gallina", "https://www.allrecipes.com/thmb/AIXmA3Pl0_y8dX9Wdht9ZvXfQVI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1023699-6e5ce2f485134f029b8927693025eff0.jpg", "A superb chicken stew in a spicy cheese sauce!")

const loadMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu")
    main.appendChild(menu)
    const dishList = [ceviche, lomo, pollo, papa, causa, aji].forEach(dish => {addMenuItem(dish)})

    return menu
}

export default loadMenu