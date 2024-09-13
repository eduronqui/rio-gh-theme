import chroma from 'chroma-js';
import { getColors } from './colors.js';
import toml from 'smol-toml';

const hex = (color) => chroma(color).hex();

/**
 * Generates the TOML theme file
 * @param {string} theme The name of the theme
 */
export function getTheme(theme) {
  const rawColors = getColors(theme);

  return toml.stringify({
    colors: {
      background: hex(rawColors.canvas.default),
      foreground: hex(rawColors.fg.default),
      'light-foreground': hex(rawColors.fg.muted),
      tabs: hex(rawColors.fg.default),
      'tabs-active': hex(rawColors.fg.muted),
      cursor: hex(rawColors.accent.fg),

      black: hex(rawColors.ansi.black),
      blue: hex(rawColors.ansi.blue),
      cyan: hex(rawColors.ansi.cyan),
      green: hex(rawColors.ansi.green),
      magenta: hex(rawColors.ansi.magenta),
      red: hex(rawColors.ansi.red),
      white: hex(rawColors.ansi.white),
      yellow: hex(rawColors.ansi.yellow),

      'light-black': hex(rawColors.ansi.blackBright),
      'light-blue': hex(rawColors.ansi.blueBright),
      'light-cyan': hex(rawColors.ansi.cyanBright),
      'light-green': hex(rawColors.ansi.greenBright),
      'light-magenta': hex(rawColors.ansi.magentaBright),
      'light-red': hex(rawColors.ansi.redBright),
      'light-white': hex(rawColors.ansi.whiteBright),
      'light-yellow': hex(rawColors.ansi.yellowBright),
    },
  });
}
