import { defineNitroConfig } from "nitropack";
import {
  defineConfig, presetUno, presetAttributify, presetIcons,
  presetTypography,
} from 'unocss'


export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography()
  ],
  shortcuts: [
    ['heading', 'text-lg sm:text-xl md:text-2xl lg:text-3xl']
  ],
  theme: {
    colors: {
      'pri-purple': 'purple-700 dark:purple-600'
    }
  }
})
