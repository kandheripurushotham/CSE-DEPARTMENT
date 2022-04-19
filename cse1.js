var i = 0;
var images = [];
var time = 5000;

/* images link are storing with the index number  */
images[0] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/portfolio/portfolio-details-3.jpg";
images[1] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/portfolio/portfolio-1.jpg";
images[2] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/portfolio/portfolio-2.jpg";
images[3] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/portfolio/portfolio-3.jpg";
images[4] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/service-details-1.jpg";
images[5] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/about.jpg";
images[6] = "file:///home/arjun/ALL%20WEB/Moderna/assets/img/portfolio/portfolio-3.jpg";


/*by using this * PARA * variable we can print the index values automatically according to images*/
let para = document.getElementById("counter");

/* this variables for holding id's of each number which is act like a button */

let ones = document.getElementById("first");
let seconds = document.getElementById("second");
let thirds = document.getElementById("third");
let fourths = document.getElementById("fourth");
let fifths = document.getElementById("fifth");
let sixths = document.getElementById("sixth");

/* this is the function which is used to to print the values continue  */


function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
        para.textContent = i;

    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);

}
window.onload = changeImg;

/* this is for the first button  */

function First() {
    document.slide.src = images[0];
    i = 1;
    para.innerText = i;
    para.style.borderRadius = "0%";
    para.style.background = "yellow";
    ones.style.borderRadius = "0%";
    ones.style.background = "yellow";
    ones.style.color = "black";
}

/* this is for the second button  */

function Second() {
    document.slide.src = images[1];
    i = 2;
    para.innerText = i;
    para.style.borderRadius = "50%";
    para.style.background = "deeppink";

}
/* this is for the third button  */

function Third() {
    document.slide.src = images[2];
    i = 3;
    para.innerText = i;
    para.style.borderRadius = "0%";
    para.style.background = "skyblue";
    thirds.style.borderRadius = "0%";


}

/* this is for the fourth button  */

var Fourth = () => {
    document.slide.src = images[3];
    i = 4;
    para.innerText = i;
    para.style.borderRadius = "50%";
    para.style.background = "orange";


}

/* this is for the fifth button  */

var Fifth = () => {
    document.slide.src = images[4];
    i = 5;
    para.innerText = i;
    para.style.borderRadius = "0%";
    para.style.background = "springgreen";
    fifths.style.borderRadius = "0%";

}
var Sixth = () => {
    document.slide.src = images[5];
    i = 6;
    para.innerText = i;
    i = 0;
    para.style.borderRadius = "50%";
    para.style.background = "brown";


}

/* this is for the sixth button  */


/*  var Left = () => {
     var a;
     if (a == true) {
         i--;
     } else {
         i++;
     }
 }
 var Right = () => {
     var b;
     if (b == true) {
         i++;

     } else {
         i--;
     }
 } */
/* function Left() {
    var a = true;
    if (a == true) {
        if (document.slide.src == images[0]) {
            para.innerText = i;
            i++;
            document.slide.src = images[0];
        } else {
            document.slide.src = images[i];
        }
        document.slide.src = images[i];
        --i;
        para.innerText = i;
        i = 0;

    } else {
        i = 0;
    }
}

function Right() {
    if (i < images.length - 1) {
        i++;
        para.innerText = i;
        document.slide.src = images[i];
    } else {
        i = 0;
    }
} */



/* this is for counter inn the facts section  */
let valueDisplay = document.querySelectorAll(".counts");
let timeInterval = 5000;
valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(timeInterval / endValue);
    var control = setInterval(function() { /*   let counter = setInterval(function(){}-------this is one more method*/
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(control);
        }
    }, duration)
});