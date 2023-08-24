const loadContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact")
    main.appendChild(contact)
    
    const data = document.createElement("p")
    data.textContent = "We attend every day from 11:00 until 20:00! Feel free to visit us!"
    contact.appendChild(data)

    const location = document.createElement("iframe")
    location.classList.add("location")
    location.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d975.2180812697343!2d-77.02963251581728!3d-12.120887128839925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1692843111715!5m2!1ses!2spe")
    contact.appendChild(location)
    
    const phone = document.createElement("p")
    phone.textContent = "📞 (+51 987 654 321)"
    contact.appendChild(phone)

    return contact
}

export default loadContact