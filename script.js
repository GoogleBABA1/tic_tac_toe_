console.log("welcome to tic tac toe")
let music = new Audio("music.mp3")
let audioTrun  = new Audio("turn.mp3")
let gameoveraudio = new Audio("gameover.wav")

let turn = "X"
let gameover = false ; 
const changeTurn=( )=>{
    return turn =="X"?"0":"X"
}

const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0 ,1 ,2 , 5 , 5, 0]
        [3,4,5 , 5 , 15 ,0]
        [6,7,8 , 5 ,25 ,0]
        [0,3,6 , -5 ,15 ,90]
        [1,4,7 , 5 ,15 , 90]
        [2,5,8 , 15 ,15 ,90]
        [0,4,8 , 5 ,15 , 45]
        [2,4,6 , 5 , 15 , 135]
    ]
    win.forEach(e=>{
       if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&& ( boxtext[e[1]].innerText === boxtext[e[2]].innerText)&& (boxtext[e[0]].innerText !=="")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
        gameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
        document.querySelector(".line").style.width = "30vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
       }
    

}
    )
}


// Game logic 
music.play() 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtexts = element.querySelector('.boxtext');
    element.addEventListener('click' , (e)=>{
        if(e.innerText==' '){
            e.innerText = turn ;
           turn =  changeTurn();
            audioTrun.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "trun for " + turn ;
            }
           
        }
    })
})


resizeTo.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameover = false;
    document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText = "trun for " + turn ;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    

})
