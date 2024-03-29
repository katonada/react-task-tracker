import { PropTypes } from "prop-types";
import Button from "./Button";

function Header({ title }) {

  const onClick = () => {
    console.log('click');
  }

  return (
    <header>
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
