const formElement=document.querySelector("form")
const window2=window.location
// Shows all user input and cancels form data sending
formElement.addEventListener("submit", e => {
    e.preventDefault();

    const firstname = e.target.elements.firstname.value;
    localStorage.setItem("first", firstname);

    const middlename=e.target.elements.middlename.value;
    localStorage.setItem("middle", middlename);

    const lastname=e.target.elements.last.value;
    localStorage.setItem("last", lastname )
    
    const address=e.target.elements.address.value;
    localStorage.setItem("address", address);

    const phone=e.target.elements.phone.value;
    localStorage.setItem("phone", phone)

    const email=e.target.elements.email.value;
    localStorage.setItem("email", email)
    


   

});
