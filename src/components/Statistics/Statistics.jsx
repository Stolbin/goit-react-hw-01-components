import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatsList,
  StatisticsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <StatsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercentage>{stat.percentage}%</StatsPercentage>
          </StatisticsItem>
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
