import { Text, View } from "react-native";
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { Input } from '@rneui/themed';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá</Text>
        <Button title="Solid" />

        <Button radius={"sm"} type="solid">
          Save
          <Icon name="save" color="white" />
        </Button>

        
    </View>
  );
}