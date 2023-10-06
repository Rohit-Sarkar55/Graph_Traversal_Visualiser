
function getNode(row , col){
    if(row <= 0 || row > 25 || col <= 0 || col > 25){
        return null
    }
    var node = document.querySelector(`div[row="${row}"][col="${col}"]`)    
    return node;
}

export {getNode}