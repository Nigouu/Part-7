const notification = ['']
  
const notificationReducer = (state = notification, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      const updatedNotification = (action.text)
      return updatedNotification
    case 'HIDE_NOTIFICATION':
      const hideNotification = ''
      return hideNotification
    default:
      return state
  }
}

var timeoutID = null

export const setNotification = (textEntered, timeDisplayed, count) => {
  const time = timeDisplayed * 1000
    return async dispatch => {

      function hide () {
          dispatch({type: 'HIDE_NOTIFICATION'})
      }

      function show () {
        dispatch({
          type: 'NOTIFICATION',
          text: textEntered
        })
      }

      if (count === 0){
        show()
        timeoutID = setTimeout(() => {
          hide()
        }, time)
      } else {
        clearTimeout(timeoutID)
        show()
        timeoutID = setTimeout(() => {
          hide()
        }, time)
      }
    } 
}
  
export default notificationReducer