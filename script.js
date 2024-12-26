var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    var reactanglelocation = (rect.getBoundingClientRect())
    var insiderect = (details.clientX-reactanglelocation.left)
    
    if(insiderect< reactanglelocation.width/2)
    {
        var redcolor = gsap.utils.mapRange(0,reactanglelocation.width/2,255,0,insiderect);
        gsap.to(rect,{
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
    else{
        var bluecolor = gsap.utils.mapRange(reactanglelocation.width/2,reactanglelocation.width,0,255,insiderect);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        });
    }
    
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    }
    )
})