import './boxmenudrop.css'
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faRobot } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/android-chrome-192x192.png'
import li from '../images/linkedIn-icon.png'
import gh from '../images/github-icon.png'
import news from '../images/newspaper.png'
import suitcase from '../images/suitcase.png'
import email from '../images/gmail-icon.png'
import img from '../images/img.png'
import about from '../images/info.png'

const BoxMenuDrop = () => {
  const [isActive, setActive] = useState('false')

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive)
  }

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setActive(!!isActive)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const wrapperRef = useRef(null)
  useOutsideHandler(wrapperRef)

  return (
    <div className="dropdown" onClick={handleToggle} ref={wrapperRef}>
      <FontAwesomeIcon className="fas fa-th dropbtn" icon={faTh} />
      <div
        id="drop"
        className={
          isActive
            ? 'dropdown-content-cont dropdown-hide'
            : 'dropdown-content-cont dropdown-show'
        }
      >
        <div className="drop-item">
          <Link className="drop-link" to="/">
            <img src={logo} alt="" />
            <p> Search </p>
          </Link>
          <Link className="drop-link" to="/about">
            <img src={about} alt="" />
            <p> About </p>
          </Link>
          <Link className="drop-link" to="/works">
            <img src={suitcase} alt="" />
            <p> Works </p>
          </Link>
          <Link className="drop-link" to="/certification">
            <img src={img} alt="" />
            <p> Certificates </p>
          </Link>
          <a
            className="drop-link"
            href="https://drive.google.com/file/d/1Kt8sHfPQFpTj7dP4q_i8kAsWThT-qsY1/view?usp=sharing"
          >
            <img src={news} alt="" />
            <p> Resume </p>
          </a>
          <a className="drop-link" href="mailto:adityamishrahere340@gmail.com">
            <img src={email} alt="" />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/ad1tyahere">
            <img src={gh} alt="" />
            <p> GitHub </p>
          </a>
          <a
            className="drop-link"
            href="https://www.linkedin.com/in/adityamishrahere/"
          >
            <img src={li} alt="" />
            <p> LinkedIn </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BoxMenuDrop
