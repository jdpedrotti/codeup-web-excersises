let button1 = document.getElementById('button1');

let buttonClickFunction = function(){
    document.querySelector('h1').innerText = "JavaScript is Cool";
}
button1.onclick = buttonClickFunction;
//      ^ change main header



let button2 = document.getElementById('button2');

let changeSubHeaderColor = function (){
    document.querySelector('h2').style.color = 'blue';
}
button2.onclick = changeSubHeaderColor;
//      ^ change subheader color to blue



let button3 = document.getElementById('button3');

let alternateItemColor = function (){
    let listItems = document.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
        var dbId = listItems[i].getAttribute("data-dbid");
        console.log(dbId);
        if (i % 2 === 0){
            listItems[i].style.color = 'grey';
        }
    }
}
button3.onclick = alternateItemColor;
//      ^alternate list item color



let button4 = document.getElementById('button4');

let changeItem1Color = function (){
    let listItems = document.getElementsByTagName('li');

    listItems = Array.from(listItems);
    listItems.forEach(function(listItem){
    if (listItem.dataset.dbid === "1") {
        listItem.style.color = "blue";
        }
    })
}
button4.onclick = changeItem1Color;
//      ^change item1 color to blue



let button5 = document.getElementById('button5');

let changeParagraph = function(){
    document.querySelector('p').innerText = "Mission Accomplished!";
}
button5.onclick = changeParagraph;
//      ^change paragraph from lorem
