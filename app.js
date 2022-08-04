const galleryElement = document.querySelectorAll(".gallery .image")  // 1
const previewBoxElement = document.querySelector(".prewiew-box")  // 2
const closeIconElement = previewBoxElement.querySelector(".icon")  // 5
const previewImgElement = previewBoxElement.querySelector("img")  // 8 htmldan imgni 6-o'chiramz


window.onload = () => {  // 3
    for(let i = 0; i < galleryElement.length; i++) {
        galleryElement[i].onclick = () => {
            console.log(i);
            function preview(){  // 7
                let selectedImgUrl = galleryElement[i].querySelector("img").src
                previewImgElement.src = selectedImgUrl
                console.log(selectedImgUrl);
            }
            preview()
            previewBoxElement.classList.add("show")  // 4  css da xam yozamiz

            closeIconElement.addEventListener("click", event => {  // 6
                previewBoxElement.classList.remove("show")
            })
        }
    }
}