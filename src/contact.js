const loadContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact")
    main.appendChild(contact)

    const contactPhrase = document.createElement("p")
    contactPhrase.textContent = "Contact coming soon!"
    contact.appendChild(contactPhrase)
    console.log('contact')
}

export default loadContact