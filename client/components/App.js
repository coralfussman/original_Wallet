import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import { createGlobalStyle} from "styled-components"
import Home from './Home'
import Form from './Form'
import NavBar from './NavBar'
import About from './About'
import AllCategories from './AllCategories'
import Wallet from '../WalletComponents/Wallet'
import GlobalStyle from '../WalletComponents/GlobalStyle'

////import logo from './logo.svg';

import  {themes} from "../WalletComponents/Themes";



import {withRouter} from 'react-router-dom'
//import Category from '../WalletComponents/Category';



  class App extends React.Component {
    state = {
      //results is for nyt
      user: {
        id: 0,
        name: "Coral",
        username: "coralfuss",
        user_categories: [],
       
        
      },
      categories: [
        {cat_name: "Living & Utilities", target_budget: "1500", current_bal: "500", expense_state: "fixed"}, 
        {cat_name: "Reoccuring", target_budget: "500", current_bal: "500", expense_state: "fixed"},
        {cat_name: "Savings", target_budget: "500", current_bal: "0", expense_state: "flux"},  
        {cat_name: "Shopping", target_budget: "500", current_bal: "0", expense_state: "flux"},
        {cat_name: "Social", target_budget: "500", current_bal: "0", expense_state: "flux"},
        {cat_name: "Travel", target_budget: "500", current_bal: "0", expense_state: "flux"}, 
        {cat_name: "Food", target_budget: "500", current_bal: "0", expense_state: "flux"},
        {cat_name: "Unexpected", target_budget: "500", current_bal: "0", expense_state: "flux"},       
       ],
      theme: "light",
      token: "",
      searchTerm: "",
      filteredArray: []
  }
  

//---------------FETCH REQUESTS----------------//
  
    componentDidMount(){

      // fetch("http://localhost:3000/login",{
      //     headers: {
      //       "Authorization": localStorage.token
      //     }
      //   })
      //   .then(r => r.json())
      //   .then(this.handleResponse)
  
      // if(localStorage.token){

      //   fetch("http://localhost:3000/users/stay_logged_in",{
      //     headers: {
      //       "Authorization": localStorage.token
      //     }
      //   })
      //   .then(r => r.json())
      //   .then(this.handleResponse)
  
      // }
        // fetch("http://localhost:3000/expenses")
        // .then(r => r.json())
        // .then((expenses) => {
        //     this.setState({
        //       expenses: expenses
        //     })
        // })

      //   fetch("http://localhost:3000/category")
      //   .then(r => r.json())
      //   .then((Category) => {
      //       this.setState({
      //           category: category
      //       })
      //   })

    }
      
  
      // handleLoginSubmit = (userInfo) => {
      //   fetch("http://localhost:3000/login", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json"
      //     },
      //     body: JSON.stringify(userInfo)
      //   })
      //     .then(r => r.json())
      //     .then(this.handleResponse)
      // }


      handleLoginGithub = (userInfo) => {
        fetch("http://localhost:3000/login/github", {
          
          headers: {
            "content-type": "application/json"

          },
          body: JSON.stringify(userInfo)
        })
          .then(r => r.json())
          .then(this.handleResponse)
      }
  
  
  
  
      // handleRegisterSubmit = (userInfo) => {
      //   fetch("http://localhost:4000/users", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json"
      //     },
      //     body: JSON.stringify(userInfo)
      //   })
      //     .then(r => r.json())
      //     .then(r => this.handleResponse(r))
          
      // }


  
      handleResponse = (resp) => {
  
        if(resp.user){
          localStorage.token = resp.token
          this.setState(resp, () => {
            this.props.history.push("/wallet")
          })
        } else {
          alert(resp.error)
        }
  
      }


    //----------------SETTING STATE FUNCTIONS-----------------//
   
    // ---------User functions

    // clearUser = (e) => {
    //   // window.location.reload(false)
    //   this.setState({
        
       
          
    //       user: {
    //         id: 0,
    //         name: "",
    //         username: "",
    //         user_categories: [],
           
            
    //       }
      
    //   })
    //   this.props.history.push("/")
    // }


    //-------category functions below

    addOneCategory = (newlyCreatedUserCat) => {
      // console.log(newlyCreatedUserCat)
      // let copyOfCategory = [...this.state.user.dashboards[0].widgets, newlyCreatedWidgetDash]
      // let copyOfUserCat = this.state.user.dashboards[0].widget_dashes
      // this.setState(({user}) => ({
      //   user: {
      //     ...user,
      //     dashboards: [{ id: "1", widget_dashes: copyOfWidgetDash, widgets: copyOfWidgets}]
      //   }
        
      // }))
    
      //console.log(copyOfWidgets, "copy of widge")
    }

    updateOneCategory = (updatedUserCategory) => {
      
    }


    

    deleteUserCategory = (deletedUserCategory) => {
     
      // //console.log(deletedUserCategory, "deletedUserCategory")
      // let copyOfdeletedUserCategories = this.state.user.user_category[0].category.filter((CategoryPojo) => {
      //   return CategoryPojo.user_category_id !== deletedUserCategory
      
      // })
      // let copyOfUserCategories = this.state.user.user_category
      
      // this.setState(({user}) => ({
      //   user: {
      //     ...user,
      //     dashboards: [{id: "1", widget_dashes: copyOfWidgetDash, widgets: copyOfWidgets}]
      //   }
      // }))
      //console.log(copyOfUserCategories, "copyOfUserCategories")
    }




     //------dash functions below

     changeSearchTerm = (termFromChild) => {
      this.setState({
        searchTerm: termFromChild
      })
    }

    matchedSearch = () => {
      //console.log(this.state.searchTerm, "This is it")
      let matchedArray = this.state.category.filter((catPojo) => {
      
        return (
          catPojo.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        
          )
      })

            return matchedArray
         
    }
  
   
    //-------theme functions below
    
  

    updateTheme = (updatedPojo) => {
    
        this.setState({
            theme: updatedPojo
        })
        }

    //----------------RENDERING COMPONENTS-----------------//

    renderForm = (routerProps) => {
      if(routerProps.location.pathname === "/login"){
        return <Form
          formName="Login"
          user={this.state.user}
          handleSubmit={this.handleLoginSubmit}
          handleLoginGithub={this.handleLoginGithub}
         
        />
      } else if (routerProps.location.pathname === "/register") {
        return <Form
        formName="Register To Begin"
        
        handleSubmit={this.handleRegisterSubmit}
        handleLoginGithub={this.handleLoginGithub}
        />
      }
    }

    renderWallet = (routerProps) => {
     // if(this.state.token){
        return <Wallet
        user={this.state.user}
        token={this.state.token}
        clearUser={this.clearUser}

        // WalletID={this.state.user.wallet[0].id}
        userCategories={this.state.user.user_categories}
        addUserCategory={this.addOneCategory}
        updateOneCategory={this.addOneCategory}
        deleteUserCategory={this.deleteUserCategory}

        //  themeNames={this.state.themeNames}
        
        // updateTheme={this.updateTheme}

        />
         
      // } 
      //else {
      //   this.props.history.push("/login")
      // }
    }

    renderAbout = (routerProps) => {
      return <About />
    }

    renderCategories = (routerProps) => {
      return <AllCategories 
     
      categories={this.state.categories} 
      />
    }

    
    

    
    render() {
      // const themeNames = [
      //   {name: light, id: 1},
      //   {name: nightmode, id: 2}
      //  ]
      const mode = this.state.themes
      const style = themes[mode]
    //console.log(this.state.user)
      return (
      
        <ThemeProvider theme={{themes: style}} > 
          <GlobalStyle/>
            <div >
              
              <style>
              @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap')
              </style>
              <NavBar/>  
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" render={this.renderForm}/>
                <Route path="/register" render={this.renderForm}/>
                <Route path="/wallet" render={this.renderWallet} />
                <Route path="/categories" render={this.renderCategories} />
                <Route path="/about" render={this.renderAbout} />
              </Switch>
            </div>
        </ThemeProvider>
     
    )
  }

}

let RouterComponent = withRouter(App)
export default RouterComponent
