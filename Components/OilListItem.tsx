import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface IOilListItemProps {
  oil: string;
  selectedOil: string;
  setSelectedOil: React.Dispatch<React.SetStateAction<string>>;
}

function OilListItem({ oil, selectedOil, setSelectedOil }: IOilListItemProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton
        value={oil}
        status={selectedOil === oil ? 'checked' : 'unchecked'}
        uncheckedColor="blue"
        onPress={() => setSelectedOil(oil)}
        color="#D9C832"
      />
      <Text style={{ color: 'white', fontSize: 18 }}>{oil}</Text>
    </View>
  );
}

export default OilListItem;
