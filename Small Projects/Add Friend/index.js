// this is first way
/*let addButton = document.querySelector('#add');
let removeButton = document.querySelector('#remove');
let updateText = document.querySelector('h2');

addButton.addEventListener('click', function(){
    updateText.innerHTML = "Accepted"
    updateText.style.color = 'Green'
})
removeButton.addEventListener('click', function(){
    updateText.innerHTML = "Stranger"
    updateText.style.color = 'Red'
})*/
// end

//this is 2nd way to
let addButton = document.querySelector('#add');
let updateText = document.querySelector('h2');
let check = 0;

addButton.addEventListener('click', function(){
    if(check === 0){
    updateText.innerHTML = "Accepted"
    updateText.style.color = 'Green'  
    addButton.innerHTML = "Remove"
    check = 1;           
    }else{
        addButton.innerHTML = "Add Friend"
        updateText.innerHTML = "Stanger"
        updateText.style.color = 'Red' 
        check = 0;
    }
})
//end