// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text1: "gandhinagar", isCorrect: false },
        { text2: "Surat", isCorrect: false },
        { text3: "Delhi", isCorrect: true },
        { text4: "mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text1: "Lampang", isCorrect: false, isSelected: false },
        { text2: "phuket", isCorrect: false },
        { text3: "Ayutthaya", isCorrect: false },
        { text4: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text1: "surat", isCorrect: false },
        { text2: "vadodara", isCorrect: false },
        { text3: "gandhinagar", isCorrect: true },
        { text4: "rajkot", isCorrect: false }
    ]

}
]
 const next = document.querySelector(".next")
const option = document.querySelector(".option-container")
const op1 = document.getElementById("op1")
const op2 = document.getElementById("op2")
const op3 = document.getElementById("op3")
const op4 = document.getElementById("op4")
const question = document.getElementById("question")
const right = document.querySelector(".true")
const wrong = document.querySelector(".False")
const body = document.querySelector("body")
// console.log(option);
const options = document.querySelectorAll(".option")
console.log(options);

let i = -1;
next.addEventListener("click",()=>{
    i++
    if(i == Questions.length){
        confirm("you have finished the quiz");
        next.style.display ="none";
        document.querySelector(".panel").style.display = "none"
        // for(let i=0;i<options.length;i++){
        //     options[i].style.display = "none"
        // }
        let h3 = document.createElement("h1")
        h3.innerText = "Quizz Completed"
        body.append(h3)
    }
    next.innerText ="next";
    option.classList.add("show")
    question.classList.add("show")
    question.innerText = Questions[i].q
    op1.innerText = Questions[i].a[0].text1
    op2.innerText = Questions[i].a[1].text2
    op3.innerText = Questions[i].a[2].text3
    op4.innerText = Questions[i].a[3].text4
    right.classList.remove("show")

    for (let j = 0; j < options.length; j++) {
       options[j].addEventListener("click",()=>{
        if (Questions[i].a[j].isCorrect) {
            // options[j].style.color = "green"
            right.classList.add("show");
            wrong.classList.remove("show")
            right.style.color="green";
           
        }
        else{
            wrong.classList.add("show")
            right.classList.remove("show");
            wrong.style.color="red";


            // options[j].style.color ="red";
            setTimeout(() => {
                wrong.classList.remove("show")
                
            },1000);

        }
       })
        
    }
}
)














        // options[j].addEventListener("click",()=>{
        //    if (Questions[i].ans[j].isCorrect ) {
        //     right.classList.add("show")
        //     right.style.color="green";
        //    }
        //    else{
        //     wrong.classList.add("show")
        //     wrong.style.color="red "
        //     right.classList.remove("show")
        //     setTimeout(() => {
        //         wrong.classList.remove("show")
        //     },1000);
        //    }
//         })
//     }
// });


// const option = document.querySelectorAll(".option")
// const question = document.getElementById("question");
// var start = true;

// function repeat(id) {
// var result = document.getElementsByClassName("result");
// result[0].innerText = "";

// question.innerText = Questions[id].q;
// const op1 = document.getElementById('op1');
// const op2 = document.getElementById('op2');
// const op3 = document.getElementById('op3');
// const op4 = document.getElementById('op4');

// op1.innerText = Questions[id].a[0].text;
// op2.innerText = Questions[id].a[1].text;
// op3.innerText = Questions[id].a[2].text;
// op4.innerText = Questions[id].a[3].text;

// op1.value = Questions[id].a[0].isCorrect;
// op2.value = Questions[id].a[1].isCorrect;
// op3.value = Questions[id].a[2].isCorrect;
// op4.value = Questions[id].a[3].isCorrect;

// var selected = "";

// // Show selection for op1
//  op1.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightgoldenrodyellow";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op1.value;
//  })

// // Show selection for op2
// op2.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightgoldenrodyellow";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op2.value;
// })

// // Show selection for op3
// op3.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightgoldenrodyellow";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op3.value;
// })

// // // Show selection for op4
//  op4.addEventListener("click", () => {
//      op1.style.backgroundColor = "lightskyblue";
//      op2.style.backgroundColor = "lightskyblue";
//      op3.style.backgroundColor = "lightskyblue";
//      op4.style.backgroundColor = "lightgoldenrodyellow";
//      selected = op4.value;
//  })

//  // Grabbing the evaluate button
//  const evaluate = document.getElementsByClassName("evaluate");

//  //Evaluate method
//  evaluate[0].addEventListener("click", () => {
//      if (selected == "true") {
//          result[0].innerHTML = "True";
//          result[0].style.color = "green";
//      } else {
//          result[0].innerHTML = "False";
//          result[0].style.color = "red";
//      }
//  })
//  }

//  if (start) {
//  repeat("0");
//  }

//  // Next button and method
//  const next = document.getElementsByClassName('next')[0];
//  var id = 0;
//  next.addEventListener("click", () => {

//     for (let b = 0; b < option.length; b++) {
//         option[b].style.background = ""
        
//     }
//  start = false;

//  if (id < 2) {
//      id++;
//      repeat(id);
//      style.backgroundColor ="none"
//     //  console.log(id);
//  }

