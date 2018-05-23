import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, ErrorContainer, Issue, IssueInfo } from './style';

const renderError = (issues) => {
  if (issues !== null) {
    return (
      <ErrorContainer>
        <h3>No Issues Found</h3>
      </ErrorContainer>
    );
  }
  return '';
};

const IssueList = ({ issues, isLoading }) => (
  <Fragment>
    {isLoading ? (
      <ErrorContainer>
        <i className="fa fa-spinner fa-pulse" />
        <h3>Loading Issues</h3>
        <i className="fa fa-spinner fa-pulse" />
      </ErrorContainer>
    ) : (
      <Container>
        {issues && issues.length > 0
          ? issues.map(issue => (
            <Issue key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <IssueInfo>
                <strong>{issue.title}</strong>
                <small>{issue.user.login}</small>
                <a href={issue.html_url} target="_blank">
                  <i className="fa fa-external-link" /> ABRIR ISSUE
                </a>
              </IssueInfo>
            </Issue>
            ))
          : renderError(issues)}
      </Container>
    )}
  </Fragment>
);

IssueList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  })).isRequired,
};

export default IssueList;
