import React, { Component } from 'react'
import Widget from './Category';

import { WidgeDash} from './Themes';


export default class UserCategory extends Component {
   
    render() {
         console.log(this.props.userCategories, "users widgets")
         
         deleteCategory = (e) => {
            
            console.log(this.props.widget.widget_dash_id)
            //http://localhost:4000/user_dashes/${this.props.widget.widget_dash_id
            fetch(`http://localhost:4000/user_categories/${this.props.category.user_categories_id}`,{
                method:"DELETE"
            })
            .then(r => r.json())
            .then(deleted => {
                this.props.deleteCategory(this.props.widget.widget_dash_id)
            })
            }
        
        const category = this.props.userCategories.map((userCategory) => (
              
             <Category key={userCategory.id} widget={userCategory} type={userCategory.name} widgetDash={this.props.widgetDash} onClick={this.handleUpdate} deleteCategory={this.props.deleteCategory}/>
        
        ))
        const noCategory = <h1>add Category</h1>
        //console.log("category")
       
        return (
            <WidgeDash>

           

             {category.length === 0 ? noCategory : category }
            
            </WidgeDash>
        )
    }
}


// const widgets = this.props.user.dashboards[0].widgets.map(widgeType => (
//     widgeType === null 
//         ? <EmptyWidget/>
//         : <Widget key={widgeType.id} widget={widgeType} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>

// ))