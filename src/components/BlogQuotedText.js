import * as React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import RichText from './RichText'

const BlogQuotedText = ({ data }) => {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={12} className={styles.quotesTextWrapper}>
          <Box>
            <FormatQuoteIcon className={styles.quotesIcon} />
          </Box>
          <RichText
            variant="h4"
            className={styles.blogQuotedText}
            document={JSON.parse(data.quoteText.raw)}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogQuotedText

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
  },
  quotesIcon: {
    width: '5rem',
    height: '5rem',
    transform: 'scale(-1)',
    fill: theme.palette.grey[600],
    marginLeft: theme.spacing(-2),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(0),
    },
  },
  quotesTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5),
      flexDirection: 'row',
    },
  },
  blogQuotedText: {
    color: theme.palette.grey[600],
    fontWeight: '400',
    fontSize: '1.25rem',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
      fontSize: '2rem',
    },
  },
}))
