

const leftBtn = document.querySelector('.modal span.left');
const rightBtn = document.querySelector('.modal span.right');

const allImg = document.querySelectorAll('#gallery .images .image img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal .img-modal img');
const modalClose = document.querySelector('.modal .close-btn');

let currenrImgindex = 0;

for(let i =0;i<allImg.length;i++){
    allImg[i].addEventListener('click',function(){
        const urlImg = this.getAttribute('src');
        console.log(urlImg);
        modal.classList.add('show');
        modalImg.setAttribute('src',urlImg);

        currenrImgindex=i;
    })
}

modalClose.addEventListener('click',function(){
    modal.classList.remove('show');
});

leftBtn.addEventListener('click',function(){
    currenrImgindex===0 ? currenrImgindex=allImg.length-1 : currenrImgindex-=1;
    const urlImg = allImg[currenrImgindex].getAttribute('src');
    modalImg.setAttribute('src',urlImg);
});

rightBtn.addEventListener('click',function(){
    currenrImgindex===allImg.length-1 ? currenrImgindex=0 : currenrImgindex+=1;
    const urlImg = allImg[currenrImgindex].getAttribute('src');
    modalImg.setAttribute('src',urlImg);

})