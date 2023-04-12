import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    '-webkit-text-stroke': ({ color }) =>
      `1px ${color || theme.palette.secondary.main}`,
    textStroke: ({ color }) => `1px ${color || theme.palette.secondary.main}`,
    color: 'transparent',
    zIndex: theme.zIndex.xRayWrapper,
  },
  text: {
    position: 'relative',
    '&:before': {
      content: ({ content }) => `"${content}"`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      color: ({ color }) => color || theme.palette.secondary.main,
      zIndex: theme.zIndex.xRayText,
      textAlign: 'inherit',
    },
  },
}))
const XRayText = React.forwardRef(
  ({ color, content, wrapperClass, textClass, ...props }, ref) => {
    const classes = useStyles({ color, content })
    return (
      <Box className={[wrapperClass, classes.wrapper].join(' ')}>
        <Typography
          ref={ref}
          {...props}
          className={[textClass, classes.text].join(' ')}
        >
          {content}
        </Typography>
      </Box>
    )
  },
)
export default XRayText
