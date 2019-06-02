import { PermissionsAndroid } from "react-native";
export default async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      // ,
      // {
      //   title: "NasNav",
      //   message: "NasNav App need access to your location "
      //   // buttonNeutral: "Ask Me Later",
      //   // buttonNegative: "Cancel",
      //   // buttonPositive: "OK"
      // }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("location permission denied");
      alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
