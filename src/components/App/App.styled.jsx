import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #010101;
  background: #f8f8f8;
  @media (min-width: 1200px) {
    padding: 0px 30px 30px 30px;
  }
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 10px auto 5px auto;
  color: #2f4f4f;
  @media (min-width: 768px) {
    font-size: 28px;
    font-weight: 700;
    margin: 20px auto 0px auto;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
    font-weight: 700;
    margin: 30px auto 0px auto;
  }
`;

export const CardTex = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 10px auto 10px auto;
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
    margin: 15px auto 15px auto;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    font-weight: 700;
    margin: 30px auto 10px auto;
  }
`;
