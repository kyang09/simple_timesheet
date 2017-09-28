import React from 'react'
import ReactDOM from 'react-dom'
//import Fetch from 'react-fetch'
import createReactClass from 'create-react-class'

var EntryList = createReactClass({
    loadEntriesFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        //this.loadEntriesFromServer();
    }, 

    render: function() {
        if (this.state.data) {
            /*var entryNodes = this.state.data.map(function(entry){
                return <li> {entry.comment} </li>
            })*/
            var entryNodesStrs = [
                {"date":"1/1/13","from":"11:00AM","to":"2:15PM","entryId":"0"},
                {"date":"5/3/34","from":"9:00PM","to":"12:00PM","entryId":"1"},
                {"date":"8/5/65","from":"4:30PM","to":"6:45PM","entryId":"2"},
                {"date":"9/3/23","from":"11:30AM","to":"11:45AM","entryId":"3"}
            ];

            var entryNodes = entryNodesStrs.map(function(entry){
                return (
                    <tr key={entry.entryId}>
                        <td> {entry.date} </td>
                        <td> {entry.from} </td>
                        <td> {entry.to} </td>
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
})

ReactDOM.render(<EntryList url='/api/' />, 
    document.getElementById('container'))