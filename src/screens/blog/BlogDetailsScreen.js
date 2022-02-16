import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Card, Button, Icon} from 'react-native-elements';
import Menu from '../Menu/Menu';
import axios from 'axios';
import {WebView} from 'react-native-webview';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BlogDetailsScreen() {
  const [modelvisible, setModelvisible] = useState(false);
  const navigation = useNavigation();
  const [userData] = useState(useSelector(state => state.usr.userData));
  const [showMenu, setShowMenu] = useState(false);
  const [news, setNews] = useState([]);
  const [posts, setPosts] = useState([]);
  const [swipe, setSwipe] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [content, setContenet] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  console.log('neeeeeeeewwwwssss', categoryId);
  const instance = axios.create({
    baseURL: 'https://demo.ucheed.com/matc/wp-json/wp/v2',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get('/categories');
        console.log('News Data', response.data);
        const BlogsData =
          response.data &&
          response.data.map(item => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setCategoryId(item.id);
                    fetchPosts(item.id);
                  }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'black',

                    fontWeight: 'bold',
                  }}>
                  {' | '}
                </Text>
              </>
            );
          });

        setNews(BlogsData);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchPosts(categoryId) {
      try {
        const response = await instance.get(
          categoryId
            ? `/posts/?categories=${categoryId}&&per_page=10`
            : `/posts`,
        );
        console.log('iddddddddddd', categoryId);
        const Postscards =
          response.data &&
          response.data.map(item => {
            return (
              <View style={{marginHorizontal: 30}}>
                <Card>
                  <View
                    style={{
                      height: 300,
                      borderColor: '#5bd8cc',
                      borderWidth: 2,
                      margin: -17,
                      padding: 18,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 20,
                      }}>
                      <Card.Title
                        style={{marginTop: 20, fontSize: 20, width: 140}}>
                        {item.title.rendered}
                      </Card.Title>
                      <Card.Image
                        style={{padding: 20, height: 90, width: 90}}
                        source={{uri: item.featured_image_url}}
                      />
                    </View>
                    <View style={{height: 100}}>
                      <WebView
                        style={{
                          backgroundColor: 'transparent',

                          width: '100%',
                          height: '120%',
                        }}
                        originWhitelist={['*']}
                        textZoom={350}
                        source={{html: `${item.excerpt.rendered}`}}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setModelvisible(true);
                        setContenet(item.content.rendered);
                        setTitle(item.title.rendered);
                        setImage(item.featured_image_url);
                      }}
                      style={{alignItems: 'center', marginBottom: 35}}>
                      <Text style={{color: '#df1111', marginTop: 15}}>
                        Read More
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              </View>
            );
          });

        setPosts(Postscards);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    fetchPosts(categoryId);
  }, [userData]);
  const checkoutModelContent = navigation => {
    // const navigation = useNavigation();
    return (
      <View
        style={
          swipe === false
            ? {
                width: '100%',
                height: '60%',
                padding: 10,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                position: 'absolute',
                backgroundColor: '#ffff',
                bottom: 0,
              }
            : {
                width: '100%',
                height: '100%',
                padding: 10,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                position: 'absolute',
                backgroundColor: '#ffff',
                bottom: 0,
              }
        }>
          <View style={{position:"absolute",top:10,left:20}}>
        <Icon
          onPress={() => setModelvisible(false)}
          name="cancel"
          type="materialicons"
          color="#111"
          size={30}
        /></View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold',padding:30}}>{title}</Text>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: `${image}`,
          }}
        />
        <WebView
          style={{
            backgroundColor: 'transparent',
            margin: 15,
            width: '90%',
          }}
          originWhitelist={['*']}
          textZoom={350}
          source={{html: `${content}`}}
        />
      </View>
    );
  };

  return (
    <>
      <GestureRecognizer
        style={{flex: 1}}
        onSwipeDown={() => setSwipe(false)}
        onSwipeUp={() => setSwipe(true)}>
        <Modal
        
          animationType="slide"
          visible={modelvisible}
          transparent={true}
          onRequestClose={() => setModelvisible(false)}>
          {checkoutModelContent(navigation)}
        </Modal>
      </GestureRecognizer>
      <StatusBar hidden={true} />

      <View style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.name}>BLOG</Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 30,
              backgroundColor: '#CED1CB',
              padding: 12,
              marginHorizontal: 10,
            }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {news}
            </ScrollView>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: '78%', marginTop: '-20%'}}>
          <View>{posts && posts}</View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5bd8cc',
    width: '100%',
    height: windowHeight * 0.36,
    flexDirection: 'column',
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 280,
    height: 280,
    marginLeft: 45,
  },

  logo: {
    resizeMode: 'contain',
    width: windowWidth * 0.3,
    height: windowHeight * 0.2,
    alignSelf: 'center',
  },
  name: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  welcome: {
    marginTop: 5,
    alignSelf: 'center',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  icon: {
    padding: 10,
    width: windowWidth / 4.5,
    height: windowHeight / 13,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  icon_container: {
    width: windowWidth / 3,
    height: windowHeight / 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});
