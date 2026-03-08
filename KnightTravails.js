export function getMoves(position) {
    if (!Array.isArray(position)) {
        throw new Error("Position Should be an Array!")
    }
    const moveOffsets = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    let validMoves = [];
    let [x, y] = position;

    for (let i = 0; i < moveOffsets.length; i++) {
        let [dx,dy] = moveOffsets[i];
        let newX = x + dx;
        let newY = y + dy;

        if((newX >=0 && newX <=7) && (newY >=0 && newY <=7)){
            validMoves.push([newX,newY])
        }

    }
    return validMoves;
}

function knightMoves(start,end){
    const queue = [];
    const visited = Set();
    const startNode = {
        position:start,
        parent:null
    };
    queue.push(startNode);
    visited.add(start.join(','));
}