import React from 'react'

// Import typefaces
import 'typeface-montserrat'

import profilePic from './tomas-latal.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Tomáš Látal`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Velmi zřídka píše <strong>Tomáš Látal</strong>.{' '}
          Mnohem víc času tráví na{' '}
          <a href="https://twitter.com/tomaslatal">Twitteru</a>
        </p>
      </div>
    )
  }
}

export default Bio
