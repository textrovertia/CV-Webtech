first=localStorage.getItem("first");

middle=localStorage.getItem("middle");

last=localStorage.getItem("last");

address=localStorage.getItem("address");

phone=localStorage.getItem("phone");

email=localStorage.getItem("email");

document.getElementById("name2").innerText=`${first} ${middle} ${last}`
document.getElementById("address2").innerText=`${address}`
document.getElementById("phone2").innerText=`${phone}`
document.getElementById("email2").innerText=`${email}`

