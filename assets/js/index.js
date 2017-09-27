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
        this.loadEntriesFromServer();
    }, 

    render: function() {
        if (this.state.data) {
            var entryNodes = this.state.data.map(function(entry){
                return <li> {entry.comment} </li>
            })
        }
        return (
            <div>
                <ul>
                    {entryNodes}
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<EntryList url='/api/' />, 
    document.getElementById('container'))