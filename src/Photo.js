import React from 'react'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    total_photos,
    instagram_username,
    twitter_username,
    profile_image: { medium },
  
   
  },
}) => {
  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>❤️ {likes}</p>
          <p>Instagram {instagram_username}</p>
          <p>Twitter {twitter_username}</p>
          <p>I have {total_photos} photos in my portfolio</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt='' className='user-img' />
        </a>
      </div>
    </article>
  )
}

export default Photo
