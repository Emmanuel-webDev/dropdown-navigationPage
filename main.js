function actlink(){
    document.querySelector('#mode').style.backgroundColor = "hsl(0 0% 98%)";
    document.querySelector('#mode').style.color= "hsl(0 0% 8%)"
}
function unlink(){
    document.querySelector('#mode').style.backgroundColor = "hsl(0 0% 8%)";
    document.querySelector('#mode').style.color= "hsl(0 0% 98%)";
    document.querySelector('#mode').style.border = "2px solid #333"
}



function drpdwn(){
    document.querySelector('.list').style= "display:block"
}

function drpdwntwo(){
    document.querySelector(".listdrop").style= "display:block"
}
function drpdwnone(){
    document.querySelector(".listmob").style= "display:block"
}

window.onclick =function(event){
    if(!event.target.matches('.dropdwn')){
        document.querySelector('.list').style= "display:none"
    } 
    else if(!event.target.matches('.drpdwnone')){
        document.querySelector('.listmob').style= "display:none"
    }
    if(!event.target.matches('.drpdwnone')){
        document.querySelector('.listdrop').style= "display:none"
    }
}

function clicks(){
    document.querySelector('.links').style="display:block";
}