import { memo } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { IOils } from '../App';
import { theme } from '../color';

interface IOilListItemProps {
  oil: IOils;
  selectedOil: string;
  setSelectedOil: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}

function OilListItem({
  oil,
  selectedOil,
  setSelectedOil,
  disabled,
}: IOilListItemProps) {
  const selectOil = () => setSelectedOil(oil.name);
  console.log('render');
  return (
    <TouchableOpacity
      onPress={selectOil}
      style={styles.container}
      disabled={disabled}
    >
      <View
        style={[
          styles.outSideRadioBtn,
          disabled && styles.disabledOutSideRadioBtn,
        ]}
      >
        {oil.name === selectedOil && <View style={styles.insideRadioBtn} />}
      </View>
      <Text style={[styles.oilName, disabled && styles.disalbedText]}>
        {oil.name}
      </Text>
      <View>
        {oil.name === '직접입력' ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="입력"
              textAlign="right"
              placeholderTextColor="grey"
              onFocus={selectOil}
            />
            <Text style={[styles.wonText, disabled && styles.disalbedText]}>
              (원/L)
            </Text>
          </View>
        ) : (
          <Text style={[styles.wonText, disabled && styles.disalbedText]}>
            (약 {oil.price !== null ? oil.price : '----'}원/L)
          </Text>
        )}
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
  disabledOutSideRadioBtn: {
    borderColor: theme.grey,
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
  disalbedText: {
    color: theme.grey,
  },
});

export default memo(OilListItem);
