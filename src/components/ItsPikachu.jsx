import React from 'react'
import './ItsPikachu.css'

export const ItsPikachu = () => {
  return (
    <div class="its-pikachu-container">
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/WSGV_n6H1n0?si=FMFf0xmAbDc_JyeY&autoplay=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        >
        </iframe>
    </div>
  )
}
