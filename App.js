import React from 'react';
import {ScrollView, View} from 'react-native';

import SampleComponent from './SampleComponent';
import SampleReactNativeComponent from './SampleReactNativeComponent';

// functional component
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <SampleReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
