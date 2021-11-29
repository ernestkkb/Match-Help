import React from 'react'
import Card from './Card'
import {getAllPosts} from '../utils/api'

function DisplayPosts({ posts }){

    return(

      <ul className = 'grid space-around'>
        {posts.map((post, index) => {
          const { caption, photoURL, avatarURL, profileURL, deadline, username } = post
          return(
            <li key = {index}> 
            <Card 
              caption = {caption}
              deadline = {deadline}
              photo = {photoURL}
              href = {profileURL}
              username = {username}
              avatar = {avatarURL}
            />
          </li>
          )
        })}
      </ul>
    )
}

export default function Feed(){

  const [postings, setPostings] = React.useState([])

  React.useEffect(() => {
    getAllPosts()
    .then((currentPosts) => {
      setPostings(currentPosts)
      })
    .catch((error) => {
      console.log(error)
      })
  }, [])

  return (
    <React.Fragment>
      {postings && <DisplayPosts posts = {postings}/>}
    </React.Fragment>
  )
}