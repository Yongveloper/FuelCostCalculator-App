import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import OilListItem from './Components/OilListItem';
import { theme } from './color';

const oliList = ['고급 휘발유', '휘발유', '경유', '등유', 'LPG', '직접입력'];

export default function App() {
  const [selectedOil, setSelectedOil] = useState('직접입력');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
          <Text style={{ color: theme.white, fontSize: 18 }}>
            현재 날짜 기준 전국 주유소 평균 가격 불러오기
          </Text>
          <Ionicons name="ios-reload-circle" size={42} color="#D9C832" />
        </View>
        <View>
          {oliList.map((oil) => (
            <OilListItem
              key={oil}
              oil={oil}
              selectedOil={selectedOil}
              setSelectedOil={setSelectedOil}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.calculationText}>계산하기</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bodyBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  inputTitle: {
    color: theme.yellow,
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    position: 'relative',
    width: 150,
    borderBottomColor: theme.black,
    borderBottomWidth: 3,
    fontSize: 20,
    color: theme.white,
    marginRight: 6,
  },
  unitText: {
    position: 'absolute',
    color: theme.white,
    fontSize: 16,
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
  calculationText: {
    color: theme.black,
    fontSize: 28,
  },
});
