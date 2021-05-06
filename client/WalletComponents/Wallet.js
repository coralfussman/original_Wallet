import React, { Component } from 'react'
//import {UserCategories, } from './WalletComponents';

import UserCategories from './UserCategories';

//import {weather, quotes, currency, calendar} from './DashboardComponents'
import {Button, SVGPanel, MediaPanel, InvertedFont, ThemePanel, SVG, SignOut} from './Themes';

// import weather from '../weather.svg';
// import currency from '../currency.svg';
// import quote from '../quote.svg';
// import calendar from '../calendar.svg';
// import unit from '../unit.svg';
// import zodiac from '../zodiac.svg';
// import clock from '../clock.svg';
// import game from '../game.svg';

// import facebook from '../facebook.svg';
// import linkedin from '../linkedin.svg';
// import medium from '../medium.svg';
// import twitter from '../twitter.svg';


class Wallet extends Component {

  

    
    // onClick = (clickResult) => {
    //     console.log( clickResult)
        
    //     const { addedIndex, payload } = clickResult;
        
    //     //console.log( this.props.walletID)
    //     //console.log( payload.id)



    //     fetch("http://localhost:3000/user_categories", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "Authorization": localStorage.token
    //         },
    //         body: JSON.stringify({
    
    //             user_id: this.props.user.id,
    //             category_id: this.props.category.id
                
    
    //         })
    //         })
    //         .then(r => r.json())
    //         .then((newUserCategory) => {
    //             console.log(newUserCategory)

    //             this.props.addOneCategory(newUserCategory);
    //         })
            
        
    //     //added index matches widget dash location (send to add widget in state to pass props up)
    //     //...... in app........
    //     // setstate of userWidgets
    //     //go to docs e.addedIndex is prob location dropped on/ e.payload is what you're dropping 
                
    //     }
    
    // //   handleThemeChange = (name, id) => {
    // //     console.log(id)
    // //       console.log(this.props.themeName)
    // //       console.log(name)
    // //     //   let name = e.target.value

    // //     fetch(`http://localhost:3000/users/${this.props.user.id}`, {
    // //         method: "PATCH",
    // //         headers: {
    // //         "Authorization": localStorage.token,
    // //         "content-type": "application/json"
    // //         },
    // //         body: JSON.stringify({
    // //         new_id: id
            
    // //         })
    // //     })
    // //     .then(r => r.json())
    // //     .then((updatedTheme) => {
    // //         this.props.updateTheme(updatedTheme)
    // //     })
    // //     }
          
       
    render() {
    
    
           
           const currentHour = new Date().getHours();

           const greetingMessage =
           currentHour >= 4 && currentHour < 12 ? // after 4:00AM and before 12:00PM
           'Good Morning' :
           currentHour >= 12 && currentHour <= 17 ? // after 12:00PM and before 6:00pm
           'Good Afternoon' :
           currentHour > 17 || currentHour < 4 ? // after 5:59pm or before 4:00AM (to accommodate night owls)
           'Good Evening' : // if for some reason the calculation didn't work
           'Welcome'
      
          
        return (
        
            <div className="walletContainer">
                {/* column 1 */}
                <div className="columnContainer">
                    <InvertedFont>
                        <h3> {greetingMessage} {this.props.user.name} </h3>
                    </InvertedFont>
                  

                </div>
                {/* column 2 */}
                <div className="columnCenterContainer">
            
{/* 
                <form onSubmit={this.handleSubmit}>
                <div className="form">
                <h2>Create Category</h2>
                
                <div className="formContent">
                    <label htmlFor="name">Category Name:</label>
                    <input className="input" type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/><br/>
                    <label htmlFor="username">Budget:</label>
                    <input className="input" type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/><br/>
                    <label htmlFor="password">Current Balance:</label>
                    <input className="input" type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/><br/>
                </div>
                    <input className="submitButton" type="submit" value="Submit"/>
                    <h3>Or Authenticate with </h3>
                    <img src={github} className="" alt="github"  />
                    <button onClick={this.props.handleLoginGithub}>GITHUB</button>
                </div>
                </form> */}


                        <UserCategories  onClick={this.onClick} userCategories={this.props.userCategories} addUserCategory={this.props.addUserCategory} deleteUserCategory={this.props.deleteUserCategory} token={this.props.token}/>
                   
                      
                </div>



                {/* column 3 */}
                <div className="columnRightContainer">
                    <SignOut onClick={this.props.clearUser}>Sign Out</SignOut>
                   
                </div>


                
            </div>
    
        )
    }
}
export default Wallet;
