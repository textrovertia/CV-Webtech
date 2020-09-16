first=localStorage.getItem("first")
console.log(first)

middle=localStorage.getItem("middle")
console.log(middle)

document.getElementById("name2").innerText=`${first} ${middle}`