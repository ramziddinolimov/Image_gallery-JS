const galleryElement = document.querySelectorAll(".gallery .image")  // 1
const previewBoxElement = document.querySelector(".preview-box")  // 2


window.onload = () => {  // 3
    for(let i = 0; i < galleryElement.length; i++) {
        galleryElement[i].onclick = () => {
            console.log(i);
            previewBoxElement.classList.add("show")  // 4
        }
    }
}