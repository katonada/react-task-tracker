import { PropTypes } from "prop-types";
import Button from "./Button";

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <Button color="green" text="Hello green" />
      <Button color="red" text="Hello red" />
      <Button color="blue" text="Hello blue" />
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
