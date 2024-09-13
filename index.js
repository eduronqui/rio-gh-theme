import fs from 'node:fs/promises';
import { getTheme } from './src/theme.js';

const lightTheme = getTheme('light');
const darkTheme = getTheme('dark');

fs.mkdir('./themes', { recursive: true })
  .then((path) => {
    path = path || './themes';
    Promise.all([
        fs.writeFile(`${path}/gh-light.toml`, lightTheme),
        fs.writeFile(`${path}/gh-dark.toml`, darkTheme)
    ]);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
