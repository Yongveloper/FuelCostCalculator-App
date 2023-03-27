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
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, Screens } from '../../App';
import OilListItem from '../Components/OilListItem';
import { theme } from '../utils/color';
import { fetchOilData } from '../utils/api';
import DirectInput from '../Components/DirectInput';
import Calculatebutton from '../Components/Calculatebutton';
import { handleOnlyNumber } from '../utils/onlyNumberFn';

type HomeScreenProps = StackScreenProps<RootStackParamList, Screens.Home>;

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

export default function Home({ navigation }: HomeScreenProps) {
  const [mileage, setMileage] = useState('');
  const [gasMileage, setGasMileage] = useState('');
  const [selectedOil, setSelectedOil] = useState('직접입력');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
  ]);

  const moveToResultScreen = (expectedPrice: number, fuelVolume: string) => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Result', {
        mileage,
        gasMileage,
        oilPrice: selectedPrice,
        expectedPrice,
        fuelVolume,
      });
    }, 500);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleMileageInput = (payload: string) =>
    setMileage(handleOnlyNumber(payload));

  const handleGasMileageInput = (payload: string) =>
    setGasMileage(handleOnlyNumber(payload));

  const checkDisabled = (oilName: string) => {
    if (oils[0].price === null && oilName !== '직접입력') {
      return true;
    } else {
      return false;
    }
  };

  const setRename = (oilName: string) => {
    let name = '';
    switch (oilName) {
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
    return name;
  };

  const handleLoadOilData = async () => {
    try {
      const data: OilData = await fetchOilData();
      const result = data.RESULT.OIL.map((oil) => {
        return {
          name: setRename(oil.PRODNM),
          price: Math.round(parseInt(oil.PRICE)).toLocaleString('ko-KR'),
        };
      });
      setOils(result);
      if (error) {
        setError(false);
      }
    } catch (err) {
      setError(true);
    }
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
            <Text style={styles.baseText}>약</Text>
            <TextInput
              style={styles.input}
              value={mileage}
              onChangeText={handleMileageInput}
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
            <Text style={styles.baseText}>약</Text>
            <TextInput
              style={styles.input}
              value={gasMileage}
              onChangeText={handleGasMileageInput}
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
          {oils[0].price === null ? (
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
          ) : (
            <Text style={{ color: theme.white, fontSize: 18 }}>
              {new Intl.DateTimeFormat('ko-KR', { dateStyle: 'full' }).format(
                new Date()
              )}{' '}
              전국 평균 가격
            </Text>
          )}
          {error && (
            <Text style={styles.errorText}>
              Error: 가격을 불러오지 못했습니다.
            </Text>
          )}
        </View>
        <View>
          {oils.map((oil) => (
            <OilListItem
              key={oil.name}
              oil={oil}
              selectedOil={selectedOil}
              setSelectedOil={setSelectedOil}
              setSelectedPrice={setSelectedPrice}
              disabled={checkDisabled(oil.name)}
            />
          ))}
          <DirectInput
            selectedOil={selectedOil}
            setSelectedOil={setSelectedOil}
            setSelectedPrice={setSelectedPrice}
          />
        </View>
        <Calculatebutton
          loading={loading}
          disabled={!mileage || !gasMileage || !selectedPrice ? true : false}
          mileage={mileage}
          gasMileage={gasMileage}
          selectedPrice={selectedPrice}
          moveToResultScreen={moveToResultScreen}
        />
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
  baseText: {
    color: theme.white,
    fontSize: 20,
    marginRight: 6,
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
    width: 100,
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
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
  },
});
