// Workaround needed while importing json is not supported on es modules
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url);

const themes = {
    light: require('@primer/primitives/dist/json/colors/light.json'),
    dark: require('@primer/primitives/dist/json/colors/dark.json')
}

/**
 * Get the colors for a given theme
 * @param {string} theme The name of the base theme
 */
export function getColors(theme) {
    const colors = themes[theme];
    if(!colors) throw new Error(`Missing colors for theme "${theme}"`);

    return colors;
}
