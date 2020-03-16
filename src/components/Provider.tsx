import React, { useState, createContext, ReactNode } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { Theme, LIGHT_THEME } from '../constants/theme';

export const ThemeContext = createContext({
  colors: LIGHT_THEME,
  mode: 'light',
  setMode: (mode: keyof Theme) => {},
});

export type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

export default function ThemeProvider(props: ThemeProviderProps) {
  let { children, theme } = props;
  let colorScheme = useColorScheme();
  console.log('OS theme', colorScheme);

  let initialMode = (colorScheme === 'dark' ? 'dark' : 'light') as keyof Theme;
  let [mode, setMode] = useState<keyof Theme>(initialMode);

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={{ colors: theme[mode], mode, setMode }}>
        {children}
      </ThemeContext.Provider>
    </AppearanceProvider>
  );
}
