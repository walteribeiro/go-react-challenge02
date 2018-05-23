import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 100px;
  padding: 30px;
  align-items: center;
  justify-content: space-between;

  select {
    height: 42px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px;
  }
`;

export const Community = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 45px;
    height: 45px;
    margin: 0 10px;
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
