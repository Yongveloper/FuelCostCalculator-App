import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../utils/color';
import LoadingSpinner from './LoadingSpinner';

interface ICalculateButtonProps {
  loading: boolean;
  disabled: boolean;
  mileage: string;
  gasMileage: string;
  selectedPrice: string;
  moveToResultScreen: (price: number, fuelVolume: string) => void;
}

function Calculatebutton({
  loading,
  mileage,
  gasMileage,
  selectedPrice,
  disabled,
  moveToResultScreen,
}: ICalculateButtonProps) {
  const stringNumberToInt = (stringNumber: string) => {
    return parseInt(stringNumber.replace(/,/g, ''));
  };

  const calculate = () => {
    const expectedPrice = Math.ceil(
      (stringNumberToInt(mileage) / stringNumberToInt(gasMileage)) *
        stringNumberToInt(selectedPrice)
    );

    const expectedFuelVolume = (
      expectedPrice / stringNumberToInt(selectedPrice)
    ).toFixed(3);

    moveToResultScreen(expectedPrice, expectedFuelVolume);
  };

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
      onPress={calculate}
    >
      {loading ? (
        <LoadingSpinner color="grey" size="large" />
      ) : (
        <Text style={[styles.calculationText, disabled && styles.disabled]}>
          계산하기
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: theme.yellow,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  calculationText: {
    color: theme.black,
    fontSize: 26,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: theme.grey,
    color: '#5c5c5c',
  },
});

export default Calculatebutton;
