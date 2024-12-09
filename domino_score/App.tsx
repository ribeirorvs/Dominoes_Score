import { Home } from "./src/pages/Home"
import { StatusBar } from 'react-native'
import mobileAds from 'react-native-google-mobile-ads';

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });


export default function App() {
  return (
    <>
      <StatusBar barStyle='default' />
      <Home />
    </>
  )
}
