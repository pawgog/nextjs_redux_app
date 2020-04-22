import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import addUser from '../src/actions/addUser';

class NewsBoard extends React.Component {
  state = {
    firstName: '',
  };

  componentDidMount() {
    axios
      .get('http://localhost:4001/')
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setUser = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.firstName);
    this.setState({
      firstName: '',
    });
  };

  render() {
    const { news } = this.props;

    return (
      <>
        {news.map((name, index) => (
          <p key={index}>{name}</p>
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
    );
  }
}

const mapStateToProps = (state) => {
  return { news: state.news };
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (value) => {
    dispatch(addUser(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsBoard);
