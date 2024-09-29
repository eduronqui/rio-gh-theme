import chroma from 'chroma-js';
import { getColors } from './colors.js';
import toml from 'smol-toml';

const hex = (color) => chroma(color).hex();

/**
 * Generates the TOML theme file
 * @param {string} theme The name of the theme
 * @param {boolean} highContrast Whether the theme is high contrast or not
 */
export function getTheme(theme) {
  const rawColors = getColors(theme);

  // eslint-disable-next-line no-unused-vars
  const unknown = hex(rawColors.ansi.magenta);

  return toml.stringify({
    colors: {
      background: hex(rawColors.canvas.default),
      foreground: hex(rawColors.fg.default),

      // selection
      'selection-background': hex(rawColors.accent.fg),
      'selection-foreground': hex(rawColors.fg.onEmphasis),

      // navigation
      'tabs-active': hex(rawColors.fg.default),
      'tabs-foreground': hex(rawColors.fg.muted),
      'tabs-active-highlight': hex(rawColors.primer.border.active),
      bar: hex(rawColors.canvas.default),
      cursor: hex(rawColors.accent.fg),
      'vi-cursor': hex(rawColors.accent.fg),

      // search
      'search-match-background': hex(rawColors.scale.yellow[1]),
      'search-match-foreground': hex(rawColors.fg.default),
      'search-focused-match-background': hex(rawColors.attention.emphasis),
      'search-focused-match-foreground': hex(rawColors.fg.default),

      // regular colors
      black: hex(rawColors.ansi.black),
      blue: hex(rawColors.ansi.blue),
      cyan: hex(rawColors.ansi.cyan),
      green: hex(rawColors.ansi.green),
      magenta: hex(rawColors.ansi.magenta),
      red: hex(rawColors.ansi.red),
      white: hex(rawColors.ansi.white),
      yellow: hex(rawColors.ansi.yellow),

      // light colors
      'light-black': hex(rawColors.ansi.blackBright),
      'light-blue': hex(rawColors.ansi.blueBright),
      'light-cyan': hex(rawColors.ansi.cyanBright),
      'light-green': hex(rawColors.ansi.greenBright),
      'light-magenta': hex(rawColors.ansi.magentaBright),
      'light-red': hex(rawColors.ansi.redBright),
      'light-white': hex(rawColors.ansi.whiteBright),
      'light-yellow': hex(rawColors.ansi.yellowBright),
      'light-foreground': hex(rawColors.fg.muted),
    },
  });
}
