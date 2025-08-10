// Lógica de navegación
import { showElement, hideElement } from './utils.js';

export function initNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const scanQrBtn = document.getElementById('scanQrBtn');
    const viewMapBtn = document.getElementById('viewMapBtn');
    const randomStoryBtn = document.getElementById('randomStoryBtn');
    const travelGuideBtn = document.getElementById('travelGuideBtn');

    // Navegación por pestañas
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Quitar active de todos los tabs y botones
            document.querySelectorAll('.tab-content').forEach(tab => {
                hideElement(tab);
            });
            
            tabButtons.forEach(btn => {
                btn.classList.remove('text-blue-500');
                btn.classList.add('text-gray-500');
            });
            
            // Activar el tab seleccionado
            showElement(document.getElementById(tabId));
            this.classList.remove('text-gray-500');
            this.classList.add('text-blue-500');
        });
    });
    
    // Botones principales
    scanQrBtn.addEventListener('click', () => {
        // Mostrar tab de QR
        document.querySelectorAll('.tab-content').forEach(tab => {
            hideElement(tab);
        });
        
        tabButtons.forEach(btn => {
            btn.classList.remove('text-blue-500');
            btn.classList.add('text-gray-500');
        });
        
        showElement(document.getElementById('qrTab'));
    });
    
    viewMapBtn.addEventListener('click', () => {
        // Mostrar tab de Mapa
        document.querySelectorAll('.tab-content').forEach(tab => {
            hideElement(tab);
        });
        
        tabButtons.forEach(btn => {
            btn.classList.remove('text-blue-500');
            btn.classList.add('text-gray-500');
        });
        
        const mapTabBtn = document.querySelector('[data-tab="mapTab"]');
        showElement(document.getElementById('mapTab'));
        mapTabBtn.classList.remove('text-gray-500');
        mapTabBtn.classList.add('text-blue-500');
    });
    
    randomStoryBtn.addEventListener('click', () => {
        // Mostrar tab de Historia aleatoria
        document.querySelectorAll('.tab-content').forEach(tab => {
            hideElement(tab);
        });
        
        tabButtons.forEach(btn => {
            btn.classList.remove('text-blue-500');
            btn.classList.add('text-gray-500');
        });
        
        showElement(document.getElementById('randomStoryTab'));
    });
    
    travelGuideBtn.addEventListener('click', () => {
        // Mostrar tab de Guía
        document.querySelectorAll('.tab-content').forEach(tab => {
            hideElement(tab);
        });
        
        tabButtons.forEach(btn => {
            btn.classList.remove('text-blue-500');
            btn.classList.add('text-gray-500');
        });
        
        const guideTabBtn = document.querySelector('[data-tab="travelGuideTab"]');
        showElement(document.getElementById('travelGuideTab'));
        guideTabBtn.classList.remove('text-gray-500');
        guideTabBtn.classList.add('text-blue-500');
    });
}
