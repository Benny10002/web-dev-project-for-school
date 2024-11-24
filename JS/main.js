class Scene {
    constructor() {
        this.scene = $("<div class='scene'></div>");
        this.grid = $("<div class='sceneGrid'></div>");
        this.gridElements = [[]]
        this.scene.append($("<div class='sceneGridParent'></div>").append(this.grid));
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

        //console.log(columns.split(" ").filter(e => {return e.length}))
        const columnCount = columns.split(" ").filter(e => {return e.length}).length;
        //console.log(rows.split(" ").filter(e => {return e.length}))
        const rowCount = rows.split(" ").filter(e => {return e.length}).length;

        this.gridElements = new Array(columnCount);
        for (let x = 0; x < columnCount; x++) {
            this.gridElements[x] = new Array(rowCount);
            for (let y = 0; y < rowCount; y++) {
                this.gridElements[x][y] = this.addElement(x+1, y+1);
            }
        }
    }

    addSign(column, row) {
        let s = $("<div class='sign'></div>")
        let strings = $("<div class='string'></div>")
        let c = $("<div class='signContent'></div>")
        s.append(strings)
        s.append(c)
        s.addClass("show");
        this.gridElements[column][row].append(s)
        return c

    }

    addText(column, row, text) {
        return this.addSign(column, row)
            .html(text);
    }

    addButton(column, row, text) {
        return this.addSign(column, row)
            .append($("<button></button>").html(text));
    }

}