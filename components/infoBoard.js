import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addInfo } from '../src/actions';

class InfoBoard extends React.Component {
  state = {
    name: '',
    title: '',
    description: '',
    date: '',
    image: '',
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

  addInfo = (e) => {
    e.preventDefault();
    this.props.addNews({
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
      date: Date(),
      image: this.state.image,
    });
  };

  render() {
    const { news } = this.props;

    return (
      <>
        {news.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
        <form className="add-info-form" onSubmit={this.addInfo}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <label htmlFor="description">News description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add news</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return { news: state.news };
};

const mapDispatchToProps = (dispatch) => ({
  addInfo: (value) => {
    dispatch(addInfo(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoard);
