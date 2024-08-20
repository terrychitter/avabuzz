import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      workbox: {
        globPatterns: ['**/*']
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        name: "Avabuzz",
        short_name: "Avabuzz",
        description: "Avabuzz is a social media platform for Avakin Life players alike.",
        start_url: "/",
        theme_color: "#171717",
        background_color: "#171717",
        orientation: "portrait-primary",
        display: "standalone",
        icons: [
          {
            "src": "/icons/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/icons/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/icons/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icons/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true
  },
  server: {
    port: 9091,
    host: true 
  },
  optimizeDeps: {
    exclude: ['date-fns']
  }
})
