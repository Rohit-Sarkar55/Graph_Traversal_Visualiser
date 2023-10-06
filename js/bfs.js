class Queue{
    constructor(){
        this.items = {}
        this.front = 0 
        this.back = 0
    }

    push(item){
        this.items[this.back] = item
        this.back++;
    }

    pop(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    peek(){
        return this.items[this.front]
    }
    size(){
        return this.back - this.front        
    }
}

import {getNode} from './get_node.js'

var dr = [1 , -1 , 0 , 0]
var dc = [0 , 0 , 1 , -1]
function BFS(stNode , enNode){

    console.log("Calling BFS");
    let q = new Queue();
    q.push(stNode)

    while(q.size() > 0){
        let node = q.pop();

        if(node == null || node.getAttribute('visited') === 'true' 
        || node.getAttribute('blocked') === 'true') continue;

        let row = parseInt (node.getAttribute('row')) 
        let col = parseInt (node.getAttribute('col'))
        console.log("visited " , row , col);
        node.setAttribute('visited' , true)
        if(node === enNode){
            console.log("reached");
            break;
        }
        for(let i=0;  i < 4 ; i++){
            let nrow = row + dr[i]
            let ncol = col + dc[i]

            let nextNode = getNode(nrow , ncol)

            if(nextNode != null && nextNode.getAttribute('visited') === 'false'
             && node.getAttribute('blocked') === 'false' ){

                nextNode.setAttribute('parentRow' , row)
                nextNode.setAttribute('parentCol' , col)
                q.push(nextNode)
            }
            
        }

    }

    if(enNode.getAttribute('visited') === 'true'){
        let node = enNode 
        while(node != stNode){
            node.setAttribute('success' , true)
            let parentRow = parseInt (node.getAttribute('parentRow'))
            let parentCol = parseInt (node.getAttribute('parentCol'))

            let parentNode = getNode(parentRow , parentCol)
            node = parentNode
            
        }
    }
}



export { BFS }