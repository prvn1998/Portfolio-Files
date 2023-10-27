let btn = document.querySelector('#dog-img')
let icon = document.querySelector('i')

btn.addEventListener('dblclick', function() {
    icon.style.transform =  "translate(-50%, -50%) scale(1)";
    icon.style.opacity = 0.8;  
    setTimeout(function () {
        icon.style.opacity =  0;
    }, 1000)

    setTimeout(function () {
        icon.style.transform =  "translate(-50%, -50%) scale(0)";        
    }, 2000)
})