const scene = new Scene();

scene.setGrid("25% ".repeat(4), "33% ".repeat(3));

scene.addHeader(3, 2, "Hello world", "h2");
scene.addButton(2, 3, "Button").find("button").on("click", (e) => {
    $(e.target).parent().parent().addClass("hide")
})

scene.addText("1 / 2", "1 / 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis metus ut vulputate. Sed sodales nulla a turpis faucibus, sed elementum massa imperdiet. Sed nec nunc eleifend, blandit massa sed, tincidunt metus. Praesent at euismod felis, sed consectetur ante. Pellentesque venenatis metus leo.")