import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
 tailwindcss(),
     // ✅ correct plugin
  ],

  extend: {
  keyframes: {
    bounce: {
      '0%, 100%': { transform: 'translateY(-10%)' },
      '50%': { transform: 'translateY(0)' },
    },
  },
  animation: {
    bounce: 'bounce 1s infinite',
  },
}

})
