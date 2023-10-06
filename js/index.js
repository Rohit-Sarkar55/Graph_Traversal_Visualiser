
import { dfs} from './dfs.js'
import {BFS} from './bfs.js'
const btn = document.querySelector('.btn')
const runBtn = document.querySelector('.run')
btn.addEventListener('click' , createBoard)

var stNode = null , enNode = null ;
runBtn.addEventListener('click' , ()=>{
    let algo = document.getElementById('algo').value 
    console.log("algo " , algo);
    run_Dfs_Bfs(algo)
});



function createBoard(){
    //btn.style.visibility = `hidden`;
    
    var grid = document.querySelector('.container')
    grid.innerHTML = ""
    stNode = null;
    enNode = null
    var prompt = document.querySelector('.prompt')
    prompt.innerHTML = "Welcome.."
    

    setTimeout( ()=>{
        if(prompt.innerHTML == "Welcome..")
            prompt.innerHTML = "Choose the starting Node";
    } , 3000);
    for(let row = 1; row<=25 ; row++){
        for(let col = 1; col <= 25 ; col++){
            var node = createNode(row , col);
            grid.appendChild(node)
        }
    }
}


function createNode(row , col){
    var node = document.createElement("div")
    node.setAttribute("class" , "node")
    node.setAttribute('row', row)
    node.setAttribute('col', col)
   // node.innerText = col;
    node.setAttribute('blocked' , false)
    node.setAttribute('visited' , false)
    
    node.addEventListener('click' , ()=>{
        //alert(`You Clicke ${col}`)
        if(node == stNode || node == enNode){
            alert("Choose a different Node")
        }
        else if(stNode == null){
            stNode = node;
            node.style.backgroundColor = `green`;
            document.querySelector('.prompt').innerHTML = "Choose the Destination Node"
        }
        else if(enNode == null){
            enNode = node;
            node.style.backgroundColor = `red`;
            document.querySelector('.prompt').innerHTML = "Select Walls or Run"
            //document.querySelector('.run').style.visibility = `visible`;    
            document.querySelector('#select_box').style.visibility = `visible`;
        }
        else{
            
            if(node.getAttribute('blocked') === 'true'){
                node.setAttribute('blocked' , false)
            }
            else{
                node.setAttribute('blocked' , true)
            }

            
        }
    })
    return node
}


function run_Dfs_Bfs(algo){
    if(algo === 'dfs'){
        var row = parseInt(stNode.getAttribute('row')) , col = parseInt(stNode.getAttribute('col'))
        dfs(row , col , stNode ,enNode)
    }
    else
        BFS(stNode , enNode)
}

