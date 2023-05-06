
import { connect } from "react-redux";
import Nav from './Nav';

const mapStateToProps = state => ({ users: state.messages.users })
const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;
