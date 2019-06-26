import React from 'react'

const AppFooter = ({
  ...rest
}) => (
  <div {...rest}>
    <p>Copyright 2019 CompanyName</p>
  </div>
)

AppFooter.displayName = 'AppFooter'

export default AppFooter