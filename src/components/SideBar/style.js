import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 320px;
  height: 100%;
  padding: 30px;
  box-shadow: 10px 0px 50px -5px rgba(204, 204, 204, 1);
  z-index: 999;
`;

export const Form = styled.form`
  display: flex;

  input {
    flex: 1;
    height: 50px;
    width: 180px;
    background: #eee;
    padding: 0 20px;
    font-size: 15px;
    color: #444;
    border-radius: 3px;
    margin: 0 10px;
    border: ${props => (props.hasError ? '2px solid #f00' : 0)};
  }

  button {
    height: 50px;
    width: 50px;
    background: #8d8794;
    border-radius: 3px;
    border: 0;
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      background: #5f5b65;
    }

    i {
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Hr = styled.hr`
  background: #eee;
  margin: 15px 0;
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Community = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
    margin: 0 10px;
  }

  i {
    align-self: center;
    margin-left: auto;
    color: #ccc;
  }
`;

export const CommunityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  strong {
    font-size: 16px;
  }

  small {
    font-size: 12px;
    color: #666;
  }
`;
