"use strict";

var React = require('react');
var Input = require('../common/textInput');

class AuthorForm extends React.Component{
    render(){
        return(
            <form className="col-sm-offset-4 col-sm-4">
                <h2>Manage Author</h2>
                <Input 
                    name="firstName"
                    label="first Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange} 
                    error={this.props.errors.firstName}/>
                <Input 
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName} />
                <input type="submit" value="Save" className="btn btn-success" onClick={this.props.onSave} />
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
}

module.exports = AuthorForm;