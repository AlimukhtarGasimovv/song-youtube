document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.simple-button');
    
    button.addEventListener('mouseover', () => {
        button.style.opacity = '0.8';
    });

    button.addEventListener('mouseout', () => {
        button.style.opacity = '1';
    });
}); 