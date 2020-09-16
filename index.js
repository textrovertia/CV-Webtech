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
    
    const regex=/^[a-zA-Z ]*$/; 
    const regex1=/^[0-9 ()+-]+$/
        if (!regex.test(e.target.elements.firstname.value))  {
            alert("Your first name is not entered correctly")
            
        }if(!regex.test(e.target.elements.middlename.value))  {
            alert("Your middle name is not entered correctly")
            
        }if(!regex.test(e.target.elements.last.value))  {
            alert("Your last name is not entered correctly")
        }if(!regex1.test(e.target.elements.phone.value)){
            alert("Enter a valid phone number")
            
        }else{
            location.href="cv.html"
        }

        
});
