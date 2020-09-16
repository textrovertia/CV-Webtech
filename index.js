const formElement=document.querySelector("form")
const window2=window.location
// Shows all user input and cancels form data sending
formElement.addEventListener("submit", e => {
    e.preventDefault();

    const firstname = e.target.elements.firstname.value;
    localStorage.setItem("first", firstname);

    const middlename=e.target.elements.middlename.value;
    localStorage.setItem("middle", middlename);

    const lastname=e.target.elements.lastname
    


   

});
