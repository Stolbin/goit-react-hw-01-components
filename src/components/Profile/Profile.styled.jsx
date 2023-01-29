import styled from '@emotion/styled';

export const Boxs = styled.section`
  transition: scale 450ms ease;
  max-width: 500px;
  &:hover {
    scale: 1.015;
    transition: scale 650ms ease;
  }
`;

export const Card = styled.div`
  background: #ebebeb;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 25px;
  box-shadow: 2px 2px 10px #e0e0e0;
`;

export const CardDescription = styled.div`
  backgraund: #fff;
  text-align: center;
  display: block;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  background-color: #9c9c1b;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 1px 2px 10px #222;
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 0px;
`;

export const Tag = styled.p`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 0px;
`;

export const Location = styled.p`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 0px;
`;

export const States = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const BoxStat = styled.div`
  width: calc(100% / 3);
  border: 1px solid #f1f1f5;
  border-radius: 10px;
  background-color: #d3d3d3;
  text-align: center;
`;

export const Label = styled.p`
  fontsize: 30;
`;

export const Quantity = styled.p`
  fontsize: 30;
`;
