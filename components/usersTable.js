import React from 'react'
import { connect } from 'react-redux'
import addUser from '../src/actions/addUser'

class UsersTable extends React.Component {
    state = {
        firstName: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    setUser = e => {
        e.preventDefault();
        this.props.addUser(this.state.firstName)
        this.setState({
            firstName: '',
        });
    }

    render() {
        const { usersTable } = this.props;

        return (
            <>
                {usersTable.map((name, index) => (
                    <p key={index}>{ name }</p>
                ))}
                <form onSubmit={this.setUser}>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add</button>                
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { usersTable: state.usersTable };
  };

const mapDispatchToProps = dispatch => ({
    addUser: value => {
        dispatch(addUser(value));
    },
 })

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
