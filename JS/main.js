class Scene {
    constructor() {
        this.scene = $("<div class='scene'></div>");
        this.grid = $("<div class='sceneGrid'></div>");
        this.gridElements = [[]]
        this.scene
                .append($("<div class='box bgimg'></div>"))
                .append($("<div class='box sceneContent'></div>")
                    .append(
                        $("<div class='sceneGridParent'></div>")
                            .append(this.grid)
                    ))
                .append($("<div class='box floor'></div>"))
                .append($("<div class='box ceiling'></div>"))
                .append($("<div class='box leftwall'></div>"))
                .append($("<div class='box rightwall'></div>"))
        $("body").append(this.scene);
    }

    addElement(column, row) {

        let e = $("<div class='grid_item'><div>")
            .css("grid-column", column)
            .css("grid-row", row);
        this.grid.append(e);
        return e;
    }


    setGrid(columns, rows) {
        this.grid.css("grid-template-columns", columns);
        this.grid.css("grid-template-rows", rows);
    }

    addSign(column, row) {
        let s = $("<div class='sign'></div>")
        let strings = $("<div class='string'></div>")
        let c = $("<div class='signContent'></div>")
        s.append(strings)
        s.append(c)
        s.addClass("show");
        this.addElement(column, row).append(s)
        return c

    }

    addText(column, row, text) {
        return this.addSign(column, row)
            .addClass("signText")
            .html(text);
    }

    addButton(column, row, text) {
        return this.addSign(column, row)
            .append($("<button></button>").html(text));
    }

}