const scene = new Scene();

function divideEqualy(n, max = 100) {
    return ((max / n).toFixed(0).toString()+"%").repeat(n)
}

console.log(divideEqualy(3))

function page1() { // swap page wrapper
    scene.swapPage(page1_content)
}

function page1_content() {
    scene.setGrid("10% "+divideEqualy(2, 80)+" 10%", "10% "+divideEqualy(3, 90) )

    scene.addButton(4, 1, "Next").on("click", page2)
    scene.addButton("2/4", 1, "Main").on("click", swapMainPage)

    scene.addSign(2, "3/5").append(
        $("<p></p>").html(
            `
            These were counterweighted traps which could be used to allow actors playing supernatural beings, 
            such as ghosts in melodrama and demons and fairies in pantomime, to appear suddenly.
            The hole through which the actor appeared consisted of triangular flaps, hinged with leather, which opened upwards, resembling a star.
            The actor stood on a small platform below the trap and counterweights of up to 200 kg, 
            attached to the platform, were raised by stage hands using ropes, 
            at which point the platform moved up rapidly and the actor 'flew' through the trap. 
            The trap closed immediately with no visible opening, giving the illusion that the actor had appeared through the solid stage floor. 
            `
        )
    )
    scene.addHeader(2, 2, "Star Trap", "h2").parent()
    scene.addSign(3, "2/5").append(
        $(`<img src="../Assets/StarTrap.jpg"></img>`)
    )
}

function page2() {
    scene.swapPage(page2_content)
}

function page2_content() {
    scene.setGrid("10% "+divideEqualy(2, 80)+" 10%", "10% "+divideEqualy(3, 90) )

    scene.addButton(1, 1, "Previous").on("click", page1)
    scene.addButton("2/4", 1, "Main").on("click", swapMainPage)
    scene.addButton(4, 1, "Next").on("click", page3)

    scene.addSign(2, "3/5").append(
        $("<p></p>").html(
            `
            Also known as a Sunroof trap. 
            In the example below, it’s combined with a standard lift. 
            This is a popular combination for many large scale shows, including musicals. 
            The London production of Billy Elliot used a small drop and slide trap with lift stage right for the table, 
            and a hugely complex lift incorporating a house framework which rises out of the floor, with a 4 part lid covering it. 
            There’s an video showing the lift in operation during a test on the Billy Elliot page. 
            `
        )
    )
    scene.addHeader(2, 2, "Drop & Slide Trap Door", "h2").parent()
    scene.addSign(3, "2/5").append(
        $(`<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/FKR78ZchDbE?si=mrJ93J_aNpw0WeDF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
    )
}

function page3() {
    scene.swapPage(page3_content)
}

function page3_content() {
    scene.setGrid("10% "+divideEqualy(2, 80)+" 10%", "10% "+divideEqualy(3, 90) )

    scene.addButton(1, 1, "Previous").on("click", page2)
    scene.addButton("2/4", 1, "Main").on("click", swapMainPage)

    scene.addSign("1/3", "3/5").append(
        $(`<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/0OQTGKWdhRc?si=2rTZTW8kgpwYWOit" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
    )
    scene.addHeader(2, 2, "Corsican Trap", "h2").parent()
    scene.addSign(3, "2/5").append(
        $("<p></p>").html(
            `
            These traps used a counterweighted platform and slatted shutters, sometimes made of scruto, which allowed an actor to rise through the stage floor while at the same time moving across it.
            It was developed for the play The Corsican Brothers by Dion Boucicault, in which the ghost of a murdered man rose slowly across the stage and through the stage floor to haunt his twin brother. 
            It was played at the Princess's Theatre London in 1852.[18] It consisted of a bristle trap set between 2 long sliders positioned across the stage, the first drawing the trap across the stage and the second closing behind.
            The actor stood on a small truck which ran along an inclined track below the stage which started 6 feet below the stage and rose to stage level.
            The only working Corsican trap in the world now is at the Gaiety Theatre in the Isle of Man, where they also have a model demonstrating how it works.
            `
        )
    )
}

function page4() { 
    scene.swapPage(page4_content)
}

function swapMainPage() {scene.swapPage(mainPage)}
function mainPage() {
    scene.setGrid(divideEqualy(1), divideEqualy(5));
    
    scene.addSign(1, 4).append(
        $("<div>")
            .css({
                "display": "flex",
                "gap": "1vw",
            })
            .append($("<button>Start Trap</button>").on("click", page1))
            .append($("<button>Drop & Slide Trap Door</button>").on("click", page2))
            .append($("<button>Corsican Trap</button>").on("click", page3))
    )
    scene.addSign(1, 3).append(
        $("<h1>")
            .css({
                "font-size": "4em",
            })
            .html("Theater Machinery")
    )
    
}

mainPage()