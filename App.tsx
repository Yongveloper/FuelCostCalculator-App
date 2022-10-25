import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ alignItems: 'center', marginVertical: 12 }}>
        <Text style={styles.inputTitle}>운행할 거리</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="입력"
            textAlign="right"
            placeholderTextColor="grey"
          />
          <Text style={{ ...styles.unitText, right: -35 }}>(km)</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginVertical: 12 }}>
        <Text style={styles.inputTitle}>차량 평균 연비</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="입력"
            textAlign="right"
            placeholderTextColor="grey"
          />
          <Text style={{ ...styles.unitText, right: -49 }}>(km/L)</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginVertical: 12 }}>
        <Text style={styles.inputTitle}>유류 가격</Text>
        <Text style={{ color: 'white', fontSize: 18 }}>
          현재 날짜 기준 전국 주유소 평균 가격 불러오기
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  inputTitle: {
    color: '#D9C832',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    position: 'relative',
    width: 150,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    fontSize: 20,
    color: 'white',
    marginRight: 6,
  },
  unitText: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
  },
});
