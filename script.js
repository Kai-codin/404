// Simple interactive features for the 404 page

// Add some animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate the error code
    const errorCode = document.querySelector('.error-code');
    if (errorCode) {
        errorCode.style.opacity = '0';
        errorCode.style.transform = 'translateY(-50px)';
        
        setTimeout(() => {
            errorCode.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            errorCode.style.opacity = '1';
            errorCode.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animate the suggestion links with stagger effect
    const links = document.querySelectorAll('.suggestion-link');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
});

// Add a fun easter egg - konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    // Keep only the last 10 keys
    if (konamiCode.length > 10) {
        konamiCode.shift();
    }
    
    // Check if the sequence matches
    if (konamiCode.length === 10 && 
        konamiCode.every((key, index) => key === konamiSequence[index])) {
        
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        
        // Add rainbow animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Show a fun message
        const message = document.createElement('div');
        message.textContent = '🎉 You found the easter egg! 🎉';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-size: 1.2rem;
            z-index: 1000;
            animation: fadeInOut 3s ease-in-out;
        `;
        
        const fadeStyle = document.createElement('style');
        fadeStyle.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            }
        `;
        document.head.appendChild(fadeStyle);
        document.body.appendChild(message);
        
        // Remove the message after animation
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
        
        // Reset the konami code
        konamiCode = [];
    }
});

// Add click tracking for analytics (placeholder)
document.querySelectorAll('.suggestion-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // In a real application, you might want to track which links are clicked
        console.log('Link clicked:', this.textContent.trim());
    });
});

// Random quote generator for fun
const quotes = [
    "The best error messages are the ones that never show up.",
    "404: The page you're looking for is in another castle.",
    "I'm not lost, I'm just exploring alternative routes.",
    "This page is taking a coffee break. ☕",
    "Error 404: Humor not found... wait, there it is!",
    "The page has left the building.",
    "This page is on vacation. It'll be back soon!"
];

// Add a random quote occasionally
if (Math.random() < 0.3) { // 30% chance
    const description = document.querySelector('.error-description');
    if (description) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const quoteElement = document.createElement('p');
        quoteElement.textContent = `"${randomQuote}"`;
        quoteElement.style.cssText = `
            font-style: italic;
            margin-top: 1rem;
            color: #6c757d;
            font-size: 1rem;
        `;
        description.parentNode.insertBefore(quoteElement, description.nextSibling);
    }
}