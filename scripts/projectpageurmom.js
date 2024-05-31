const move = document.getElementById("move");

document.body.onpointermove = event => {
    const { movementX, movementY } = event;

    move.animate({
        left: `${movementX}px`,
        top: `${movementY}px`
    
    }, {duration: 1000, fill: "forwards"})

}