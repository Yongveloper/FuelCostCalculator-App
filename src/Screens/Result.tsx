import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, Screens } from '../../App';

export type ResultScreenProps = StackScreenProps<
  RootStackParamList,
  Screens.Result
>;
function Result({ route }: ResultScreenProps) {
  const { price, fuelVolume } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        예상금액:{price} 주유량:{fuelVolume}
      </Text>
    </View>
  );
}

export default Result;
