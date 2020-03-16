import { useContext } from 'react';

import { ThemeContext } from './components/Provider';

export function useTheme() {
  let { colors, mode, setMode } = useContext(ThemeContext);

  let changeTheme = () => setMode(mode === 'light' ? 'dark' : 'light');

  return {
    colors,
    mode,
    changeTheme,
  };
}
