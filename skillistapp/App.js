import React, { Component } from 'react';
import { Container, Button, Text, CardItem, Content, Card, Form, Item, Label, Input } from 'native-base';

class App extends Component {

  constructor(props) {
    super(props);
    this.username = '';
    this.password = '';
  }

  render() {
    return (
      <Container>
        <Content style={{marginTop:'30%'}}>
          
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(e) => this.username=e} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText={(e) => this.password=e} />
            </Item>
          </Form>

          <Content style={{marginTop: 20}}>
            <Button full>
              <Text>Login</Text>
            </Button>
          </Content>

          <Content style={{marginTop: 20}}>
            <Text style={{textAlign:'center'}}>Copyright &copy; 2018</Text>
          </Content>

        </Content>
      </Container>
    )
  }
}


export default App;