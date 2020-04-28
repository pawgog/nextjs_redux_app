import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInfo, addInfo } from '../src/actions';
import { getInfoError, getInfo, getInfoPending } from '../src/reducer';
import NewsBoard from './newsBoard';

class InfoBoard extends React.Component {
  state = {
    name: '',
    title: '',
    description: '',
    date: '',
    image: '',
    openForm: false,
  };

  componentDidMount() {
    const { fetchInfo } = this.props;
    fetchInfo();
  }

  handleForm = () => {
    this.setState((prevState) => ({
      openForm: !prevState.openForm,
    }));
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addInfo = (e) => {
    e.preventDefault();
    this.props.addInfo({
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
        <NewsBoard news={news} />
        <button onClick={this.handleForm}>+</button>
        <div
          className={
            this.state.openForm
              ? 'board-info-form--open'
              : 'board-info-form--close'
          }
        >
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
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getInfoError(state),
  news: getInfo(state),
  pending: getInfoPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addInfo,
      fetchInfo,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoard);
