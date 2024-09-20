import { 
  Text, 
  View,
  FlatList, 
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Link } from 'expo-router';
import { CustomeCard } from '@/assets/components/Card';

export default function Index() {
  const data =[
    {id:'1', 
    label:'Personal',
    description:'this my personal information', 
    path:'/personal'
  },
    {id:'2', 
    label:'Experience', 
    description:'This my experience',
    path:'/experience'
  },
    {id:'3',
     label:'Education',
     description:'This my education',
      path:'/education'
    },
    {id:'4', 
    label:'Certificate', 
    path:'/certificate'
  },
   
  ];
  return (
    <ScrollView>
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
        <FlatList 
        data={data}
        renderItem={({item}) =>  <CustomeCard 
                  nama={item.label} 
                  description={item.description}
                  path={item.path}
                />
              }
        keyExtractor={item => item.id}
        />
      </View>
    </View>
    </ScrollView>
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
