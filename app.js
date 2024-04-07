let random = Math.ceil(Math.random() * 6);

document.write("<div class='main'>")
if (random === 1) {
    document.write("<img src='1.PNG'>")
}

else if (random === 2) {
    document.write("<img src='2.PNG'>")
}
else if (random === 3) {
    document.write("<img src='3.PNG'>")
}
else if (random === 4) {
    document.write("<img src='4.PNG'>")
}
else if (random === 5) {
    document.write("<img src='5.PNG'>")
}
else if (random === 6) {
    document.write("<img src='6.PNG'>")
}
document.write("</div>")
