const scene = new Scene();

scene.setGrid("25% ".repeat(4), "33% ".repeat(3));

scene.addText(3, 2, "Hello world");
scene.addButton(2, 3, "Button").find("button").on("click", (e) => {
    $(e.target).parent().parent().addClass("hide")
})

scene.addText("1 / 3", 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis metus ut vulputate. Sed sodales nulla a turpis faucibus, sed elementum massa imperdiet. Sed nec nunc eleifend, blandit massa sed, tincidunt metus. Praesent at euismod felis, sed consectetur ante. Pellentesque venenatis metus leo. Cras eleifend eros et justo finibus gravida. Quisque sed diam ac magna auctor aliquet sed non nulla. Ut vehicula elit ornare sem ornare consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")