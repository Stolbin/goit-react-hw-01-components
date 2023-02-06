import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  background: #dcdcdc;
  padding: 20px;
  width: 500px;
  border: 1px solid gray;
  border-radius: 8px;
  box-shadow: 2px 2px 10px #e0e0e0;
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
  padding: 12px 0;
  :first-of-type {
    border-top-left-radius: 8px;
    border-right: 2px solid black;
  }
  :last-of-type {
    border-top-right-radius: 8px;
    border-left: 2px solid black;
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
  padding: 8px 0;
  :first-of-type {
    border-right: 2px solid black;
  }
  :last-of-type {
    border-left: 2px solid black;
  }
`;
