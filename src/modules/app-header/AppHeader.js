import React from 'react'

const AppHeader = ({
  ...rest
}) => (
  <div {...rest}>
    <h1>Application Header</h1>
  </div>
)

AppHeader.displayName = 'AppHeader'

export default AppHeader