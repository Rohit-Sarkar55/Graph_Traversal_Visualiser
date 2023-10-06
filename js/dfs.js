
const temp = "HI Rohit" ; 

import {getNode} from './get_node.js'

var dr = [1 , -1 , 0 , 0]
var dc = [0 , 0 , 1 , -1];
function dfs(row , col , node , enNode){
    
    // console.log("end " , enNode.getAttribute('row') , enNode.getAttribute('col'));
    if(node === enNode){
        
        return true;
    }
    
    node.setAttribute('visited' , true)

    
  //  console.log("visited " , row , col , node.getAttribute('blocked') );

    for(let i=0; i< 4 ; i++){
        let nrow = row + dr[i];
        let ncol = col + dc[i];
        //console.log(nrow , ncol);
        let nextNode = getNode(nrow , ncol);
        if(nextNode != null && nextNode.getAttribute('visited') === 'false'
            && nextNode.getAttribute('blocked') === 'false' ){

            
            if(dfs(nrow,  ncol , nextNode , enNode) === true){
                node.setAttribute('success' , true)
                return true
            }
        }
        
    }   
    
}




 export {dfs};