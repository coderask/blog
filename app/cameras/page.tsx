'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Photography data - add your actual photos here
const photos = [
  {
    id: 'Yosemite_CottonCandy-1',
    title: 'Cotton Candy Half Dome',
    description: 'Sunset from Olmstead Point with some nice cloud action.',
    fullDescription: '',
    imageUrl: '/photos/CottonCandyOlmstead.jpg',
    alt: 'Cotton Candy Half Dome sunset from Olmstead Point'
  },
  {
    id: 'photo-2',
    title: 'SF Skyline at Sunrise',
    description: 'Light on the SF skyline from Panorama Park',
    fullDescription: '',
    imageUrl: '/photos/SF_SkyLine.jpg', // Replace with actual image
    alt: ''
  },
  {
    id: 'photo-3',
    title: 'Fort Point Sunset',
    description: 'Golden Gate Backlit by the sunset',
    fullDescription: '',
    imageUrl: '/photos/FortP_Sunset.jpg', // Replace with actual image
    alt: ''
  }, 
  {
    id: 'photo-4',
    title: 'Crater Lake Sunset ',
    description: 'Crater lake at Sunset',
    fullDescription: '',
    imageUrl: '/photos/oregon_round_1-01.jpg', // Replace with actual image
    alt: ''
  }
]

export default function CamerasPage() {
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null)

  return (
    <div className="min-h-screen -mx-4 -mt-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Full-screen scrollable images */}
      <div className="space-y-0">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="relative h-screen w-full overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredPhoto(photo.id)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            <Link href={`/cameras/${photo.id}`}>
              <div className="relative h-full w-full">
                <Image
                  src={photo.imageUrl}
                  alt={photo.alt}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredPhoto === photo.id ? 'opacity-60' : 'opacity-0'
                }`} />
                
                {/* Hover description */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredPhoto === photo.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white px-8 max-w-2xl">
                    <h2 className="text-4xl font-bold mb-4">{photo.title}</h2>
                    <p className="text-xl leading-relaxed">{photo.description}</p>
                    <p className="text-lg mt-4 opacity-80">Click to view full story</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom section with link to more photos */}
      <div className="bg-black text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Explore More Photography</h2>
          <p className="text-xl mb-8 text-gray-300">
            Discover my complete portfolio and behind-the-scenes stories
          </p>
          <Link 
            href="/photography" 
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-200"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

