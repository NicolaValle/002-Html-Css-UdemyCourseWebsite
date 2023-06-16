var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectedButtons = document.querySelectorAll('.plan button');
var closeModalButton = document.querySelector('.modal button')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
// console.dir(backdrop);
// backdrop.style.display = 'block';
for(var i = 0; i < selectedButtons.length; i++){
    selectedButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open' //this will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
})

closeModalButton.addEventListener('click', closeModal)

function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

