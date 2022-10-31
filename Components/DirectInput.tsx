import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../color';

interface IDirectInputProps {
  selectedOil: string;
  setSelectedOil: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
}

function DirectInput({
  selectedOil,
  setSelectedOil,
  setSelectedPrice,
}: IDirectInputProps) {
  const [value, setValue] = useState('');
  const handleChangeInput = (payload: string) => {
    setValue(payload);
    setSelectedPrice(payload);
  };
  const selectOil = () => setSelectedOil('직접입력');
  console.log('direct input render');
  return (
    <TouchableOpacity onPress={selectOil} style={styles.container}>
      <View style={styles.outSideRadioBtn}>
        {selectedOil === '직접입력' && <View style={styles.insideRadioBtn} />}
      </View>
      <Text style={styles.oilName}>직접입력</Text>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChangeInput}
            keyboardType="numeric"
            placeholder="입력"
            textAlign="right"
            placeholderTextColor="grey"
            onFocus={selectOil}
          />
          <Text style={styles.wonText}>(원/L)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  outSideRadioBtn: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideRadioBtn: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: theme.yellow,
  },
  oilName: {
    color: theme.white,
    fontSize: 20,
    marginHorizontal: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  input: {
    width: 80,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    fontSize: 20,
    color: theme.white,
    marginRight: 6,
  },
  wonText: {
    color: theme.white,
    fontSize: 20,
  },
});

export default DirectInput;
