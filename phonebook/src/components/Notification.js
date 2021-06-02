import React from 'react'

const Notification = ({ message: { content, status } }) => {

  if (content === null) return null

  return (
    <div className={`notification ${status === 'error' ? 'notification-error' : ''}}`}>
      {content}
    </div>
  )
}

export default Notification
