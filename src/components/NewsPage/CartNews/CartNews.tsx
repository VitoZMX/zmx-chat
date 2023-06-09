import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {CardActionArea, useTheme} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {CartNewsPropsType} from '../../../types/types'

export function CartNews({img, title, text, id}: CartNewsPropsType) {
    const theme = useTheme()

    return (
        <Card sx={{
            maxWidth: theme.breakpoints.down('sm') ? 'auto' : '345',
            display: 'flex',
            alignItems: 'flex-start',
            height: '100%'
        }}>
            <CardActionArea component={NavLink} to={`/news/${id}`} sx={{height: '100%'}}>
                <CardMedia
                    sx={{objectFit: 'cover', height: '140px'}}
                    component="img"
                    image={img}
                    alt="alt"
                />
                <CardContent>
                    <Typography style={{textIndent: '12px'}} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography style={{textIndent: '6px'}} variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}