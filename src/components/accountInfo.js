//OK:
//You need to display:
//Username, first name, last name, [profile image], email
//about, date registered
//country ID (therefore country) -> discuss how to do this.
//okk, it has been sent from back end to front
//NOW:
//for country ID, we can do what happens in week 8 lab 15
//changes state from a switch case kinda
//see the last page, the hyperlink and then the
//light / dark theme part

import React from 'react';
import {Col, Row} from 'antd';
import userDetailCard from './userDetail';

export class HomeGrid extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            items : []
        }

        this.clickItem = this.clickItem.bind(this);
    }

    state = {
        isLoaded: false, //if the user is added successfully
        showSuccess: false, //if should we show a successful feedback message after adding a user
        showError: false, //if should we show an error feedback message after adding a user
        errorCode: 400, //to save the errorCode we recieved from the api server
        errorMessage: "", //the error message to display to the user after server rejects action
        items : {}
      };

    
    componentDidMount(){
        console.log('mounted component')
        fetch('http://localhost:5000/api/v1.0/home/getAccountInfo', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.token
            },
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            this.setState({
                isLoaded: true,
                items: result
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("ERROR HERE")
                console.log("CHANGE STATE OF ITEMS TO DISPLAY THE ERROR HERE")
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    clickItem(id){
        console.log("article with id:" + id + " was clicked");
    }
    //this is a functional component to represent each row
    oneRow(articles, rowNumber){

        //first we need to go through each column in the grid
        //map each article to Col and inside of it our OktobCard component
        //this way we can compose our whole grid
       let row = articles.map((element, index) => {

        //render the column, if it should have a card render a crad inside it, othewerwise do not render anything
        return <Col span={6} key={index}> 
            {element !== null ? (
            <userDetailCard id={element.id}  title={element.title} description={element.description}
                likes={element.likes} comments={element.comments} selected={element.liked} 
                liked={element.liked} pinned={element.pinned}
                imgURL = {element.imgURL} clicked={this.clickItem} />) : null}
        </Col> 
        
        
       }
            
        );

        //after we go throw wach col inside the row compose the whole row
        return <div key={rowNumber}>
            <Row type="flex" justify="center" >
                {row}
            </Row>
            <br/>
        </div>
        
        
    }
    render() {

        //in this array we will save rows, one item per row
        let allRows = [];
        //count how many articles we have so far
        let counter = 0;

        let rowNumber = 0;

        //iterate through all the articles in the json data
        while(counter < this.state.items.length){

            //initialise the array to store articles for each new row
            let articlesPerRow = [];
            
            //send each three articles to separate row
            for(let i=0; i < 3; i++){

                //make sure we do not overflow the array
                if(counter < this.state.items.length)
                    articlesPerRow.push(this.state.items[counter]);
                else
                    articlesPerRow.push(null);

                counter++;

            }
            
            rowNumber++;

            //keep adding rows until we finish the rows
            allRows.push(this.oneRow(articlesPerRow, rowNumber));
            
        }
        //now we have composed columns inside rows, and then rows inside grid,
        //now render the whole grid
      return <>
        {allRows}
      </>;
     
    }
  }
  
  export default HomeGrid;



