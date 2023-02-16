import styled from '@emotion/styled';

export const Section = styled.ul`
  background: #dcdcdc;
  padding: 20px;
  width: calc(100% - 20px);
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 25px;
  box-shadow: 2px 2px 10px #e0e0e0;
  @media (min-width: 425px) {
    width: calc(100% - 50px);
    max-width: 400px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    max-width: none;
    width: 500px;
    margin: 25px auto 0px auto;
  }
`;

export const FriendBox = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 8px 10px 8px 10px;
`;

export const FriendCardItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 30px #e0e0e0;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto 10px auto 15px;
  box-shadow: 5px 5px 50px #e0e0e0;
  background-color: ${props => (props.isOnline === true ? 'green' : 'red')};
  @media (min-width: 425px) {
    width: 25px;
    height: 25px;
    margin: auto 25px auto 25px;
  }
  @media (min-width: 768px) {
    margin: auto 30px auto 30px;
  }
`;

export const Avatar = styled.img`
  height: 50%;
  margin: auto 0px auto 10px;
  @media (min-width: 360px) {
    height: 65%;
  }
  @media (min-width: 768px) {
    height: 85%;
    margin: auto 0px auto 0px;
  }
`;

export const FriendName = styled.p`
  margin: auto;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  @media (min-width: 360px) {
    font-size: 30px;
  }
`;
