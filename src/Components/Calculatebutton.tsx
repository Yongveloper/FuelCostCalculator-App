import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../utils/color';

interface ICalculateButtonProps {
  disabled: boolean;
  mileage: string;
  gasMileage: string;
  selectedPrice: string;
  moveToResultScreen: (price: number, fuelVolume: string) => void;
}

function Calculatebutton({
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
    const result = Math.ceil(
      (stringNumberToInt(mileage) / stringNumberToInt(gasMileage)) *
        stringNumberToInt(selectedPrice)
    );

    moveToResultScreen(
      result,
      (result / stringNumberToInt(selectedPrice)).toFixed(3)
    );
  };

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
      onPress={calculate}
    >
      <Text style={[styles.calculationText, disabled && styles.disabled]}>
        계산하기
      </Text>
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
