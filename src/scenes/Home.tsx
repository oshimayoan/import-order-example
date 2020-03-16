import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Text,
} from 'react-native';

import { Button } from '../components';

import { useTheme } from '../useTheme';

const IMAGES = [
  'https://images.unsplash.com/photo-1531688335250-6fad807d3374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1552434220-a95c95de26f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1559567319-f8f1992e5516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

export default function Home() {
  let { colors } = useTheme();
  let [name, setName] = useState('');
  let [width, setWidth] = useState(500);

  return (
    <View
      onLayout={(event) => {
        let { layout } = event.nativeEvent;
        setWidth(layout.width);
      }}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Button text="Change Theme" />
        <Text style={{ color: colors.text, marginVertical: 20 }}>
          Open up App.tsx to start working on your app!
        </Text>
        <TextInput
          placeholder="Your name here"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            borderColor: colors.text,
            padding: 15,
            width: 250,
            color: colors.text,
          }}
        />
      </View>
      <FlatList
        horizontal
        pagingEnabled
        keyExtractor={(item) => item}
        data={IMAGES}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              resizeMode="cover"
              style={{ width, height: 250 }}
            />
          );
        }}
        style={{ marginVertical: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
