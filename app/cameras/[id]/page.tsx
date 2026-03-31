import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Photography data - should match the data in the main page
const photos = [
  {
    id: 'Yosemite_CottonCandy-1',
    title: 'Cotton Candy Half Dome',
    description: 'Sunset from Olmstead Point with some nice cloud action.',
    fullDescription: '',
    imageUrl: '/photos/CottonCandyOlmstead.jpg',
    alt: 'Cotton Candy Half Dome sunset from Olmstead Point',
    camera: '',
    lens: '',
    settings: '',
    location: '',
    date: ''
  },
  {
    id: 'photo-2',
    title: 'SF Skyline at Sunrise',
    description: 'Light on the SF skyline from Panorama Park',
    fullDescription: '',
    imageUrl: '/photos/SF_SkyLine.jpg', // Replace with actual image
    alt: '',
    camera: '',
    lens: '',
    settings: '',
    location: '',
    date: ''
  },
  {
    id: 'photo-3',
    title: 'Fort Point Sunset',
    description: 'Golden Gate Backlit by the sunset',
    fullDescription: '',
    imageUrl: '/photos/FortP_Sunset.jpg', // Replace with actual image
    alt: '',
    camera: '',
    lens: '',
    settings: '',
    location: '',
    date: ''
  },
  {
    id: 'photo-4',
    title: 'Crater Lake Sunset ',
    description: 'Sunset at Crater Lake',
    fullDescription: '',
    imageUrl: '/photos/oregon_round_1-01.jpg', // Replace with actual image
    alt: '',
    camera: '',
    lens: '',
    settings: '',
    location: '',
    date: ''
  }
]

interface PhotoPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params
  const photo = photos.find(p => p.id === id)
  
  if (!photo) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black -mx-4 -mt-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-10">
        <Link 
          href="/cameras"
          className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>
      </div>

      {/* Main image */}
      <div className="relative h-screen w-full">
        <Image
          src={photo.imageUrl}
          alt={photo.alt}
          fill
          className="object-contain"
          priority
        />
        
        {/* Image overlay with title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-5xl font-bold mb-4">{photo.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{photo.description}</p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="whitespace-pre-line text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {photo.fullDescription}
          </div>
        </div>

        {/* Technical details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Technical Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Camera:</span>
                <span className="font-medium">{photo.camera}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Lens:</span>
                <span className="font-medium">{photo.lens}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Settings:</span>
                <span className="font-medium">{photo.settings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Location:</span>
                <span className="font-medium">{photo.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date:</span>
                <span className="font-medium">{photo.date}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Behind the Shot</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {/* Add your behind-the-scenes story here */}
            </p>
          </div>
        </div>

        {/* Navigation to other photos */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <Link 
              href="/cameras"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </Link>
            
            <Link 
              href="/photography"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View Full Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for the photos
export async function generateStaticParams() {
  return photos.map((photo) => ({
    id: photo.id,
  }))
}
