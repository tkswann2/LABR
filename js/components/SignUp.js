import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button, Header } from 'native-base';

import { buttonBgColor } from '../css/variables'
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      cellPhone: '',
      email: '',
      password: '',
      errorMsg: ''
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content style={{width: 300}}>
            <Text note style={styles.helperText}>Basic Info</Text>
              <InputGroup iconLeft disabled>
                  <Icon name='ios-person' />
                  <Input inlineLabel label='NAME' placeholder='NAME' disabled={true} />
              </InputGroup>
              <InputGroup >
                  <Input
                    placeholder='Jane'
                    onChangeText={(txt) => this.firstNameChanged(txt)}
                    autoCapitalize="none"/>
              </InputGroup>
              <InputGroup >
                  <Input
                    placeholder='Doe'
                    onChangeText={(txt) => this.lastNameChanged(txt)}
                    autoCapitalize="none"/>
              </InputGroup>
              <InputGroup >
                  <Icon name='md-call' />
                  <Input
                    inlineLabel
                    label='PHONE'
                    placeholder='CELL'
                    onChangeText={(txt) => this.phoneChanged(txt)}
                    keyboardType="numeric"
                    autoCapitalize="none" />
              </InputGroup>
              <InputGroup>
                  <Icon name='ios-mail' />
                  <Input
                    placeholder='EMAIL*'
                    onChangeText={(txt) => this.emailChanged(txt)}
                    keyboardType="email-address"
                    autoCapitalize="none" />
              </InputGroup>
              <InputGroup>
                  <Icon name='ios-unlock' />
                  <Input
                    placeholder='PASSWORD*'
                    secureTextEntry={true}
                    onChangeText={(txt) => this.passwordChanged(txt)}
                    autoCapitalize="none"/>
              </InputGroup>
            <Text note style={styles.helperText2}>*These will be used to login</Text>
          <Button block success style={styles.button} onPress={() => this.consoleLog()}>Submit</Button>
        </Content>
      </Container>
    )
  }

  firstNameChanged(txt) {
    this.setState({ firstName: txt })
  }
  lastNameChanged(txt) {
    this.setState({ lastName: txt })
  }
  phoneChanged(num) {
    this.setState({ cellPhone: num })
  }
  emailChanged(num) {
    this.setState({ email: num })
  }
  passwordChanged(num) {
    this.setState({ password: num })
  }
  consoleLog() {
    console.log(this.state)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    top: 20,
    backgroundColor: buttonBgColor,
  },
  helperText: {
    fontSize: 13,
    margin: 5,
  },
  helperText2: {
    fontSize: 10,
    margin: 5,
    opacity: .7,
    left: 55,
  },
});
