const board = document.getElementById('board');
const ctx = board.getContext('2d');
const getPosFromScale = (x, y) => [x * parseFloat(board.getAttribute('width')), y * parseFloat(board.getAttribute('height'))];
const getScaleFromPos = (x, y) => [x / parseFloat(board.getAttribute('width')), y / parseFloat(board.getAttribute('height'))];
//tiles, mainly.
const boardDimensions = getPosFromScale(1, 1);
const tileheight = boardDimensions[1] / 8;
const tilewidth = boardDimensions[0] / 8;
;
let maincolor = {
    bright: "#ede5b1",
    dark: "#50ce4c"
};
const drawScaledTile = (x, y, c) => {
    let px = getPosFromScale(x, y);
    ctx.fillStyle = c ? maincolor.bright : maincolor.dark;
    ctx.fillRect(px[0], px[1], tilewidth, tileheight);
};
const drawTiles = () => {
    for (let ypos = 0; ypos <= 1; ypos += (1 / 8)) {
        for (let xpos = 0; xpos <= 1; xpos += (1 / 8)) {
            drawScaledTile(xpos, ypos, ((xpos + ypos) % (2 / 8) == 0));
        }
        ;
    }
    ;
};
;
;
const betterPush = (x, y) => {
    let list = x;
    list.push(y);
    return list;
};
const addPiece = (g, p) => (betterPush(g.pieces, p));
const renderPiece = (p) => {
    switch (p.type) {
        case 0:
            //pawn
            let px = getPosFromScale(p.x / 8, p.y / 8);
            let wimg = document.getElementById("pawn");
            let bimg = document.getElementById("pawn");
            ctx.drawImage(p.player ? wimg : bimg, px[0], px[1], tilewidth, tileheight);
    }
    ;
};
const getMousePos = (event) => {
    const rect = board.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return [x, y];
};
const coolRound = (x) => {
    let t = Math.trunc(x);
    if (x - t > 0.9) {
        return Math.ceil(x);
    }
    else if (x - t < 0.1) {
        return Math.floor(x);
    }
    else {
        return t;
    }
    ;
};
const getMouseTile = (event) => {
    let pos = getMousePos(event);
    let scale = getScaleFromPos(pos[0], pos[1]);
    let x = scale[0] + (1 / 16);
    let y = scale[1] + (1 / 16);
    return [coolRound(x * 7), coolRound(y * 7)];
};
const main = () => {
    drawTiles();
    let pawn = {
        x: 0,
        y: 0,
        type: 0,
        player: true
    };
    board.addEventListener("click", (event) => {
        let pos = getMouseTile(event);
        console.log(pos);
    });
    renderPiece(pawn);
};
main();
