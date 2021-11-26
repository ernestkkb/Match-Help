import React from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaHourglass } from 'react-icons/fa'

export default function Card({caption, deadline, photo, href, username, avatar}){

    return(
        <div className = 'card'>
                <img
                    className='avatar-small'
                    src = {avatar}
                    alt = {`Avatar for ${username}`}
                />
            <h2>
                {caption}
            </h2>

            <img 
            className = 'photo'
            src = {photo}
            alt = {`Photos of items donated`}
            width = "500"
            height = "300"
            />

            <ul className = 'card-list'>
                <li>
                <FaUser color='rgb(255, 191, 116)' size={22} />
                <a className='link' href = {href}>{username}</a>
                </li>
                <li>
                <FaHourglass color='rgb(255, 191, 116)' size={22} />
                {deadline}
                </li>
            </ul>    
        </div>
    )
}
Card.propTypes = {
    caption: PropTypes.string.isRequired,
    deadline:PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}