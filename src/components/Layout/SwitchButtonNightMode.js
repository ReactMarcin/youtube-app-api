import React from 'react'
import {
    ButtonTheme, Icon
} from './styles/ButtonSwitchNightMode'

const ButtonSwitchNightMode = ({ nightMode, handleNightMode }) => (
    <ButtonTheme
        title={nightMode ? 'Click to change on day mode' : 'Click to change on night mode'}
        onClick={handleNightMode}
    >
        {nightMode ? (
            <Icon className="material-icons">brightness_5</Icon>
                ) : (
            <Icon className="material-icons">brightness_4</Icon>
        )}
    </ButtonTheme>
);
export default ButtonSwitchNightMode