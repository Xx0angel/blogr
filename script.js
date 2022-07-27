// Show menu mobile
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('#nav').classList.toggle('showed__mobile');
    document.querySelector('#close-menu').classList.toggle('show');
    document.querySelector('#open-menu').classList.toggle('show');
});

// Close Menu 
document.querySelector('#close-menu').addEventListener('click', () =>{
    document.querySelector('#nav').classList.toggle('showed__mobile');
    document.querySelector('#close-menu').classList.toggle('show');
    document.querySelector('#open-menu').classList.toggle('show');
});

// Open menu dropdown
document.querySelector('.dropclass').addEventListener('click', () => {
    document.querySelector('#menu__dropdown').classList.toggle('showed');
});


// ** OPEN REVEAL ** //


