var button = document.getElementsByClassName('button');
for(var i = 0; i < button.length; i++) {
    button[i].style.background = 'aliceblue';
    button[i].style.border = '2px solid chartreuse';
    button[i].style.textAlign = 'center';
    button[i].style.fontSize = '16';
    button[i].style.display = 'block';
    button[i].style.width = '100%';
    button[i].style.height = '100%';
    button[i].style.cursor = 'pointer';
    button[i].style.boxShadow = '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)';
}

var btnGroup = document.getElementsByClassName('btn-group');
for(var i = 0; i < btnGroup.length; i++) {
    btnGroup[i].style.backgroundColor = 'aliceblue';
    btnGroup[i].style.opacity = '0.8';
    btnGroup[i].style.border = '1px solid black';
    btnGroup[i].style.color = 'black';
    btnGroup[i].style.padding = '10px 25px';
    btnGroup[i].style.textAlign = 'center';
    btnGroup[i].style.fontSize = '12px';
    btnGroup[i].style.cursor = 'pointer';
}

var disabled = document.getElementsByClassName('disabled');
for(var i = 0; i < disabled.length; i++) {
    disabled[i].style.opacity = '0.9';
    disabled[i].style.cursor = 'not-allowed';
}

var center = document.getElementsByClassName('center');
for(var i = 0; i < center.length; i++) {
    center[i].style.textAlign = 'center';
    center[i].style.justifyContent = 'center';
}

var imageCropper = document.getElementsByClassName('image-cropper');
for(var i = 0; i < imageCropper.length; i++) {
    imageCropper[i].style.position = 'relative';
    imageCropper[i].style.overflow = 'hidden';
    imageCropper[i].style.borderRadius = '50%';
    imageCropper[i].style.boxShadow = '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)';
    imageCropper[i].style.maxWidth = '250px';
}

var imageShadow = document.getElementsByClassName('image-shadow');
for(var i = 0; i < imageShadow.length; i++) {
    imageShadow[i].style.filter = 'drop-shadow(5px 5px 5px #222)';
}

var responsive = document.getElementsByClassName('responsive');
for(var i = 0; i < responsive.length; i++) {
    responsive[i].style.width = '100%';
    responsive[i].style.height = 'auto';
}

function btnHover(x){
    x.style.backgroundColor = 'chartreuse';
    x.style.color = 'aliceblue';
    x.style.opacity = '0.9';
}

function btnNormal(x){
    x.style.color = 'black';
    x.style.background = 'aliceblue';
    x.style.border = '2px solid chartreuse';
    x.style.textAlign = 'center';
    x.style.fontSize = '16';
    x.style.display = 'block';
    x.style.width = '100%';
    x.style.height = '100%';
    x.style.boxShadow = '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)';
}

function btnGroupHover(x){
    x.style.backgroundColor = 'black';
    x.style.color = 'chartreuse';
}

function btnGroupNormal(x){
    x.style.backgroundColor = 'aliceblue';
    x.style.opacity = '0.8';
    x.style.border = '1px solid black';
    x.style.color = 'black';
    x.style.padding = '10px 25px';
    x.style.textAlign = 'center';
    x.style.fontSize = '12px';
    x.style.cursor = 'pointer';
}
