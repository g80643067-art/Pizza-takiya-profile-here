import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, Plugin } from 'vite';

/**
 * Resilient Image Resolver Plugin
 * Guarantees that Netlify builds never crash if any image asset was not
 * committed to Git or has timestamp naming variances.
 */
function resilientImageResolver(): Plugin {
  const imageRegex = /\.(webp|png|jpe?g|svg|gif)$/i;

  return {
    name: 'resilient-image-resolver',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!imageRegex.test(source) || !importer) {
        return null;
      }

      let absPath: string;
      if (source.startsWith('.')) {
        absPath = path.resolve(path.dirname(importer), source);
      } else if (source.startsWith('@/')) {
        absPath = path.resolve(process.cwd(), source.slice(2));
      } else if (source.startsWith('/')) {
        absPath = path.resolve(process.cwd(), source.slice(1));
      } else {
        return null;
      }

      // 1. If file exists on disk as requested, let default resolver bundle it
      if (fs.existsSync(absPath)) {
        return null;
      }

      // 2. If filename has a timestamp (e.g. tomato_pizza_1788759921479.webp), try non-timestamped clean name
      const dir = path.dirname(absPath);
      const base = path.basename(absPath);
      const cleanBase = base.replace(/_\d{10,}\.webp$/i, '.webp');
      const cleanPath = path.join(dir, cleanBase);
      if (fs.existsSync(cleanPath)) {
        return cleanPath;
      }

      // 3. Fallback to categorized base images in src/assets/images
      const imagesDir = path.resolve(process.cwd(), 'src/assets/images');
      if (fs.existsSync(imagesDir)) {
        const lower = base.toLowerCase();
        let fallbackFile = 'cheese_margherita_pizza.webp';
        if (lower.includes('burger')) fallbackFile = 'cheese_burger.webp';
        else if (lower.includes('coke') || lower.includes('drink') || lower.includes('bottle') || lower.includes('dew')) fallbackFile = 'mountain_dew_bottle.webp';
        else if (lower.includes('chai') || lower.includes('tea') || lower.includes('coffee')) fallbackFile = 'kulhad_chai.webp';
        else if (lower.includes('fries') || lower.includes('potato') || lower.includes('bites')) fallbackFile = 'french_fries.webp';
        else if (lower.includes('pasta')) fallbackFile = 'white_pasta.webp';
        else if (lower.includes('sandwich')) fallbackFile = 'cheese_sandwich.webp';
        else if (lower.includes('maggi') || lower.includes('momos')) fallbackFile = 'veg_momos.webp';
        else if (lower.includes('bread') || lower.includes('parcel') || lower.includes('patties')) fallbackFile = 'chilli_garlic_bread.webp';
        else if (lower.includes('ice_cream') || lower.includes('dessert')) fallbackFile = 'bowl_ice_cream.webp';
        else if (lower.includes('combo')) fallbackFile = 'pizza_coke_combo.webp';

        const fallbackPath = path.join(imagesDir, fallbackFile);
        if (fs.existsSync(fallbackPath)) {
          return fallbackPath;
        }

        // Any available webp image in the directory
        const anyWebp = fs.readdirSync(imagesDir).find(f => f.endsWith('.webp'));
        if (anyWebp) {
          return path.join(imagesDir, anyWebp);
        }
      }

      // 4. Guaranteed inline SVG virtual module so the build never fails
      return `\0virtual-fallback-image:${source}`;
    },
    load(id) {
      if (id.startsWith('\0virtual-fallback-image:')) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="#141311"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui,sans-serif" font-size="28" fill="#D8B45A">The Pizza Lover's</text></svg>`;
        const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
        return `export default ${JSON.stringify(dataUrl)};`;
      }
      return null;
    }
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), resilientImageResolver()],
    build: {
      target: 'esnext',
      minify: 'esbuild' as const,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-motion': ['motion/react'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
