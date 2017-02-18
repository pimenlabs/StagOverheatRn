import React, { Component } from 'react';
import {
  Header, Title, Container, Content, Left, Body, Right,
  Text, Icon, Button, Form, Item, Input, Label
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class QuestionAdd extends Component {

  constructor(){
    super();
    this.state = {
      title: "",
      description: "",
      vote: 0,
      author: "Ega Radiegtya" //hardcoded
    };
  }

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
          <Button transparent onPress={()=> this.handleSave()}>
            <Text style={{color: '#0098ff'}}>Save</Text>
          </Button>
        </Right>
      </Header>
    )
  }

  handleSave(){
    //save data to db with Store
    this.props.store.add(this.state);

    //refresh dataSource to the latest update reactively
    this.props.store.refresh();

    //clear the form
    this.setState({
      title: "",
      description: ""
    });

    //back to main page
    Actions.pop();
  }

  render(){
    return (
      <Container>
        {this.renderHeader()}

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input
                onChangeText={(text) => this.setState({title: text})}
                value={this.state.title}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input
                onChangeText={(text) => this.setState({description: text})}
                value={this.state.description}
                multiline={true}
                numberOfLines={10}
                style={{height: 200, marginTop: 20}}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
