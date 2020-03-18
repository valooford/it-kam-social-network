import { sendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function mapStateToProps(state) {
  return {
    interlocutors: state.dialogsPage.interlocutors,
    messages: state.dialogsPage.messages,
    isAuthorized: state.auth.isAuthorized
  };
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMessage })
)(Dialogs);