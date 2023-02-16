import styled from '@emotion/styled';
import { getRandomColor } from '../../utils/randomColor';

export const Section = styled.section`
  background: #dcdcdc;
  padding: 20px;
  width: calc(100% - 20px);
  border: 1px solid gray;
  border-radius: 8px;
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

export const Title = styled.section`
  text-transform: uppercase;
  padding: 20px 40px;
  background-color: #ffffff;
  color: black;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

export const StatsList = styled.section`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StatisticsItem = styled.section`
  width: calc(100% / 4);
  padding: 10px 4px;
  border: 1px solid #f1f1f5;
  border-radius: 10px;
  background-color: ${getRandomColor};
  text-align: center;
  box-shadow: 1px 2px 4px #222;
  @media (min-width: 425px) {
    padding: 14px 8px;
  }
  @media (min-width: 768px) {
    padding: 12px;
  }
  @media (min-width: 1200px) {
    padding: 16px;
  }
`;

export const StatsLabel = styled.section`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
  @media (min-width: 425px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StatsPercentage = styled.section`
  font-size: 16px;
  font-weight: 600;
  color: #f1f1f5;
  @media (min-width: 425px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;
