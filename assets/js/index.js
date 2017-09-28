import React from 'react'
import ReactDOM from 'react-dom'
//import Fetch from 'react-fetch'
import createReactClass from 'create-react-class'


class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
    }
}

//var EntryList = createReactClass({ // Use this format incase ES5 and lower.
class EntryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadEntriesFromServer() {
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    }

    componentDidMount() {
        //this.loadEntriesFromServer();
    } 

    render() {
        if (this.state.data) {
            /*var entryNodes = this.state.data.map(function(entry){
                return <li> {entry.comment} </li>
            })*/
            var entryNodesStrs = [
                {"date":"1/1/13","time_from":"11:00AM","time_to":"2:15PM","entryId":"0"},
                {"date":"5/3/34","time_from":"9:00PM","time_to":"12:00PM","entryId":"1"},
                {"date":"8/5/65","time_from":"4:30PM","time_to":"6:45PM","entryId":"2"},
                {"date":"9/3/23","time_from":"11:30AM","time_to":"11:45AM","entryId":"3"}
            ];

            var entryNodes = entryNodesStrs.map(function(entry){
                return (
                    <tr key={entry.entryId}>
                        <td> {entry.date} </td>
                        <td> {entry.time_from} </td>
                        <td> {entry.time_to} </td>
                        <td> Edit </td>
                        <td> Delete </td>
                    </tr>
                    );
            });
        }
        return (
            <table styles={{width : '100%'}}>
                <thead>
                  <tr>
                     <th>Date</th>
                     <th>From</th>
                     <th>To</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    {entryNodes}
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(<EntryList url='/api/' />, 
    document.getElementById('container'))