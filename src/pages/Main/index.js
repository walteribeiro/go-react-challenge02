import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import IssueList from '../../components/IssueList';
import api from '../../services/api';
import { Container, ContentContainer } from './styles';

export default class Main extends Component {
  state = {
    repositories: [],
    selectedRepository: {
      name: '',
      owner: {
        avatar_url: '',
        login: '',
      },
    },
    issues: null,
    isLoadingRepoIssues: false,
  };

  addRepository = async (repository) => {
    this.setState({
      repositories: [...this.state.repositories, repository],
    });
  };

  findAllIssues = async (repository) => {
    this.setState({
      isLoadingRepoIssues: true,
    });
    try {
      const { data: issues } = await api.get(`/${repository.full_name}/issues?state=all`);

      this.setState({
        selectedRepository: repository,
        issues,
      });
    } catch (err) {
      this.setState({
        isLoadingRepoIssues: false,
      });
    } finally {
      this.setState({
        isLoadingRepoIssues: false,
      });
    }
  };

  findAllIssuesByState = async (issueState) => {
    this.setState({
      isLoadingRepoIssues: true,
    });
    try {
      const { data: issues } = await api.get(`/${this.state.selectedRepository.full_name}/issues?state=${issueState}`);

      this.setState({
        issues,
      });
    } catch (err) {
      this.setState({
        isLoadingRepoIssues: false,
      });
    } finally {
      this.setState({
        isLoadingRepoIssues: false,
      });
    }
  };

  render() {
    const {
      repositories, selectedRepository, issues, isLoadingRepoIssues,
    } = this.state;
    return (
      <Container>
        <SideBar
          repositories={repositories}
          addRepository={this.addRepository}
          findAllIssues={this.findAllIssues}
        />
        <ContentContainer>
          <Header
            repository={selectedRepository}
            findAllIssuesByState={this.findAllIssuesByState}
          />
          <IssueList issues={issues} isLoading={isLoadingRepoIssues} />
        </ContentContainer>
      </Container>
    );
  }
}
