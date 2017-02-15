import React, { Component } from 'react';
import { Header, Left, Right, Button, Body, Title, Container, Content, Text, Icon, Card, CardItem, Thumbnail } from 'native-base';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';

export default class QuestionDetail extends Component {

  renderHeader(){
    const {title} = this.props;
    return (
        <Header>
          <Left>
            <Button transparent onPress={()=> Actions.pop()}>
              <Icon name="arrow-back" style={{color: "#057ce4"}}/>
            </Button>
          </Left>
          <Body><Title>{title}</Title></Body>
          <Right/>
        </Header>
    )
  }

  render(){
    const {title, author, vote, description, createdAt} = this.props.question;
    //kode di atas dapat ditulis juga sbb
    /**
    * const title = this.props.question.title;
    * const author = this.props.question.author;
    */

    return (
      <Container>
        {this.renderHeader()}
        <Content>
          <Card>
            <CardItem bordered>
              <Left>
                <Icon name="help-circle" />
                <Body>
                  <Text>{title}</Text>
                  <Text note>{author}, on {moment(createdAt).format("DD/MM/YYYY")}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {description}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="arrow-up" />
                </Button>
                <Text>{vote}</Text>
                <Button transparent>
                  <Icon active name="arrow-down" />
                </Button>
              </Right>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
