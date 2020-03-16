import React from 'react';
import { View } from 'react-native';

import { ThemeProvider } from "./components";
import Home from './scenes/Home';

import { LIGHT_THEME, DARK_THEME } from './constants/theme';

export default function App() {
  return (
    <ThemeProvider theme={{ light: LIGHT_THEME, dark: DARK_THEME }}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Home />
      </View>
    </ThemeProvider>
  );
}
