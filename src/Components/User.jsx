import PropTypes from 'prop-types'
export const User = ({user,state}) => {

  const handleClick = () => {
    alert(user)
  }

  return (
    <li className="item">
      {user} {state && '✔'}
      <button onClick={handleClick}>Ver +</button>
    </li>
  );
}

User.propTypes = {
  user: PropTypes.string,
  state: PropTypes.bool
}
