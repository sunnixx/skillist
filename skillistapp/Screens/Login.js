import React, { Component } from 'react';
import { Container, Button, Text, CardItem, Content, Card, Form, Item, Label, Input, Toast } from 'native-base';
import {AsyncStorage} from 'react-native';

import app from '../API';

class LoginScreen extends Component {

    static navigationOptions = {
        title: 'Login',
        header: null
    }

    constructor(props) {
        super(props);
        this.email = '';
        this.password = '';

        this.handleLogin = this.handleLogin.bind(this);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
    }

    handleLogin() {
        app.login(this.email,this.password);

        setTimeout(function() {
            this.checkLoggedIn();
        }.bind(this),2000)
    }

    checkLoggedIn() {
        AsyncStorage.getItem('token').then(response => {
            if(response !== null) {
                this.props.navigation.navigate('DrawerStack');
            }
        });

        AsyncStorage.getItem('errMessage').then(response => {
            if(response !== null) {
                Toast.show({
                    text : 'Username or Password incorrect',
                    duration: 1000,
                    buttonText: 'Ok',
                    position: 'bottom'
                })
            }
        }) 
    }

    componentDidMount() {
        this.checkLoggedIn();
    }

    render() {
        return (
            <Container>
                <Content style={{ marginTop: '30%' }}>

                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(e) => this.email = e} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(e) => this.password = e} secureTextEntry={true} />
                        </Item>
                    </Form>

                    <Content style={{ marginTop: 20 }}>
                        <Button full onPress={this.handleLogin}>
                            <Text>Login</Text>
                        </Button>
                    </Content>

                    <Content style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center' }}>Copyright &copy; 2018</Text>
                    </Content>

                </Content>
            </Container>
        )
    }
}


export default LoginScreen;