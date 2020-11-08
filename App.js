import React from 'react';
import {ScrollView, View} from 'react-native';

import SampleComponent from './SampleComponent';
import SampleReactNativeComponent from './SampleReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';

// functional component
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <SampleReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
