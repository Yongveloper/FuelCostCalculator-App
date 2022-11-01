import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Result from './src/Screens/Result';

export enum Screens {
  Home = 'Home',
  Result = 'Result',
}

export type RootStackParamList = {
  Home: undefined;
  Result: {
    mileage: string;
    gasMileage: string;
    oilPrice: string;
    expectedPrice: number;
    fuelVolume: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.Result}
          component={Result}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
