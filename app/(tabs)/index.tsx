import { Image, StyleSheet, Platform, View } from "react-native";

import { Button, Text, TextInput, useTheme } from "react-native-paper";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

import { Checkbox, Switch } from "react-native-paper";
import { useState } from "react";
import BigList from "react-native-big-list";

export default function HomeScreen() {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("gdfbb");

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const data = [
    { label: "1", value: 1 /* ... */ },
    { label: "2", value: 2 /* ... */ },
    { label: "3", value: 3 /* ... */ },
    { label: "4", value: 4 /* ... */ },
    { label: "5", value: 5 /* ... */ },
  ];

  return (
    <SafeAreaView
      style={
        {
          //backgroundColor: theme.colors.backdrop,
        }
      }
    >
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

      <Checkbox.Item
        label="Item"
        status={checked ? "checked" : "unchecked"}
        position="leading"
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <View style={styles.titleContainer}>
        <Text variant="displayLarge">Display Large</Text>

        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>

        <BigList
          data={data}
          numColumns={1} // Set the number of columns
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
              <Text variant="titleLarge">Header</Text>
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
          headerHeight={90}
          footerHeight={100}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
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
