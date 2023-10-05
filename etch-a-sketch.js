drawPixels(16);

function draw (){
let squares = document.querySelectorAll(".square");
squares.forEach(function (sqr) {    
    sqr.addEventListener("mouseover", function(sqr) {
        let id = sqr.target.id;
        document.querySelector(`#${id}`).style.backgroundColor = "grey";
    });
});
}

function drawPixels(pixels) {
    let widthPercent = ((1/pixels)*100);
    let heightPercent = ((1 / pixels)*75); 
    console.log(heightPercent);
for (let x = 0; x< pixels; x++ )
{
    let row = document.createElement("div");
    row.className = "row";
    row.id = `row${x}`
    for (let y = 0; y< pixels; y++)
    {
        let square = document.createElement("div");
        square.className = "square";
        square.id = `row${x}square${y}`;
        square.style.width = `${widthPercent}%`;
        square.style.height = `${heightPercent}vh`;
        row.appendChild(square);
    }
    document.querySelector("#draw").appendChild(row);
}  
draw();  
}




document.querySelector(".btn").addEventListener("click", function(){
   let pixels = prompt("how many pixels?");
    if (pixels > 100)
    {
        pixels = 100;
    }
    console.log(pixels);
    let squares = document.querySelectorAll(".square");
    squares.forEach(function(sqr){
        sqr.remove();
        console.log("squares removed");
    })
    drawPixels(pixels);
})
