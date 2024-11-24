const scene = new Scene();

scene.setGrid("25% ".repeat(4), "33% ".repeat(3));

scene.addText(2, 1, "Hello world");
scene.addButton(1, 2, "Button").find("button").on("click", (e) => {
    $(e.target).parent().parent().addClass("hide")
})