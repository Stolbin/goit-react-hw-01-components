import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
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
export const Table = styled.table`
  table-layout: initial;
  width: 100%;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  color: gray;
  overflow: hidden;
  border-spacing: 0px;
  box-shadow: 2px 2px 10px #e0e0e0;
`;
export const TableHeader = styled.thead`
  color: #fff;
  background-color: #4586ff;
`;
export const TableRowHeader = styled.tr`
  border: 1px solid gray;
`;
export const TableHeaderCell = styled.th`
  border-bottom: 2px solid black;
  padding: 8px;
  font-size: 14px;
  :first-of-type {
    border-top-left-radius: 8px;
    border-right: 2px solid black;
  }
  :last-of-type {
    border-top-right-radius: 8px;
    border-left: 2px solid black;
  }
  @media (min-width: 425px) {
    padding: 10px;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    padding: 12px;
    font-size: 20px;
  }
`;
export const TableBody = styled.tbody`
  text-transform: capitalize;
  font-weight: 600;
`;
export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #e8e8e8;
  }
`;
export const TableCell = styled.td`
  padding: 6px;
  font-size: 14px;
  :first-of-type {
    border-right: 2px solid black;
  }
  :last-of-type {
    border-left: 2px solid black;
  }
  @media (min-width: 425px) {
    padding: 7px;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    padding: 8px;
    font-size: 18px;
  }
`;
