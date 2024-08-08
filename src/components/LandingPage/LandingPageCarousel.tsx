import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from 'next/image'

type Props = {}
let historyItems = [
  {
    image: `SlideBar_1`,
  },
  {
    image: `SlideBar_2`,
  },
  {
    image: `SlideBar_3`,
  },
  {
    image: `SlideBar_4`,
  },
  {
    image: `SlideBar_5`,
  },
  {
    image: `SlideBar_6`,
  },
  {
    image: `SlideBar_7`,
  },
  {
    image: `SlideBar_2`,
  },
  {
    image: `SlideBar_3`,
  },
  {
    image: `SlideBar_4`,
  },
  {
    image: `SlideBar_5`,
  },
  {
    image: `SlideBar_6`,
  },
  {
    image: `SlideBar_7`,
  },
]

const handleDragStart = (e: any) => e.preventDefault()
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 6 },
}
const items = historyItems.map((item, index) => (
  <Image
    src={`/img/${item.image}.png`}
    alt="bunny"
    width={320}
    height={320}
    key={index}
  />
))
const LandingPageCarousel = (props: Props) => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      disableButtonsControls
    />
  )
}

export default LandingPageCarousel
