import PropTypes from 'prop-types';
import { StatisticsLine } from './styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsLine>Good: {good}</StatisticsLine>
      <StatisticsLine>Neutral: {neutral}</StatisticsLine>
      <StatisticsLine>Bad: {bad}</StatisticsLine>
      <StatisticsLine>Total: {total}</StatisticsLine>
      <StatisticsLine>Positive Feedback: {positivePercentage}%</StatisticsLine>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};
