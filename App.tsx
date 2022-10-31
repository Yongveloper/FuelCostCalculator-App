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
import { fetchOilData } from './api';

const oliList = ['고급 휘발유', '경유', '휘발유', '등유', 'LPG', '직접입력'];

interface OilInfo {
  TRADE_DT: string;
  PRODCD: string;
  PRODNM: string;
  PRICE: string;
  DIFF: string;
}

interface OilData {
  RESULT: {
    OIL: OilInfo[];
  };
}

export interface IOils {
  name: string;
  price: string | null;
}

export default function App() {
  const [selectedOil, setSelectedOil] = useState('직접입력');
  const [loading, setLoading] = useState(false);
  const [oils, setOils] = useState<IOils[]>([
    {
      name: '고급 휘발유',
      price: null,
    },
    {
      name: '경유',
      price: null,
    },
    {
      name: '휘발유',
      price: null,
    },
    {
      name: '등유',
      price: null,
    },
    {
      name: 'LPG',
      price: null,
    },
    {
      name: '직접입력',
      price: null,
    },
  ]);

  const checkDisabled = (oilName: string) => {
    if (oils[0].price === null && oilName !== '직접입력') {
      return true;
    } else {
      return false;
    }
  };

  const handleLoadOilData = async () => {
    setLoading(true);
    const data: OilData = await fetchOilData();
    setLoading(false);
    const oilList = data.RESULT.OIL.map((oil) => {
      let name = '';
      switch (oil.PRODNM) {
        case '고급휘발유':
          name = '고급 휘발유';
          break;
        case '자동차용경유':
          name = '경유';
          break;
        case '휘발유':
          name = '휘발유';
          break;
        case '실내등유':
          name = '등유';
          break;
        case '자동차용부탄':
          name = 'LPG';
          break;
      }
      return {
        name,
        price: Math.round(parseInt(oil.PRICE)).toLocaleString('ko-KR'),
      };
    });
    const result = [...oilList, { name: '직접입력', price: null }];
    setOils(result);
  };

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
          {oils[0].price === null && (
            <>
              <Text style={{ color: theme.white, fontSize: 18 }}>
                현재 날짜 기준 전국 주유소 평균 가격 불러오기
              </Text>
              <TouchableOpacity onPress={handleLoadOilData}>
                <Ionicons
                  name="ios-reload-circle"
                  size={42}
                  color={theme.yellow}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View>
          {oils.map((oil) => (
            <OilListItem
              key={oil.name}
              oil={oil}
              selectedOil={selectedOil}
              setSelectedOil={setSelectedOil}
              disabled={checkDisabled(oil.name)}
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
