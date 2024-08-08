import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { fonts } from '../../src/styles/typography'
////////////////////////////////////////////////////////////////////////////////////////Prep Components

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
]

////////////////////////////////////////////////////////////////////////////////////////////////Styles

const SectionWrap = styled.section`
  background: #acdffb;
`

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  * {
    width: calc(100vw / 7);

    @media (max-width: 1660px) {
      width: 17.5vw;
    }
    @media (max-width: 768px) {
      width: 30vw;
    }
  }
`

const Block = styled.div`
  position: relative;
  display: flex;
`

const Paragraph = styled.p`
  display: none;
  text-align: center;
  margin-top: 48px;
  font-weight: 600;
  z-index: 1;
  position: relative;
  padding: 0 32px 32px 32px;
  @media (max-width: 970px) {
    display: block;
    font-size: ${fonts.font24.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
  }
`

const Item = ({ image }: { image: string }) => {
  return (
    <ItemWrap>
      <Image src={`/img/${image}.png`} alt="bunny" width={320} height={320} />
    </ItemWrap>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////Component

const BunniesCarousel = () => {
  useEffect(() => {
    pressHold()
  })

  const pressHold = () => {
    let clicked = false
    let count: number,
      direction: number,
      sizeSlider: number,
      state: number,
      target
    let item = document.getElementById('bunniesZone') as any
    let expansionRate = 22.5 // speed for desktop

    item.addEventListener('mousedown', (ev: Event) => {
      ev.preventDefault()
      item = document.getElementById('bunniesZone') as HTMLElement
      target = item.style.transform
      sizeSlider = (item.children.length - 1) * expansionRate
      state = parseInt(target.substring(11, target.indexOf(')') - 1))
      clicked = true
      count = 0
    })

    item.addEventListener('mousemove', (ev: any) => {
      ev.preventDefault()
      if (clicked) {
        direction = ev.movementX < 0 ? -1 : 1
        count = count + direction / 5
        item.style.transform = `translateX(${state + count * 2}vw)`.replace(
          '--',
          '-'
        )
      }
    })
    item.addEventListener('mouseup', (ev: Event) => {
      const oneElementWidth = item.firstChild.offsetWidth
      const numberOfElement = item.children.length
      const nextPosition =
        ((oneElementWidth * numberOfElement) / window.innerWidth - 1) * -100
      const previousPosition = 0

      ev.preventDefault()
      clicked = false
      count = 0
      if (direction === 1) {
        state = previousPosition
      } else {
        state = nextPosition
      }
      item.style.transition = `all .5s ease-out`
      item.style.transform = `translateX(${state}vw)`.replace('--', '-')
      setTimeout(() => {
        item.style.transition = ''
      }, 500)
    })
  }

  const setVariables = () => {
    const expansionRate = 100
    const element = document.getElementById('bunniesZone') as any
    const sizeSlider = (element.children.length - 1) * expansionRate
    const target = element.style.transform
    const currentPosition = parseInt(
      target.substring(11, target.indexOf(')') - 1)
    )

    const oneElementWidth = element.firstChild.offsetWidth
    const numberOfElement = element.children.length

    const nextPosition =
      ((oneElementWidth * numberOfElement) / window.innerWidth - 1) * -100
    const previousPosition = 0

    return {
      expansionRate: expansionRate,
      element: element,
      currentPosition: currentPosition,
      nextPosition: nextPosition,
      previousPosition: previousPosition,
      sizeSlider: sizeSlider,
    }
  }

  const handlers = useSwipeable({
    onSwiping: ({ deltaX, dir }) => {
      if (dir === 'Left' || 'Right') {
        const { currentPosition, element } = setVariables()
        const speed = 1 * Math.sign(deltaX)
        element.style.transform = `translateX(${currentPosition + speed}vw)`
      }
    },
    onSwipedLeft: () => {
      const { nextPosition, element } = setVariables()
      element.style.transition = `all .5s ease-out`
      element.style.transform = `translateX(${nextPosition}vw)`
      setTimeout(() => {
        element.style.transition = ''
      }, 500)
    },
    onSwipedRight: () => {
      const { previousPosition, element } = setVariables()
      element.style.transition = `all .5s ease-out`
      element.style.transform = `translateX(${previousPosition}vw)`
      setTimeout(() => {
        element.style.transition = ''
      }, 500)
    },
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
  })

  return (
    <SectionWrap>
      <div className="bunnies">
        <Block
          id="bunniesZone"
          style={{ transform: 'translateX(0)' }}
          {...handlers}
        >
          {historyItems.map((element) => {
            return <Item key={element.image} image={element.image} />
          })}
        </Block>
      </div>
      <Paragraph>
        Da Bunny is a tribe of 8,000 programmatically generated NFT bunnies that
        reside in the Ethereum blockchain. Generation 1 was incubated from a
        randomized combination of more than 200 unique traits, out of 4,320,000
        total possibilities. Each bunny has a unique character and appearance
        which makes him/her “Da” Bunny....
      </Paragraph>
    </SectionWrap>
  )
}

export default BunniesCarousel
