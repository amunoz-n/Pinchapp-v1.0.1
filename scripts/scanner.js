// Lógica del escáner QR
import { showElement, hideElement, simulateLocation } from './utils.js';

export function initScanner() {
    const startScanBtn = document.getElementById('startScanBtn');
    const stopScanBtn = document.getElementById('stopScanBtn');
    const qrOverlay = document.querySelector('.qr-overlay');
    const scanResult = document.getElementById('scanResult');
    const scanError = document.getElementById('scanError');
    const photoUpload = document.getElementById('photoUpload');
    const cameraBtn = document.querySelector('.camera-btn');
    const useCurrentLocation = document.getElementById('useCurrentLocation');
    const locationInput = document.getElementById('locationInput');
    const newRandomStoryBtn = document.getElementById('newRandomStory');
    
    // QR Scanner
    startScanBtn.addEventListener('click', () => {
        showElement(qrOverlay);
        hideElement(startScanBtn);
        showElement(stopScanBtn);
        hideElement(scanError);
        
        // Simular escaneo después de 2 segundos
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% de éxito
            
            if(success) {
                hideElement(qrOverlay);
                showElement(scanResult);
            } else {
                hideElement(qrOverlay);
                showElement(scanError);
                showElement(startScanBtn);
                hideElement(stopScanBtn);
            }
        }, 2000);
    });
    
    stopScanBtn.addEventListener('click', () => {
        hideElement(qrOverlay);
        showElement(startScanBtn);
        hideElement(stopScanBtn);
    });
    
    // Foto upload
    photoUpload.addEventListener('click', () => {
        cameraBtn.classList.toggle('hidden');
    });
    
    // Obtener ubicación
    useCurrentLocation.addEventListener('change', () => {
        if(useCurrentLocation.checked) {
            locationInput.value = simulateLocation();
        }
    });
    
    // Nueva historia aleatoria
    newRandomStoryBtn.addEventListener('click', () => {
        const originalHTML = newRandomStoryBtn.innerHTML;
        newRandomStoryBtn.innerHTML = '<div class="loader small" style="width:20px;height:20px;border-width:2px;"></div>';
        
        setTimeout(() => {
            newRandomStoryBtn.innerHTML = originalHTML;
            alert('Se ha cargado una nueva historia');
        }, 1000);
    });
}
