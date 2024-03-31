import PropTypes from 'prop-types';
export const Card = ({user,count}) => {
  return (
    <ul>
      <li>{user} - {count}</li>
    </ul>
  )
}
Card.propTypes = {
  user: PropTypes.string,
  count: PropTypes.number
}