let upload=document.getElementById('upload');
let saturate=document.getElementById('saturate');
let contrast=document.getElementById('contrast');
let brightness=document.getElementById('brightness');
let sepia=document.getElementById('sepia');
let grayscale=document.getElementById('grayscale');
let blur=document.getElementById('blur');
let ahmed=document.getElementById('hue-rotate');
let img=document.getElementById('img');
let image=document.querySelector('.image');
let download=document.getElementById('download');
let reset=document.getElementById('reset');

let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d')

function resselve(){
  ctx.filter='none'
   saturate.value='100'
   contrast.value='100'
   brightness.value='100'
   sepia.value='0'
   grayscale.value='0'
   blur.value='0'
   ahmed.value='0'
    ctx.drawImage(img,0,0,canvas.width,canvas.height)

}

window.onload=function(){
    download.style.display='none'
    image.style.display='none'
    reset.style.display='none'
}
upload.onchange=function(){
    download.style.display='block'
    image.style.display='block'
    reset.style.display='block'
    let file=new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
        img.src=file.result 
    
    }
    img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display='none'
    }
    resselve(); 
}

// saturate.oninput=function(){
//     img.style.filter=`saturate(${saturate.value}%)`
// }
let filters=document.querySelectorAll('ul li input')
filters.forEach(filter=>{
    filter.addEventListener("input",function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${ahmed.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })
 
})
download.onclick=function(){
    download.href=canvas.toDataURL();
    this.style.textDecoration='none'
    this.style.color='white'
}