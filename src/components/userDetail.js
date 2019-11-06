import React from 'react';
import { Card } from 'antd'; 
import userDetailIcon from './userIcon.js';

class userDetailCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     
    }

    this.handleClick = this.handleClick.bind(this);
    
  }
 
  handleClick(){
    this.props.clicked(this.props.id);
  }
  render() {
    //reference to the meta component of the card
    let Meta = Card.Meta;
    //customise the ant-design card component
    return <Card 
    style={{ width: 320 }}
    cover={
      <img
        alt={this.props.imgAlt}
        src={this.props.imgURL} 
        onClick={this.handleClick}
      />
    }
    actions={[
      <userDetailIcon type="like" count={this.props.likes} selected={this.props.liked}/>,
      <userDetailIcon type="message" count={this.props.comments}  />,
      <userDetailIcon type="pushpin" selected={this.props.pinned} />,
    ]}
  >
    <Meta
      title={this.props.title}
      description={this.props.description}
    />
  </Card>;
  }
}

export default userDetailCard;