import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Container, CommunityContainer, Community, CommunityInfo, Form, Hr } from './style';

export default class SideBar extends Component {
  static propTypes = {
    addRepository: PropTypes.func.isRequired,
    findAllIssues: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }),
    })).isRequired,
  };

  state = {
    inputError: false,
    loading: false,
    inputRepo: '',
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/${this.state.inputRepo}`);

      this.setState({
        inputRepo: '',
        inputError: false,
      });

      this.props.addRepository(repository);
    } catch (err) {
      this.setState({
        inputError: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <Form hasError={this.state.inputError} onSubmit={this.handleSubmit}>
          <input
            aria-label="Repository Input"
            type="text"
            placeholder="New repository"
            value={this.state.inputRepo}
            onChange={evt => this.setState({ inputRepo: evt.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <i className="fa fa-plus-circle" />
            )}
          </button>
        </Form>

        <Hr />

        <CommunityContainer>
          {this.props.repositories.map(repository => (
            <Community key={repository.id} onClick={() => this.props.findAllIssues(repository)}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <CommunityInfo>
                <strong>{repository.name}</strong>
                <small>{repository.owner.login}</small>
              </CommunityInfo>
              <i className="fa fa-chevron-right" />
            </Community>
          ))}
        </CommunityContainer>
      </Container>
    );
  }
}
