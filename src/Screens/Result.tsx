import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, Screens } from '../../App';
import { theme } from '../utils/color';
import { handleOnlyNumber } from '../utils/onlyNumberFn';

export type ResultScreenProps = StackScreenProps<
  RootStackParamList,
  Screens.Result
>;

export default function Result({ navigation, route }: ResultScreenProps) {
  const { mileage, gasMileage, oilPrice, expectedPrice, fuelVolume } =
    route.params;

  return (
    <View style={styles.container}>
      <View style={styles.smallTextContainer}>
        <Text style={styles.smallTitle}>운행 거리:</Text>
        <Text style={styles.smallText}>{mileage} (km)</Text>
      </View>
      <View style={styles.smallTextContainer}>
        <Text style={styles.smallTitle}>차량 평균 연비:</Text>
        <Text style={styles.smallText}>{gasMileage} (km/L)</Text>
      </View>
      <View style={styles.smallTextContainer}>
        <Text style={styles.smallTitle}>유류 가격:</Text>
        <Text style={styles.smallText}>
          {Number(handleOnlyNumber(oilPrice)).toLocaleString('ko-KR')} (원/L)
        </Text>
      </View>
      <View style={styles.bigTextContainer}>
        <Text style={styles.bigTitle}>예상 주유량은</Text>
        <Text style={styles.BigText}>약 {fuelVolume}L</Text>
        <Text style={styles.bigTitle}>입니다.</Text>
      </View>
      <View style={styles.bigTextContainer}>
        <Text style={styles.bigTitle}>예상 주유 금액은</Text>
        <Text style={styles.BigText}>
          약{' '}
          {Number(handleOnlyNumber(String(expectedPrice))).toLocaleString(
            'ko-KR'
          )}
          원
        </Text>
        <Text style={styles.bigTitle}>입니다.</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>다시 계산하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bodyBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  smallTitle: {
    color: theme.yellow,
    fontSize: 24,
    marginRight: 8,
  },
  smallText: {
    color: theme.white,
    fontSize: 20,
  },
  bigTextContainer: {
    alignItems: 'center',
    marginTop: 18,
  },
  bigTitle: {
    color: theme.yellow,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  BigText: {
    color: theme.white,
    fontSize: 30,
    fontWeight: '600',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: theme.yellow,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: theme.black,
    fontSize: 26,
    fontWeight: '600',
  },
});
