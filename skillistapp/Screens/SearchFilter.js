import React, {Component} from 'react';
import {Container, Content, Text, Item, Icon, Input, Button} from 'native-base';
import {ToastAndroid, AsyncStorage} from 'react-native';

import app from '../API';

class SearchFilterScreen extends Component {

    static navigationOptions = {
        title: 'Search'
    }

    constructor(props) {
        super(props);

        this.search = '';

        this.handleSearch = this.handleSearch.bind(this);
        this.checkSearch = this.checkSearch.bind(this);
    }

    handleSearch() {
        this.props.navigation.navigate('Result');
        
        if(this.search !== '' ) {
            //Search item code

            app.searchStudent(this.search);

            setTimeout(function() {
                this.checkSearch()
            }.bind(this),2000)

        } else {
            ToastAndroid.showWithGravity(
                'Search field cannot be empty',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
    }

    checkSearch() {
        AsyncStorage.getItem('search').then(item => {
            if(item === true) {
                this.props.navigation.navigate('result');
            }
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Content>
                        <Text style={{textAlign: 'center'}}>Name List / Group List</Text>
                    </Content>
                    <Content>
                        <Item>
                            <Icon active name='search' />
                            <Input onChangeText={(e) => this.search = e } placeholder='search' />
                        </Item>
                    </Content>
                    <Content style={{marginTop: '10%'}}>
                        <Button style={{marginLeft: '40%'}} onPress={this.handleSearch}><Text>Search</Text></Button>
                    </Content>
                </Content>
            </Container>
        )
    }
}

export default SearchFilterScreen;