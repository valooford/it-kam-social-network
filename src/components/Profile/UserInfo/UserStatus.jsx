import React, { useState, useEffect } from 'react';
import styles from './UserInfo.module.css';

function UserStatus(props) {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.statusText);

  useEffect(() => {
    setStatus(props.statusText);
  }, [props.statusText]);

  let toggleEditMode = () => {
    if (!props.myProfile) return;
    setEditMode(!editMode);
  }
  let handleStatusInput = (e) => {
    setStatus(e.target.value);
  }
  let handleStatusUpdate = () => {
    toggleEditMode();
    if (props.statusText !== status) {
      props.updateUserStatus(status);
    }
  }

  return (
    <span className={styles.status}>
      {editMode
        ? 
        <input autoFocus onBlur={ handleStatusUpdate } onChange={ handleStatusInput } value={status} />
        : 
        <span onDoubleClick={toggleEditMode}>{status || "-----"}</span>}
    </span>
  );
}

/*class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.statusText
  }
  componentDidUpdate(prevProps) {
    if (this.props.statusText !== prevProps.statusText) {
      this.setState({status: this.props.statusText});
    }
  }
  toggleEditMode = () => {
    if (!this.props.myProfile) return;
    this.setState({editMode: !this.state.editMode});
  }
  handleStatusInput = (e) => {
    this.setState({status: e.target.value});
  }
  handleStatusUpdate = () => {
    this.toggleEditMode();
    if (this.props.statusText !== this.state.status) {
      this.props.updateUserStatus(this.state.status);
    }
  }
  render() {
    return (
      <span className={styles.status}>
        {this.state.editMode
          ? 
          <input autoFocus onBlur={ this.handleStatusUpdate } onChange={ this.handleStatusInput } value={this.state.status} />
          : 
          <span onDoubleClick={this.toggleEditMode}>{this.state.status || "-----"}</span>}
      </span>
    );
  }
}*/

export default UserStatus;