
import { connect } from "react-redux";
import Nav from './Nav';
import { compose } from "redux";

const mapStateToProps = state => ({ users: state.messages.users })
const NavContainer = compose(connect(mapStateToProps))(Nav)

export default NavContainer;
