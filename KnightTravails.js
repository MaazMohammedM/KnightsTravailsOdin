export function getMoves(position) {
    
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

export function knightMoves(start,end){
    if ((!Array.isArray(start)) && (!Array.isArray(end))) {
        throw new Error("Start and End Should be an Array!")
    }
    const queue = [];
    const visited = new Set();
    const startNode = {
        position:start,
        parent:null
    };
    queue.push(startNode);
    visited.add(start.join(','));

    while(queue.length > 0){
        const currentNode = queue.shift();
        const currentPosition = currentNode.position;
        if(currentPosition[0] === end[0] && currentPosition[1] === end[1]){
            let path = [];
            let current = currentNode;
            while(current !== null){
                path.unshift(current.position);
                current = current.parent
            }

            return path;
        }
        const moves = getMoves(currentPosition);
        for(let move of moves){
            const key = move.join(',');
            if(!visited.has(key)){
                visited.add(key);
                const newNode = {
                    position:move,
                    parent:currentNode
                }
                queue.push(newNode)
            }
        }
    }
    return null;
}

