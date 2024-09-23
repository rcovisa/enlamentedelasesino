




document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    
    function adjustTextPosition() {
        const containerHeight = container.clientHeight;
        const textHeight = text.clientHeight;
        const scrollPosition = container.scrollTop;
        const maxScroll = container.scrollHeight - containerHeight;
        
        const percentage = scrollPosition / maxScroll;
        const newPosition = (containerHeight - textHeight) * percentage;
        
        text.style.top = `${newPosition}px`;
    }
    
    container.addEventListener('scroll', adjustTextPosition);
    
    // Ajusta la posición inicial
    adjustTextPosition();
});