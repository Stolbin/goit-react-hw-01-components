import styled from '@emotion/styled';

export const Boxs = styled.section`
  transition: scale 450ms ease;
  width: calc(100% - 20px);
  margin: 15px auto 10px auto;
  &:hover {
    scale: 1.015;
    transition: scale 650ms ease;
  }
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
  display: flex;
  width: calc(100% / 3);
  padding: 30px 20px;
  height: auto;
  border: 1px solid #f1f1f5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  background: #d0d0d0;
  box-shadow: 1px 1px 2px #222;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 700;
  @media (min-width: 425px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Quantity = styled.p`
  font-size: 14px;
  font-weight: 700;
  @media (min-width: 425px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 22px;
  }
`;
