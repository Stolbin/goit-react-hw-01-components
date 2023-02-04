import PropTypes from 'prop-types';
import {
  Section,
  Table,
  TableHeader,
  TableRowHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from './Transactions.styled';

export const Transactions = ({ els }) => {
  return (
    <Section>
      <Table>
        <TableHeader>
          <TableRowHeader>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
          </TableRowHeader>
        </TableHeader>

        <TableBody>
          {els.map(el => (
            <TableRow key={el.id}>
              <TableCell>{el.type}</TableCell>
              <TableCell>{el.amount}</TableCell>
              <TableCell>{el.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

Transactions.propTypes = {
  els: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
