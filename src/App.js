import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communications from './pages/Communications';
import ReactNativeSVG from './pages/ReactNativeSVG';
import CallAPIVanila from './pages/CallApiVanila';
import CallAPIAxios from './pages/CallApiAxios';
import LocalAPI from './pages/LocalAPI';

// functional component
const App = () => {
  const [isShow, setIsShow] = useState(true);
  // componentDidMount versi Hooks
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communications /> */}
        {/* <ReactNativeSVG /> */}
        {/* <CallAPIVanila /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
