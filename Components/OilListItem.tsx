import { memo } from 'React';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../color';

interface IOilListItemProps {
  oil: string;
  selectedOil: string;
  setSelectedOil: React.Dispatch<React.SetStateAction<string>>;
}

function OilListItem({ oil, selectedOil, setSelectedOil }: IOilListItemProps) {
  const SelectOil = () => setSelectedOil(oil);

  return (
    <TouchableOpacity onPress={SelectOil} style={styles.container}>
      <View style={styles.outSideRadioBtn}>
        {oil === selectedOil && <View style={styles.insideRadioBtn} />}
      </View>
      <Text style={styles.oilName}>{oil}</Text>
      <View>
        {oil === '직접입력' ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="입력"
              textAlign="right"
              placeholderTextColor="grey"
              onFocus={SelectOil}
            />
            <Text style={styles.wonText}>(원/L)</Text>
          </View>
        ) : (
          <Text style={styles.wonText}>(약 ----원/L)</Text>
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

export default memo(OilListItem);
