// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables from .env files based on modenpm run dev
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      // Add CORS headers for dev server requests to your PHP backend API
        host: 'dev.local', // Listen on all networkin interfaces
        port: 5173,
        strictPort: true,
      headers: {
        'Access-Control-Allow-Origin': env.VITE_API_BASE || 'http://dev.local',
      },
    },
    define: {
      // Pass env vars as constants into your React app
      __APP_NAME__: JSON.stringify(env.VITE_APP_NAME),
    },
  }
})

