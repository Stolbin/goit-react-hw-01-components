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
  background: #dcdcdc;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 25px;
  box-shadow: 2px 2px 10px #e0e0e0;
`;

export const CardDescription = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 60%;
  background: linear-gradient(#0000ff, #ccff33);
  border-radius: 50%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 2px 10px #222;
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 0px;
`;

export const Tag = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 0px;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 0px;
`;

export const States = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;

export const BoxStat = styled.div`
  width: calc(100% / 3);
  border: 1px solid #f1f1f5;
  border-radius: 10px;
  text-align: center;
  background: #d0d0d0;
  box-shadow: 1px 1px 2px #222;
`;

export const Label = styled.p`
  font-size: 17px;
  font-weight: 700;
`;

export const Quantity = styled.p`
  font-size: 17px;
  font-weight: 700;
`;
