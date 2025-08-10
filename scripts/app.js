// Punto de entrada principal
import { initAuth } from './auth.js';
import { initNavigation } from './navigation.js';
import { initScanner } from './scanner.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar módulos
    initAuth();
    initNavigation();
    initScanner();
    
    // Configuración adicional
    document.getElementById('useCurrentLocation').addEventListener('change', function() {
        if(this.checked) {
            document.getElementById('locationInput').value = 'Obteniendo ubicación...';
            setTimeout(() => {
                document.getElementById('locationInput').value = simulateLocation();
            }, 1000);
        }
    });
});
