const scene = new Scene();

function divideEqualy(n, max = 100) {
    return ((max / n).toString()+"%").repeat(n)
}

console.log(divideEqualy(3))

function page1() { // swap page wrapper
    scene.swapPage(page1_content)
}

function page1_content() {
    scene.setGrid("10% "+divideEqualy(1, 80)+" 10%", "10% "+divideEqualy(1, 90) )

    scene.addButton(3, 1, "Next").on("click", page2)

    scene.addHeader(2, 2, "Page 1", "h2").parent().css("margin-top", "50%")
}

function page2() {
    scene.swapPage(page2_content)
}

function page2_content() {
    scene.setGrid("10% "+divideEqualy(1, 80)+" 10%", "10% "+divideEqualy(1, 90) )

    scene.addButton(1, 1, "Previous").on("click", page1)
    scene.addButton(3, 1, "Next").on("click", page3)

    scene.addHeader(2, 2, "Page 2", "h2").parent().css("margin-top", "50%")
}

function page3() {
    scene.swapPage(page3_content)
}

function page3_content() {
    scene.setGrid("10% "+divideEqualy(1, 80)+" 10%", "10% "+divideEqualy(1, 90) )

    scene.addButton(1, 1, "Previous").on("click", page2)
    scene.addButton(3, 1, "Next").on("click", page4)

    scene.addHeader(2, 2, "Page 3", "h2").parent().css("margin-top", "50%")
}

function page4() { 
    scene.swapPage(page4_content)
}

function page4_content() {
    scene.setGrid("10% "+divideEqualy(1, 80)+" 10%", "10% "+divideEqualy(1, 90) )

    scene.addButton(1, 1, "Previous").on("click", page3)

    scene.addHeader(2, 2, "Page 4", "h2").parent().css("margin-top", "50%")
}


function mainPage() {
    scene.setGrid(divideEqualy(1), divideEqualy(5));
    
    scene.addSign(1, 4).append(
        $("<div>")
            .css({
                "display": "flex",
                "gap": "1vw",
            })
            .append($("<button>Page 1</button>").on("click", page1))
            .append($("<button>Page 2</button>").on("click", page2))
            .append($("<button>Page 3</button>").on("click", page3))
            .append($("<button>Page 4</button>").on("click", page4))
    )
    scene.addSign(1, 3).append(
        $("<h1>")
            .css({
                "font-size": "4em",
            })
            .html("Theater Fun Facts")
    )
    
}

mainPage()