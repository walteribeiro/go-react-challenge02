import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  h3 {
    color: #6b6b5d;
  }

  i {
    color: #6b6b5d;
    margin 0 15px;
  }
`;

export const Issue = styled.div`
  display: flex;
  margin: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 50px 2px rgba(204, 204, 204, 1);
  width: 30%;
  border-radius: 3px;

  img {
    width: 64px;
    height: 64px;
    margin: 0 10px;
    border-radius: 32px;
  }

  a {
    height: 25px;
    width: 150px;
    padding: 5px 15px;
    border: 0;
    border-radius: 3px;
    background: #b286d1;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  min-width: 0;

  strong {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    font-size: 14px;
    color: #666;
  }
`;
