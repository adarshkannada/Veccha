function square(){
    for(i = 1; i <= 10; i++){
        sq = i * i;
        document.write("The Square of " + i + " is " + sq + "<BR>")
    }
}

function resetForm(){
        document.getElementById("savebutton").reset();
}