import React from 'react'
import { connect } from 'react-redux'
import addUser from '../src/actions/addUser'

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: '',
        };
    }
  
    setUser(e) {
        e.preventDefault();
        this.props.addUser(this.state.newUser)
    }

    render() {
        const { usersTable } = this.props;

        return (
            <div>
            {usersTable.map((name, index) => (
                <p key={index}>{ name }</p>
            ))}
            <form onSubmit={this.setUser.bind(this)}>
                <input
                type="text"
                value={this.state.newUser}
                onChange={e => this.setState({ newUser: e.target.value })}
              />
                <button type="submit">Add</button>                
            </form>
            </div>
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
