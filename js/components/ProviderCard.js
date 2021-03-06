import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content,
  List, ListItem,
  Text, Icon,
  Badge, InputGroup,
  Input, Button,
  Card, CardItem,
  Thumbnail} from 'native-base';

import { buttonBgColor, bgColor, fontFamily, fontColorWhite, endpointIP } from '../css/variables'
export default class ProviderCard extends Component {
  render() {
    const { props } = this
    const { provider, handlePress } = props
    return (
      <Card style={styles.card} >
        <CardItem style={styles.cardTitle}>
          <Text style={styles.text}>{provider.name}</Text>
        </CardItem>
        <CardItem cardBody button onPress={handlePress()} style={{alignItems: 'center', justifyContent:'center'}}>
          <Thumbnail source={require('../../lib/imgs/profile1.jpg')} size={100} square/>
        </CardItem>
        <CardItem button onPress={handlePress()} style={{ borderRadius: 5}}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Icon name='md-star' style={{color: '#6103B3', marginLeft: 10, marginRight: 10}}/>
            <Icon name='md-git-network' style={{color: '#6103B3', marginLeft: 10, marginRight: 10}}>{provider.experience}</Icon>
            <Icon name='ios-cash' style={{color: '#6103B3', marginLeft: 10, marginRight: 10}}/>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text note style={styles.listInfo}>4/5</Text>
            <Text note style={styles.listInfo}>xp</Text>
            <Text note style={styles.listInfo}>{provider.rate}</Text>
          </View>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
    padding: 10,
  },
  card: {
    margin: 5,
    flex: 0,
    backgroundColor: '#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  cardTitle: {
    backgroundColor: buttonBgColor,
    borderRadius: 5,
  },
  text: {
    fontFamily: fontFamily,
    color: fontColorWhite,

  },
  listInfo: {
    color: '#000',
    fontSize: 10,
    marginLeft: 17,
    marginRight: 17,
  },
  spacing: {
    marginLeft: 7,
    marginRight: 7,
  },
});
