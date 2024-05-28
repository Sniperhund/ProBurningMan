const mapContainer = document.getElementById("image-container")
const map = document.getElementById("image")

let isDragging = false
let startX, startY, initialLeft, initialTop

mapContainer.addEventListener("mousedown", (e) => {
    isDragging = true
    startX = e.pageX
    startY = e.pageY
    initialLeft = map.offsetLeft
    initialTop = map.offsetTop
    mapContainer.style.cursor = "grabbing"
})

document.addEventListener("mouseup", () => {
    isDragging = false
    mapContainer.style.cursor = "grab"
})

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return
    e.preventDefault()

    const deltaX = e.pageX - startX
    const deltaY = e.pageY - startY

    let newLeft = initialLeft + deltaX
    let newTop = initialTop + deltaY

    // Clamping to container boundaries
    const minLeft = Math.min(0, mapContainer.clientWidth - map.clientWidth)
    const minTop = -1417

    /*console.log(
        "New left: " + newLeft,
        "New top: " + newTop,
        "Min left: " + minLeft,
        "Min top: " + minTop
    )*/

    if (newLeft > 0) newLeft = 0
    if (newLeft < minLeft) newLeft = minLeft
    if (newTop > 0) newTop = 0
    if (newTop < minTop) newTop = minTop

    map.style.left = `${newLeft}px`
    map.style.top = `${newTop}px`
})
