// const galleryElement = document.querySelectorAll(".gallery .image")  // 1
// const previewBoxElement = document.querySelector(".prewiew-box")  // 2
// const closeIconElement = previewBoxElement.querySelector(".icon")  // 5
// const previewImgElement = previewBoxElement.querySelector("img")  // 8 htmldan imgni 6-o'chiramz

// // console.log(galleryElement);


// window.onload = () => {  // 3
//     for(let i = 0; i < galleryElement.length; i++) {
//         let newIndex = i
//         let clickImgIndex;
//         galleryElement[i].onclick = () => {
//             clickImgIndex = newIndex
//             console.log(i);
//             function preview(){  // 7
//                 let selectedImgUrl = galleryElement[newIndex].querySelector("img").src
//                 previewImgElement.src = selectedImgUrl
//                 console.log(selectedImgUrl);
                
//             }

//             const prevBtnElement = document.querySelector(".prev")
//             const nextBtnElement = document.querySelector(".next")

//             if(newIndex == 0) {
//                 prevBtnElement.style.display = "none"
//             }

//             if(newIndex >= galleryElement.length - 1) {
//                 nextBtnElement.style.display = "none"
//             }
//             prevBtnElement.addEventListener("click", event => {
//                 newIndex--;
//                 if(newIndex == 0){
//                     preview()
//                     prevBtnElement.style.display = "none"
//                 } else {
//                     preview()
//                     nextBtnElement.style.display = "block"
//                 }
//             })

//             nextBtnElement.addEventListener("click", event => {
//                 newIndex++;
//                 if(newIndex >= galleryElement.length - 1){
//                     preview()
//                     nextBtnElement.style.display = "none"
//                 } else {
//                     preview()
//                     prevBtnElement.style.display = "block"
//                 }
//             })
//             preview()
//             previewBoxElement.classList.add("show")  // 4  css da xam yozamiz

//             closeIconElement.addEventListener("click", event => {  // 6
//                 newIndex = clickImgIndex
//                 prevBtnElement.style.display = "block"
//                 nextBtnElement.style.display = "block"
//                 previewBoxElement.classList.remove("show")
//             })
//         }
//     }
// }



const galleryElement = document.querySelectorAll(".gallery .image")  // 1
const previewBoxElement = document.querySelector(".prewiew-box")  // 2
const closeIconElement = previewBoxElement.querySelector(".icon")  // 5
const previewImgElement = previewBoxElement.querySelector("img")  // 8 htmldan imgni 6-o'chiramz
const prevBtnElement = document.querySelector(".prev")
const nextBtnElement = document.querySelector(".next")
const currentImgElement = document.querySelector(".current-img")
const totalImgElement = document.querySelector(".total-img")
// console.log(galleryElement
let index = 0;
function preview(){  // 7
  previewImgElement.src = galleryElement[globalThis.index].querySelector("img").src;
  if(globalThis.index == 0) {
    prevBtnElement.style.display = "none"
  }
  if(globalThis.index == galleryElement.length - 1) {
    nextBtnElement.style.display = "none"
  }
  previewBoxElement.classList.add("show")
}

 prevBtnElement.addEventListener("click", event => {
   globalThis.index--;
   if(globalThis.index == 0){
     preview()
     prevBtnElement.style.display = "none"
   } else {
     preview()
     nextBtnElement.style.display = "block"
   }
 })

nextBtnElement.addEventListener("click", event => {
  globalThis.index++;
  if(globalThis.index >= galleryElement.length - 1){
    preview()
    nextBtnElement.style.display = "none"
  } else {
    preview()
    prevBtnElement.style.display = "block"
  }
})
closeIconElement.addEventListener("click", event => {  
  prevBtnElement.style.display = "block"
  nextBtnElement.style.display = "block"
  previewBoxElement.classList.remove("show")
})
window.onload = () => {  // 3
    for(let i = 0; i < galleryElement.length; i++) {
        totalImgElement.textContent = galleryElement.length
        galleryElement[i].onclick = () => {
            currentImgElement.textContent = index + 1;
            globalThis.index = i;
            globalThis.preview();
        }
    }
}
