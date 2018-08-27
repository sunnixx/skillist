import React, {Component} from 'react';
import {Container, Content, Text, Item, Icon, Input, Button, Toast} from 'native-base';

class SearchFilterScreen extends Component {

    static navigationOptions = {
        title: 'Search'
    }

    constructor(props) {
        super(props);

        this.search = '';

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        if(this.search !== '' ) {
            //Search item code
        } else {
            Toast.show({
                text: 'Search cannot be empty',
                buttonText: 'Okay',
                duration: '2000'
            })
        }
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
                            <Input onChangeText={(e) => this.search } placeholder='search' />
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