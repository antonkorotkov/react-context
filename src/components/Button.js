import React from 'react'
import LanguageContext from '../contexts/languageContext'
import ColorContext from '../contexts/colorContext'

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === 'english' ? 'Submit' : 'Voorleggen'
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    )
  }
}

export default Button
