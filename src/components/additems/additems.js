import React , {Component} from "react";

import './additems.css';

class AddItem extends Component
{

    state =
    {
        name: '',
        age: ''
    }

    handlechange = (e) =>
    {
        this.setState({
            [e.target.id] : e.target.value
        })

    }

    handlesubmit = (e) =>
    {
        e.preventDefault();

        if( e.target.name.value == '' || e.target.age.value == '' )
        {
            return false;
        }
        else
        {
            this.props.additems(this.state);

            this.setState({
                name:'',
                age: ''
            })
        }
        

    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type='text' placeholder='Enter Name' id='name' onChange={this.handlechange} value={this.state.name} />
                    <input type='number' placeholder='Enter Age' id='age' onChange={this.handlechange} value={this.state.age} />
                    <input type='submit' value='Add' />
                </form>
            </div>
        )
    }
}

export default AddItem;