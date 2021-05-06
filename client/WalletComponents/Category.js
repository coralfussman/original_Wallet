import React, { Component } from 'react'

 import {themes, ExButton} from './Themes';

class Category extends Component {
    
      

   
    // handleDelete = (e) => {
         
    //     console.log(this.props.category_id)
    //      //http://localhost:4000/user_dashes/${this.props.widget.widget_dash_id
    //       fetch(`http://localhost:3000/user_categories/${this.props.category_id}`,{
    //           method:"DELETE"
    //       })
    //       .then(r => r.json())
    //       .then(deleted => {
    //          this.props.handleDelete(this.props.category_id)
    //       })
    //     }

    render() {
     
  
       
        return (
            <div className="widget">
                

            
            <ExButton className="DeleteBttn" onClick={this.handleDelete}> X </ExButton>
            <svg svg={this.props.category.name} width="300px" height="250px" frameBorder="0"  />

            </div>
        )
    }
}
export default Category;
