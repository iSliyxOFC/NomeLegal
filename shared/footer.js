// Load footer component
function loadFooter() {
    console.log('Loading footer...');
    const footerContainer = document.getElementById('footer-container');
    
    if (!footerContainer) {
        console.error('Footer container not found!');
        return;
    }

    // Embed footer HTML directly to avoid file:// protocol issues
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>SliyxOFC</h3>
                    <p>Minecraft Builder</p>
                    <p>Construindo pra atrair loiras</p>
                </div>
                <div class="footer-section">
                    <h4>Links radicais</h4>
                    <ul>
                        <li><a href="index.html">Portfólio</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>REDES</h4>
                    <div class="connect-links">
                        <p><span class="connect-label">YouTube:</span> <a href="https://www.youtube.com/@SliyxOFC" target="_blank" class="connect-link social-link">@SliyxOFC</a></p>
                        <p><span class="connect-label">Instagram:</span> <a href="https://www.instagram.com/samuelb.xd/" target="_blank" class="connect-link social-link">samuelb.xd</a></p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Direitos reservados apenas para as loiras e o Sliyx...<br> Talvez o Koski (Vou pensar)</p>
            </div>
        </div>
    </footer>`;

    footerContainer.innerHTML = footerHTML;
    console.log('Footer loaded successfully');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadFooter };
}
