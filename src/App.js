import React, {useEffect} from 'react';
import AppNavigation from './navigation/AppNavigation';
// import BootSplash from 'react-native-bootsplash';

const App = () => {
  //   useEffect(() => {
  //     const init = async () => {};
  //     init().finally(async () => {
  //       await BootSplash.hide({fade: true});
  //       console.log('Bootsplash hiden successfully !');
  //     });
  //   }, []);
  return <AppNavigation />;
};

export default App;
