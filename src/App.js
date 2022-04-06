import React , {Component} from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


import TodoItem from './components/todoitem/todoitem';
import AddItem from './components/additems/additems';

/////////////////////////////////////////////////////////////




class App extends Component {

  state =
  {
    items: [
      {id:1 , name:'aya' , age:20},
      {id:2 , name:'ahmed' , age:22},
      {id:3 , name:'mohamed' , age:25}
    ]
  }

  deleteitems = (id) =>
  {

    // let items = this.state.items;

    // let i = items.findIndex( items => items.id === id );

    // items.splice(0,1);

    let items = this.state.items.filter( item => 
      {
        return item.id !== id 
      } )

    this.setState({
      items: items
    })

  }

  additem = (newitems) =>
  {
    newitems.id = Math.random();
    let items = this.state.items;
    items.push(newitems);
    this.setState({
      items: items
    })

  }

  render()
  {
    return(
      <div className='App container'>

        <h1> Todo List </h1>

        <TodoItem items={this.state.items} deleteitem={this.deleteitems} />
 
        <AddItem additems={this.additem} />

      </div>
    );
  }
}

export default App;
