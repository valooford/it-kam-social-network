import { connect } from "react-redux";
import Navbar from "./Navbar";

function mapStateToProps(state) {
  return {
    friendsList: state.sidebar.friendsList,
    usersPageNumber: state.usersPage.pageNumber
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;