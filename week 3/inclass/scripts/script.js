let cBox = document.getElementById("colorBox");
let colorBtn = document.getElementById("changeColor")
let imgBox = document.getElementById("catImage")
let imageBtn = document.getElementById("toggleImage")



let assignRandomColor = function()
{
    let rComp = 255 * Math.random()
    let gComp = 255 * Math.random()
    let bComp = 255 * Math.random()
    cBox.style.backgroundColor = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")"
}

const toggleCatImage = () =>

    {
        console.log(imgBox.src)
        if(imgBox.src.includes("cat1"))
        {
            imgBox.src = "assets/cat2.jpg"
        }
        else
        {
            imgBox.src = "assets/cat1.jpg"
        }
    }


imageBtn.addEventListener("click", toggleCatImage)
colorBtn.addEventListener("click", assignRandomColor)