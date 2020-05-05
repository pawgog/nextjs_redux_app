import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInfo, addInfo } from '../src/actions';
import { getInfoError, getInfo, getInfoPending } from '../src/reducer';
import Spinner from './spinner';
import SelectCategory from './selectCategory';
import FormBoard from './formBoard';
import NewsBoard from './newsBoard';

class InfoBoard extends React.Component {
  state = {
    name: '',
    title: '',
    description: '',
    category: 'all',
    date: '',
    image: '',
    openForm: false,
  };

  componentDidMount() {
    const { fetchInfo } = this.props;
    fetchInfo();
  }

  handleForm = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      openForm: !prevState.openForm,
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  selectCategory = (category) => {
    this.setState({
      category,
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
    const { info, pending } = this.props;

    return (
      <>
        {pending ? (
          <Spinner />
        ) : (
          <>
            <SelectCategory selectCategoryFn={this.selectCategory} />
            <NewsBoard category={this.state.category} info={info} />
            <FormBoard
              openForm={this.state.openForm}
              handleFormFn={this.handleForm}
              handleChangeFn={this.handleChange}
              addInfoFn={addInfo}
            />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getInfoError(state),
  info: getInfo(state),
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
