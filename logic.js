document.addEventListener('DOMContentLoaded', () => {
    const scrollToSecond = document.getElementById('scrollToSecond');
    const secondSection = document.getElementById('second-section');
    
    // Make sure the container element is selected correctly
    const container = document.querySelector('.container'); 

    // Check if the elements exist before adding event listeners
    if (scrollToSecond && secondSection && container) {
        scrollToSecond.addEventListener('click', () => {
            container.scrollTo({
                top: secondSection.offsetTop,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('One or more elements (button, section, or container) are missing.');
    }
});
