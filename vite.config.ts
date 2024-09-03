import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Umbriel',
        short_name: 'Umbriel',
        description: 'App para teste de PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'umbriel.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'umbriel.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});