import { defineNitroConfig } from "nitropack";
import {
  defineConfig, presetUno, presetAttributify, presetIcons,
  presetTypography,
} from 'unocss'


export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({scale: 1.2}),
    presetTypography()
  ]
})
