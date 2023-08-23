const loadContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact")
    main.appendChild(contact)
    
    return contact
}

export default loadContact