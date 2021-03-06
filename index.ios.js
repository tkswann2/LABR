import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router, Route, Actions } from 'react-native-router-flux'
import { Button, Icon, Text } from 'native-base'
import { navColor } from './js/css/variables'
// Components:
  // smart
import App from './js/containers/App'
import Locations from './js/containers/Locations'
import Category from './js/containers/Category'
import Providers from './js/containers/Providers'
import Jobs from './js/containers/Jobs'
import BusinessProfile from './js/containers/BusinessProfile'
import History from './js/containers/History'
import Chat from './js/containers/Chat'
  // dumb
import SignUp from './js/components/SignUp'
import Login from './js/components/Login'
import StartConvo from './js/components/StartConvo'
import ProviderSignup from './js/components/ProviderSignup'


export default class LABR extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={styles.navbar} >
          <Scene key='app' component={App} initial={true} renderTitle={() => this.renderTitle('labr')} />
          <Scene key='locations' component={Locations} renderTitle={() => this.renderTitle('locations')}/>
          <Scene key='category' component={Category} renderTitle={() => this.renderTitle('categories')} />
          <Scene key='providers' component={Providers} renderTitle={() => this.renderTitle('providers')} />
          <Scene key='signup' component={SignUp} renderTitle={() => this.renderTitle('signup')} />
          <Scene key='login' component={Login} renderTitle={() => this.renderTitle('login')} />
          <Scene key='providersignup' component={ProviderSignup} renderTitle={() => this.renderTitle('register')} />
          <Scene key='businessprofile' component={BusinessProfile} renderTitle={() => this.renderTitle('profile')} />
          <Scene key='startconvo' component={StartConvo} renderTitle={() => this.renderTitle('new job')} />
          <Scene key='jobs' component={Jobs} renderTitle={() => this.renderTitle('jobs')} />
          <Scene key='history' component={History} renderTitle={() => this.renderTitle('history')} />
          <Scene key='chat' component={Chat} renderTitle={() => this.renderTitle('chat')} />
        </Scene>
      </Router>
    )
  }
  renderTitle(title) {
    const upperCaseTitle = title.toUpperCase()
    return (
      <View style={styles.title}>
        <Text style={{fontFamily: 'nevis', color: 'white', fontSize: 21, fontWeight: '800'}}>{upperCaseTitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: navColor,
    height: 60,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
})



AppRegistry.registerComponent('LABR', () => LABR);
