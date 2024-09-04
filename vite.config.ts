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
        display: 'standalone',
        theme_color: '#FFFFFF',
        "icons": [
          {
            "src": "umbriel.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "umbriel.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "umbriel.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "umbriel.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "umbriel.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ]
});