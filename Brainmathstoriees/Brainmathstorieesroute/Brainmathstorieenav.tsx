import {createStackNavigator} from '@react-navigation/stack';
import Brainmathstorieestabs from '../../Brainmathstorieestabs';
import Brainmathstorieesonb from '../Brainmathstorieesscrns/Brainmathstorieesonb';
import Brainmathstorieeloder from '../Brainmathstorieescpnn/Brainmathstorieeloder';

const Stack = createStackNavigator();

const Brainmathstorieenav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Brainmathstorieeloder"
        component={Brainmathstorieeloder}
      />
      <Stack.Screen
        name="Brainmathstorieesonb"
        component={Brainmathstorieesonb}
      />
      <Stack.Screen
        name="Brainmathstorieestabs"
        component={Brainmathstorieestabs}
      />
    </Stack.Navigator>
  );
};

export default Brainmathstorieenav;
