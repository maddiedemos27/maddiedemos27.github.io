const evilButton = document.getElementById('evil-button')
const OFFSET = 100 //whenever mouse gets within 100 pixels of our button, button moves

// whenever clicked on, gives alert saying nice try, and closes window
evilButton.addEventListener('click', () => {
    alert('Nice try')
    window.close()
})

//this event is called to move button when too close
document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect() //gives x, y, height, and width of button
    const horizontallDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs (verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10
        )
    }
})

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left= windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) < 0) {
        top = windowBox.top + OFFSET
    }


    evilButton.style.left = '${left}px'
    evilButton.style.top = '${top}px'

}

// gets the position of the mouse from the center of the button
function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}
