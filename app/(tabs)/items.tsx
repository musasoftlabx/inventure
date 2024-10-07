import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import BigList from "react-native-big-list";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function HomeScreen() {
  return (
    <BigList
      data={[
        { label: "1", value: 1 /* ... */ },
        { label: "2", value: 2 /* ... */ },
        { label: "3", value: 3 /* ... */ },
        { label: "4", value: 4 /* ... */ },
        { label: "5", value: 5 /* ... */ },
      ]}
      numColumns={1}
      renderItem={({
        item,
        index,
      }: {
        item: { label: string; value: number };
        index: number;
      }) => (
        <View>
          <Text variant="bodyMedium">{item.label}</Text>
        </View>
      )}
      renderEmpty={() => (
        <View>
          <Text variant="titleLarge" style={{ fontFamily: "Abel" }}>
            Header
          </Text>
        </View>
      )}
      renderHeader={() => (
        <View>
          <Text variant="titleLarge">Header</Text>
        </View>
      )}
      renderFooter={() => (
        <View>
          <Text variant="titleLarge">Footer</Text>
        </View>
      )}
      itemHeight={50}
      headerHeight={50}
      footerHeight={50}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
