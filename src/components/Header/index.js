import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Community, CommunityInfo } from './style';

const Header = ({ repository, findAllIssuesByState }) => (
  <Fragment>
    {repository && (
      <Container>
        <Community>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <CommunityInfo>
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </CommunityInfo>
        </Community>
        <select
          onChange={evt => findAllIssuesByState(evt.target.value)}
          disabled={repository.name === ''}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </Container>
    )}
  </Fragment>
);

Header.propTypes = {
  findAllIssuesByState: PropTypes.func.isRequired,
  repository: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default Header;
