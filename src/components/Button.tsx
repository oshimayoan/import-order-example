import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import color from 'color';

import { useTheme } from '../useTheme';

export default function Button({ text }: { text: string }) {
  let { colors, changeTheme } = useTheme();

  let textColor = color(colors.primary).isLight() ? '#474A57' : '#FFFFFF';

  return (
    <TouchableOpacity
      onPress={changeTheme}
      style={{ backgroundColor: colors.primary, padding: 10 }}
    >
      <Text style={{ color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
}
