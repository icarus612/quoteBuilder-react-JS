import anime from './anime/lib/anime.es.js';

export var animateBG = (el, colors, t) =>{
    let animation = [];
    for (let i = 0; i < colors.length; i++){
        let j = i + 1
        animation[animation.length] = anime({
            targets: el,
            backgroundColor: [colors[i], colors[j] || colors[0]],
            easing: "linear",
            duration: t,
            autoplay: false,
            complete: function(anim){
                animation[j < colors.length ? j : 0].play();
            }
        })
    }
    return animation[0].play()
    
}
export var scrollBG = (el, colors, t) => {
    let animation = [];
    for (let i = 0; i < colors.length; i++){
        let j = i + 1
        animation[animation.length] = anime({
            targets: el,
            backgroundColor: [colors[i], colors[j] || colors[0]],
            easing: "linear",
            duration: t,
            delay: t * i,
            autoplay: false,
        })
    }
    window.onscroll = () => {
        let x = Math.floor(animation[animation.length-1].currentTime/t)
        let y = Math.floor(animation[animation.length-1].currentTime)
    
        for (let i = 0; i < animation.length; i++){
            animation[i].seek((window.scrollY / t) * animation[i].duration);
        }
        try {
            animation[x].seek((window.scrollY / t) * animation[animation.length-1].duration);
        } catch (err) { console.error(err)}
    };
    return animation[0].seek(1)
 
}
