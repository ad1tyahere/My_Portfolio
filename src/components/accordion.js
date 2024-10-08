import React, { useState } from 'react'
import './accordion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const AccordionComponent = () => {
  const classes = useStyles()

  return (
    <div className="accordion-container">
      <div className="accordion-sub-container">
        <div className={classes.root}>
          <h2 style={{ fontWeight: 'normal', color: '#333' }}>
            People also ask
          </h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Is Aditya open for work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. He is currently looking for opportunities in software
                development and data science.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                What is the fastest way to reach Aditya Mishra?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                you can email him at adityamishrahere340@gmail.com or call him
                at +91 9112077771.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                How is Aditya at work??
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Aditya is an extremely professional individual who's very
                dedicated and task-oriented.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default AccordionComponent
