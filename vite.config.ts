import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL relative pour supporter les sous-dossiers GitHub Pages
  base: './', 
  define: {
    // EMPÊCHE LE CRASH: Remplace process.env par un objet vide ou sécurisé pour le navigateur
    'process.env': JSON.stringify(process.env || {})
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});