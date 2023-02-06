import styled from '@emotion/styled';
import { getRandomColor } from '../../utils/randomColor';

export const Section = styled.section`
  background: #dcdcdc;
  padding: 20px;
  width: 500px;
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 25px;
  box-shadow: 2px 2px 10px #e0e0e0;
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
  padding: 15px;
  border: 1px solid #f1f1f5;
  border-radius: 10px;
  background-color: ${getRandomColor};
  text-align: center;
  box-shadow: 1px 2px 4px #222;
`;

export const StatsLabel = styled.section`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
`;

export const StatsPercentage = styled.section`
  font-size: 30px;
  font-weight: 600;
  color: #f1f1f5;
`;
