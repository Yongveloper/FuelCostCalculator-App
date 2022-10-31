import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../color';

interface ICalculateButtonProps {
  disabled: boolean;
}

function Calculatebutton({ disabled }: ICalculateButtonProps) {
  return (
    <TouchableOpacity style={styles.button} disabled={disabled}>
      <Text style={styles.calculationText}>계산하기</Text>
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
    fontSize: 28,
  },
});

export default Calculatebutton;
