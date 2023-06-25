import React from 'react'
import Box from '@mui/material/Box'
import {FriendsTabPanelPropsType} from '../../../types/types'

export function accessibilityProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export function TabPanel(props: FriendsTabPanelPropsType) {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{paddingTop: '24px'}}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    )
}