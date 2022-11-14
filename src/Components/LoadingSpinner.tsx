import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { theme } from '../utils/color';

interface ILoadingSpinnerProps {
  size: 'small' | 'large';
  color: 'black' | 'yellow' | 'grey';
}

function LoadingSpinner({ size, color }: ILoadingSpinnerProps) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={size} color={theme[color]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default LoadingSpinner;
