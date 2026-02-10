// let para1 = document.createElement('p');
// para1.innerText="Hey i am red!";
// document.querySelector('body').append(para1);

// para1.classList.add("red");

// let h3 = document.createElement('h3');
// h3.innerText="i am a blue h3!";
// document.querySelector('body').append(h3);

// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText="I'm in a div";
// para2.innerText="Me Too!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").appendChild(div);

// let para3 = document.createElement("p");
// para3.innerText = "Apna College Delta Practice";
// document.querySelector("body").append(para3);

// para3.classList.add("bold");

// let h1 = document.createElement("h1");
// h1.innerText="DOM practice"
// document.querySelector("body").append(h1);
// h1.classList.add("style");

// let btn = document.createElement("button");
// btn.innerText="Click Me";
// document.querySelector("body").append(btn);
// btn.idlist.add("btn1");

// let button=document.createElement("button");
// letinput=document.createElement("input");
// button.innerText="Clickme";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// let btns = document.querySelectorAll("button");
// for(btn of btns) {
// // btn.onclick = sayhello;
// // btn.onmouseenter = function () {
// //     console.log("you enter a button")
// // }
// // btn.addEventListener("click",sayhello);
// // btn.addr(EventListene"click",sayName);
// btn.addEventListener("dblclick", function() {
//     console.log("you double clicked me");
// });
// }

// function sayhello(){
//     alert("hello")
// }

// function sayName() {
//     alert("Apna college");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//   console.log("color updated");
// });
// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

// let div = document.querySelector(".box");
// div.addEventListener("mouseenter", function(){
//     console.log("mouse inside a div");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//   console.log("code =", event.code);
//   if(event.code == "keyU") {
//     console.log("character moves up");
//   // } else if(event.code == "keyD") {
//   //   console.log("character moves down");
//   // } else if (event.code == "keyL") {
//   //   console.log("character moves left");
//   // }  else if (event.code == "keyR") {
//   //   console.log("character moves right");
//    }
// })

// inp.addEventListener("keyup", function(){
//   console.log("key was press");
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//   event.preventDefault();
//   alert("from was register");
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");

//   console.log(user.value);
//   console.log(pass.value);
// });

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input",function(){
//   console.log(inp.value)
//    p.innerText = inp.value;

// })

// TODO APP CODE HAI

// let gameseq = [];
// let userseq = [];

// let btns = ["red", "yellow", "green", "purple"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//   if (started == false) {
//     console.log("game is started");
//     started = true;

//     levelup();
//   }
// });

// function gameflash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 250);
// }

// function userflash(btn) {
//   btn.classList.add("userflash");
//   setTimeout(function () {
//     btn.classList.remove("userflash");
//   }, 250);
// }

// function levelup() {
//   userseq = [];
//   level++;
//   h2.innerText = `level ${level}`;

//   let randIdx = Math.floor(Math.random() * 3);
//   let randcolor = btns[randIdx];
//   let randbtn = document.querySelector(`.${randcolor}`);

//   gameseq.push(randcolor);
//   console.log(gameseq);
//   gameflash(randbtn);
// }

// function cheakAns(Idx) {
//   let idx = level - 1;

//   if (userseq[Idx] === gameseq[Idx]) {
//     if (userseq.length == gameseq.length) {
//       setTimeout(levelup, 1000);
//     }
//   } else {
//     h2.innerHTML = `Game over!your score was <b>${level} </b> <br>press any key to start `;
//     document.querySelector("body").style.background = "red";
//     setTimeout(function () {
//       document.querySelector("body").style.background = "red";
//     }, 150);
//     reset();
//   }
// }

// function btnpress() {
//   let btn = this;
//   userflash(btn);

//   usercolor = btn.getAttribute("id");
//   userseq.push(usercolor);

//   cheakAns(userseq, length - 1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for (btn of allbtns) {
//   btn.addEventListener("click", btnpress);
// }

// function reset() {
//   started = false;
//   gameseq = [];
//   userseq = [];
//   level = 0;
// }

// h1 = document.querySelector("h1");

// function changecolor(color, delay, nextcolorchange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextcolorchange) nextcolorchange();
//   }, delay);
// }

// changecolor("red", 1000, () => {
//   changecolor("orange", 1000, () => {
//     changecolor("green", 1000, () => {
//       changecolor("purple", 1000, () => {
//         changecolor("brown", 1000);
//       });
//     });
//   });
// });

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure: weak connection");
//     }
//   });
// }

// savetoDb("apna college")
// .then(()=>{
//   console.log("data1 saved");
//   return savetoDb("hello world");
// })
// .then(()=>{
//   console.log("data2 saved");
//   return savetoDb("yuvraj");```javascript

function getnum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getnum();
  await getnum();
  await getnum();
  getnum();
}

demo();

h1 = document.querySelector("h1");

function changecolor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed!");
    }, delay);
  });
}

async function Demo() {
  await changecolor("red", 1000);
  await changecolor("orange", 1000);
  await changecolor("indigo", 1000);
  await changecolor("purple", 1000);
  await changecolor("blue", 1000);
}

Demo();
