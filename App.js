import React from 'react';
import {ScrollView, View} from 'react-native';

import SampleComponent from './SampleComponent';
import SampleReactNativeComponent from './SampleReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';

// functional component
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <SampleReactNativeComponent /> */}
        {/* <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
