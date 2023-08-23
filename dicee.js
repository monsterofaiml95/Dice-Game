var ran1=Math.random();
ran1=(ran1*6)+1;
ran1=Math.floor(ran1);

    document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+ran1+".png");
    var ran2=Math.random();
ran2=(ran2*6)+1;
ran2=Math.floor(ran2);
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+ran2+".png");

if (ran1>ran2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 win";
}else if(ran1 === ran2){
    document.querySelector("h1").innerHTML="Draw!";
} 
else {
    document.querySelector("h1").innerHTML="Player 2 win 🚩";
}