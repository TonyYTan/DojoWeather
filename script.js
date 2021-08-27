function dispear(element) {
    let cookie = element.parentNode.parentNode;
    console.log(cookie)
    cookie.remove();
}

function alertMess() {
    alert("Loading weather report...");
}


function unitChange() {
    let currenthigh = document.querySelectorAll(".highest")
    let highestNum = document.querySelectorAll(".highestNum")
    let currentlow = document.querySelectorAll(".lowest")
    let lowestNum = document.querySelectorAll(".lowestNum")
    var selectValue = document.getElementById("degreeUnit").value
    if (selectValue =="F") {
        for (let i = 0; i < currenthigh.length; i++) {
            // console.log("F")
            highestNum[i].innerText = Math.round(highestNum[i].innerText * (9/5)+32)
            currenthigh[i].innerText = highestNum[i].innerText + "°F";
            lowestNum[i].innerText = Math.round(lowestNum[i].innerText * (9/5)+32)
            currentlow[i].innerText = lowestNum[i].innerText * (9/5)+32 + "°F";
        }
    }else if (selectValue =="C"){
        for (let k = 0; k < currenthigh.length; k++){
            console.log(highestNum[k])
            highestNum[k].innerText = Math.round((highestNum[k].innerText-32)*5/9)
            currenthigh[k].innerText = highestNum[k].innerText +"°C";
            lowestNum[k].innerText = Math.round((lowestNum[k].innerText-32)*5/9)
            currentlow[k].innerText = lowestNum[k].innerText +"°C";
        }
    }
}