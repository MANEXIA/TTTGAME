"user-strict";
 const winningOutcomes = [
   //HORIZONTAL
    [0,1,2],
    [3,4,5],
    [6,7,8],
   //VERTICAL
    [0,3,6],
    [1,4,7],
    [2,5,8],

   //SLANT AHSHAHSHA
    [0,4,8],
    [2,4,6]
  ]

const p1 = []
const p2 = []
let p1score = document.getElementById('p1score')
let p2score = document.getElementById('p2score')

const bx = document.querySelectorAll(".box")
let outc = document.getElementById('outcome')
let stats = document.getElementById('status')

let crntplayer = "Xplayer"

function resetArrNbox(){
   p1.length = 0;
   p2.length = 0;
   bx.forEach((elbox) => {
      elbox.style.backgroundImage = null;
   })
}

//EVENT USER CLICK
bx.forEach((v, i, arr) => {
      const box = v;
      box.addEventListener("click", (e) => {
         const valbox = e.target.dataset.iubox
         //DO THINGS IN X SYITTTT
         if(box.style.backgroundImage == '' && crntplayer == "Xplayer"){
          
            box.style.backgroundImage = "url('img/x.png')";
            crntplayer = "Oplayer" //PLAYER STATE
            p1.push(Number(valbox)) //PUSH INPUTS

            //PROMT OUTCOME
            const p1result = winningOutcomes.some((winningOutcome) => {
               return winningOutcome.every((el) => {
                  //return p1.includes(el)
                  return p1.includes(el)
               })
            })

              
            if(p1result){
               outc.innerHTML = "PLAYER X WIN!!"
               p1score.innerHTML = Number(p1score.innerHTML) + 1;
               resetArrNbox()
            
            }else if(p1.length + p2.length == 9){
               outc.innerHTML = "DRAW!!"
               resetArrNbox()
            }

            document.getElementById('status').innerHTML = "Player O" 

         //DO THINGS IN O SYITTTT
         }else if(box.style.backgroundImage == '' && crntplayer == "Oplayer"){

            box.style.backgroundImage = "url('img/OOOO.png')";
            crntplayer = "Xplayer"  //PLAYER STATE
            p2.push(Number(valbox)) //PUSH INPUTS

            //PROMT OUTCOME
            const p2result = winningOutcomes.some((winningOutcome) => {
               return winningOutcome.every((el) => {
                  return p2.includes(el);
               })
            })

            // console.log(p2result)
            if(p2result){
               outc.innerHTML = "PLAYER O WIN!!"           
               p2score.innerHTML = Number(p2score.innerHTML) + 1;
               resetArrNbox()
         
            }else if(p1.length + p2.length == 9){
               outc.innerHTML = "DRAW!!"
               resetArrNbox()
            }
               document.getElementById('status').innerHTML = "Player X" 
         }
      })

}) 

document.getElementById('resetbtn').onclick = () =>{
   outc.innerHTML = ""
   p1score.innerHTML = ""
   p2score.innerHTML = ""
   resetArrNbox()
}

