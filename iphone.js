

let images = document.getElementById('images').children;
let template = document.getElementById('template');
let colors = ['gold', 'blue', 'black', 'gray', 'red' ]
let background = document.querySelector('.child-1');
let size = document.querySelector('.size').children;

for (let i=0 ;i<images.length;i++) {
    images[i].addEventListener('click',function() {
        template.src=images[i].src;
        background.style.backgroundColor = colors[i];
    })
}

for (let i=0;i<size.length;i++) {
    size[i].addEventListener('click',function(){
        for (let j=0; j<size.length;j++) {
            size[j].style.border='';
        }
        size[i].style.border='3px solid red';
    })
}


    