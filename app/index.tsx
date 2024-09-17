import { 
  Text, 
  View, 
  StyleSheet,
  Image
} from "react-native";
import { Link } from 'expo-router';
import { CustomeCard } from '@/assets/components/Card';

export default function Index() {
  return (
    <View>
      <View style={style.container}>
        <Image 
          style={style.tinyLogo} 
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={style.textName}>
          Vicky Firmansyah
        </Text>
        <Text style={[style.subText, style.textWhite]}>
          Sigma@gmail.com
        </Text>
        <Link href="/experience">Experience</Link>
      </View>
      <View style={style.border}>
        <CustomeCard nama="Vicky" />
        <CustomeCard nama="Jojo" />
        <CustomeCard nama="Jabar" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 250,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  textName: {
    color: "white",
    fontSize: 24
  },
  subText: {
    fontSize: 14
  },
  textWhite: {
    color: "white"
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  border: {
    top: -25,
    paddingLeft: 20,
    paddingRight: 25
  }
});
