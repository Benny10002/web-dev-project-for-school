class Scene {
    constructor() {
        this.scene = $("<div class='scene'></div>");
        this.grid = $("<div class='sceneGrid'></div>");
        this.scene.append(this.grid);
        $("body").append(this.scene);
    }

    setGrid(columns, rows) {
        this.grid.css("grid-template-columns", columns);
        this.grid.css("grid-template-rows", rows);
    }

    addElement(column, row) {
        let e = $("<div class='grid_item'><div>")
            .css("grid-column", column)
            .css("grid-row", row);
        this.grid.append(e);
        return e;
    }

    addText(column, row, text) {
        return this.addElement(column, row).html(text);
    }

    addButton(column, row, text) {
        let e = this.addElement(column, row)
            .append($("<button></button>").html(text));
    }

}