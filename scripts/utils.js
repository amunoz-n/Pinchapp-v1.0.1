// Funciones de utilidad
export function showElement(element, display = 'block') {
    element.style.display = display;
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 10);
}

export function hideElement(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    setTimeout(() => {
        element.style.display = 'none';
    }, 300);
}

export function simulateLocation() {
    const cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Bilbao'];
    return `${cities[Math.floor(Math.random() * cities.length)]}, España`;
}

export function showLoader(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<div class="loader small" style="width:20px;height:20px;border-width:2px;"></div>';
    return originalHTML;
}

export function restoreButton(button, originalHTML) {
    button.innerHTML = originalHTML;
}
