import React from 'react'
import * as Components from '../components'

export default () => {
  return (
    <Components.String.GlobalWrapper title='Home'>
      <Components.Quark.Canvas3D
        scenes={['Default']}
        id='MainScene'
      />
    </Components.String.GlobalWrapper>
  )
}
