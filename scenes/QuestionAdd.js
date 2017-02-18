import React, { Component } from 'react';
import {
  Header, Title, Container, Content, Left, Body, Right,
  Text, Icon, Button, Form, Item, Input, Label
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class QuestionAdd extends Component {

  renderHeader(){
    const {title} = this.props;

    return (
      <Header>
        {/* Left Button Icon with arrow back, to back to Question page */}
        <Left>
          <Button transparent onPress={()=> Actions.pop()}>
            <Icon name="arrow-back" style={{color: '#0098ff'}}/>
          </Button>
        </Left>
        {/* Print title by props from router */}
        <Body>
          <Title>{title}</Title>
        </Body>
        {/* Right button to save form, but nothing to call for now */}
        <Right>
          <Button transparent onPress={()=> {}}>
            <Text style={{color: '#0098ff'}}>Save</Text>
          </Button>
        </Right>
      </Header>
    )
  }

  render(){
    return (
      <Container>
        {this.renderHeader()}

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Author</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Vote</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
