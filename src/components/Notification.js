import React from 'react'
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'

const Notification = (props) => {
  console.log(props);

  // const notification = useSelector(state => state.notifications)

  const notification = () => {
    console.log(props.notifications);
    return props.notifications
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification

// export default connect(
//   null, 
//   { mapStateToProps }
// )(Notification)