import styled from '@emotion/styled';

export const Section = styled.ul`
  background: #dcdcdc;
  padding: 20px;
  width: 400px;
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 25px;
  box-shadow: 2px 2px 10px #e0e0e0;
  list-style: none;
  margin: 0;
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: auto 20px auto 20px;
  box-shadow: 5px 5px 50px #e0e0e0;  
  background-color: ${props => (props.isOnline === true ? 'green' : 'red')};
  }
`;

export const Avatar = styled.img`
  height: 85%;
  margin: auto 0px auto 10px;
`;

export const FriendName = styled.p`
  margin: auto;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;
