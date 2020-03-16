const LIGHT_THEME = {
  background: '#FFFFFF',
  text: '#474A57',
  primary: '#B35F7E',
};

const DARK_THEME = {
  background: '#474A57',
  text: '#FFFFFF',
  primary: '#CA9C98',
};

type Theme = {
  light: typeof LIGHT_THEME;
  dark: typeof LIGHT_THEME;
};

export { Theme, LIGHT_THEME, DARK_THEME };
