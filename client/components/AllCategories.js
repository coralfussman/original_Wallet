import React, { Component } from 'react'
//import loader from '../loader.svg';

import {SearchBar} from '../WalletComponents/Themes';
import {themes} from '../WalletComponents/Themes';


export default class AllCategories extends Component {


    handleType = e => {
        // console.log(e.target.value)
         this.props.changeSearchTerm(e.target.key)
     }
 
    render() {
        //console.log(this.props.categories, "category")
        
       
       const allCategories = this.props.categories.map((category) => (
             
            <Category key={category.id} category={category} type={category.expense_state}  onClick={this.handleUpdate} deleteCategory={this.props.deleteCategory}/>
       
       ))
       console.log("something")
      
       return (
        <div>
            <SearchBar className="searchBar"
                    type="text" 
                    placeholder="Search Headline"
                    value={this.props.searchTerm}
                    onChange={this.handleType}
                    ></SearchBar>

           <div className="newsContainer">
                
                {allCategories}
            </div>
        </div>
       )
   }
}

