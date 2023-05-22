var bigBox = document.getElementById('bigest-img');
var small_img = document.getElementById('small_img');

// let text = bigBox.getAttribute('src');
// console.log(text);

// next icon
var next = document.getElementById('next_icon');
console.log(next);

const smallimages = document.querySelectorAll('#small_img img');
// console.log(smallimages);
smallimages.forEach(item => {
    item.addEventListener('click', ({ target: { src } }) => {
        // console.log(src);
        bigBox.setAttribute('src', src);
    })
})
next.addEventListener('click', () => {
    small_img.style.marginRight = '2rem';
})