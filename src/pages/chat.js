// Certification.js
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CertificateContent } from '../data/certificateContent'
import './chat.css'
import Header from '../components/header'
import Footer from '../components/footer'
import FilterMenu from '../components/filtermenu'

const certificationPage = ({ results }) => {
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {CertificateContent.length} results (0.57 seconds)
        </p>
        <div className="projects-content">
          {CertificateContent.map((item) => (
            <div className="projects-card">
              <a href={`${item.link}`} className="project-link">
                <p> {`${item.link}`} </p>
                <h3>{`${item.name}`}</h3>
              </a>
              <div className="projects-details">
                <div className="projects-text-container">
                  <p className="projects-excerpt">{`${item.excerpt}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default certificationPage
