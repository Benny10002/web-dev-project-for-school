class Scene {
    constructor() {
/*
 *  Theater
 *      Scene
 *          Wall Left
 *          Wall Right
 *          Background
 *          Ceiling
 *          Floor
 *          Scene Content
 *              Content Grid
 *      Curtains parent
 *          Curtains
 *              Left
 *              Right
 *              Top
*/

// /*HTML*/ comments for vs code es6-string-html extension

        this.theater = $(`<div class="theater nonInteractive"></div>`)
        this.scene = $(/*HTML*/ 
            `<div class="scene nonInteractive">
                <div class="box bgimg nonInteractive"></div>
                <div class="box floor nonInteractive"></div>
                <div class="box ceiling nonInteractive"></div>
                <div class="box leftwall nonInteractive"></div>
                <div class="box rightwall nonInteractive"></div>
            </div>`);
        this.grid = {remove: ()=>{}}
        this.theater.append(this.scene)
        this.theater.append(
            $(`<div class="foregroundCurtainsParent nonInteractive"></div>`)
                .append(
                    
                    $( /*HTML*/ 
                        `
                        <div class="foregroundCurtains">
                            <div class="curtain curtainLeft"></div>
                            <div class="curtain curtainRight"></div>
                            <div class="curtain curtainTop"></div>
                            <div class="curtain curtainTopFill"></div>
                        </div>`
                    )
                )
        )
        $(`body`).append(this.theater);
    }

    addElement(column, row) {

        let e = $(`<div class="grid_item"></div>`)
            .css("grid-column", column)
            .css("grid-row", row);
        this.grid.append(e);
        return e;
    }
    
    setGrid(columns, rows) {
        $(".sceneContent").remove()
        this.grid = $(`<div class="contentGrid"></div>`);
        this.scene.append(
            $(`<div class="box sceneContent"></div>`)
                .append(
                    $(`<div class="sceneGridParent"></div>`)
                        .append(this.grid)
            )
        )
        this.grid.css("grid-template-columns", columns);
        this.grid.css("grid-template-rows", rows);
        setTimeout(()=>{
            $(".curtain").removeClass("playCurtainClosed").css("left", "var(--leftOpen)")
        }, 1500)
    }
    
    addSign(column, row) {
        let s = $(`<div class="sign"></div>`)
        let strings = $(`<div class="string"></div>`)
        let c = $(`<div class="signContent"></div>`)
        s.append(strings)
        s.append(c)
        s.addClass("show");
        this.addElement(column, row).append(s)
        return c
    }
    
    addText(column, row, text) {
        return this.addSign(column, row)
        .append($(`<p></p>`).html(text));
    }
    
    addHeader(column, row, text, headerSize) {
        return this.addSign(column, row)
        .append($("<"+headerSize+"></"+headerSize+">").html(text));
    }
    
    addButton(column, row, text) {
        return this.addSign(column, row)
        .append($(`<button></button>`).html(text));
    }
    
    swapPage(page) {
        $(".curtain").addClass("playCurtainClosed").css("left", "var(--leftClosed)")
        $(".sign").addClass("hide")
        setTimeout(()=>{
            page();
        }, 2000)
    }

    removeSelf() {
        this.theater.remove();
    }    
    
}