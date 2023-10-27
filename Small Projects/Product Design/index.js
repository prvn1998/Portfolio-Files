const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function miniCircle(){
    window.addEventListener('mousemove', function(dets){
        document.querySelector('.mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

miniCircle();