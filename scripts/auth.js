// Lógica de autenticación
import { showElement, hideElement } from './utils.js';

export function initAuth() {
    const permissionsModal = document.getElementById('permissionsModal');
    const grantPermissionsBtn = document.getElementById('grantPermissions');
    const denyPermissionsBtn = document.getElementById('denyPermissions');
    const authModal = document.getElementById('authModal');
    const app = document.getElementById('app');
    const loginError = document.getElementById('loginError');
    const logoutBtn = document.getElementById('logoutBtn');

    // Mostrar modal de permisos al cargar
    showElement(permissionsModal);

    // Aceptar permisos
    grantPermissionsBtn.addEventListener('click', () => {
        hideElement(permissionsModal);
        showElement(authModal);
    });

    // Denegar permisos
    denyPermissionsBtn.addEventListener('click', () => {
        hideElement(permissionsModal);
        showElement(authModal);
    });

    // Login con Google
    document.getElementById('googleLogin').addEventListener('click', () => {
        hideElement(authModal);
        showElement(app);
    });

    // Login con email
    document.getElementById('emailLogin').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validación simple
        if(email && password) {
            hideElement(authModal);
            showElement(app);
        } else {
            showElement(loginError);
        }
    });

    // Cambiar a registro
    document.getElementById('switchToSignup').addEventListener('click', () => {
        alert('Funcionalidad de registro no implementada en este demo');
    });

    // Botón de logout
    logoutBtn.addEventListener('click', () => {
        hideElement(app);
        showElement(authModal);
    });
}
