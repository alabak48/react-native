import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';

export function HomeScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState([]);

  function handleHomePress() {
    navigation.navigate('Home');
  }
  const getData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.wrap}>
                <View style={styles.header}>
                  <View>
                    <Image
                      style={styles.image}
                      source={{ uri: `${item.picture.medium}` }}
                    />
                  </View>
                  <View>
                    <Text style={styles.title}>
                      {item.name.first}
                    </Text>
                    <Text style={styles.title}>
                      {item.name.last}
                    </Text>
                    <Text style={styles.itemTitle}>
                      {item.gender}, {item.dob.age}
                    </Text>
                    <Text style={styles.itemTitle}>
                      Age registered: {item.registered.age}
                    </Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.itemName}>Adresa:</Text>
                  <Text style={styles.item}>
                    {item.location.street.name} {item.location.street.number},{' '}
                    {item.location.postcode} {item.location.city},{' '}
                    {item.location.state}, {item.location.country}
                  </Text>
                </View>

                <View>
                  <Text style={styles.itemName}>Mail:</Text>
                  <Text style={styles.item}>{item.email}</Text>
                </View>

                <View>
                  <Text style={styles.itemName}>Login:</Text>
                  <Text style={styles.item}>
                    {' '}
                    Username: {item.login.username}
                  </Text>
                  <Text style={styles.item}>
                    {' '}
                    Password: {item.login.password}
                  </Text>
                </View>

                <View>
                  <Text style={styles.itemName}>Contact:</Text>
                  <Text style={styles.item}> Phone: {item.phone}</Text>
                  <Text style={styles.item}> Cell: {item.cell}</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
  },
  itemTitle: {
    margin: 10,
    textAlign: 'left',
    marginLeft: 30,
    fontWeight: 300,
    fontSize: 16,
    fontStyle: 'italic'
  },
  image: {
    width: 100,
    height: 150,
    paddingLeft: 50,
    borderRadius: 20,
  },
  wrap: {
    padding: 20,
    
  },
   item: {
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: 250
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 3,
    padding: 20,
    borderBottomColor: "#B9B7BD",
  },
  itemName: {
    color: "#43030c",
    fontWeight: "medium",
    paddingTop: 1,
    fontSize: 16,
    marginLeft: 1,
    backgroundColor: "#f8f7f7"
  }
});