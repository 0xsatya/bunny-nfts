import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CalendarBoxOne from './CalendarBoxOne';
import CalendarBoxTwo from './CalendarBoxTwo';
import CalendarBoxFour from './CalendarBoxFour';
import CalendarBoxThree from './CalendarBoxThree';
import { Waypoint } from 'react-waypoint';
import fonts from '../../../styles/typography';

const Section = styled.section`
  background-color: #FF7272;
  position: relative;
  padding: 15rem 0 4rem 0;

  @media (max-width: 1440px) {
    padding: 20rem 0 4rem 0;
  }

  @media (max-width: 1000px) {
    padding: 25rem 0 4rem 0;
  }

  @media (max-width: 768px) {
    padding: 15rem 0 4rem 0;
  }

  @media (max-width: 550px) {
    padding-bottom: 16px;
  }

  @media (max-width: 400px) {
    padding: 10rem 0 4rem 0;
  }
`;

const InnerWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;

const RocketBunny = styled.div<{ rocketOnScreen: boolean }>`
  position: absolute;
  z-index: 1;
  top: -30rem;
  height: 22.5rem;
  width: 125%;
  right: ${({ rocketOnScreen }) => rocketOnScreen ? '-12.5%' : ' 200vw'};
  transition: right .7s ease-out;

  @media (max-width: 1440px) {
    width: 1600px;
    top: -35rem;
    right: ${({ rocketOnScreen }) => rocketOnScreen ? '-50px' : ' 200vw'};
  }

  @media (max-width: 1200px) {
    top: -30rem;
    width: 1320px;
    right: ${({ rocketOnScreen }) => rocketOnScreen ? '0' : ' 200vw'};
  }

  @media (max-width: 1000px) {
    width: 1050x;
  }

  @media (max-width: 768px) {
    top: -23rem;
  }

  @media (max-width: 800px) {
    width: 880px;
  }

  @media (max-width: 600px) {
    top: -18rem;
    width: 660px;
  }

  @media (max-width: 400px) {
    top: -11rem;
    width: 440px;
  }
`;

const BunnyImage = styled.div`
  position: absolute;
  z-index: 1;
  right: 0px;
  bottom: -310px;
  width: 460px;
  @media (max-width: 1660px) {
    right: -4rem;
    bottom: -15rem;
    width: 420px;
  }
  @media (max-width: 1170px) {
    right: 50%;
    transform: translateX(50%);
    bottom: -13.375rem;
    width: 450px;
  }
  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
    bottom: -13.375rem;
    width: 350px;
  }
  @media (max-width: 500px) {
    bottom: -6.375rem;
    width: 210px;
  }
`;

const ActivationsBox = styled.div`
  background-color: #FFF387;
  box-shadow:  24px 1.75rem00 #000000;
  border: 7px solid #000000;
  border-radius: 10px;
  position: relative;
  padding-top: 5rem;
  margin: 0 80px;
  margin-bottom: 10.9375rem;
  box-shadow: 12px 12px 0px 0px #000000;

  @media (max-width: 1660px) {
    padding-top: 40px;
  }
  @media (max-width: 768px) {
    margin: 0 20px;
    padding-top: 40px;
  }
`;

const VectorWrap = styled.div`
  position: absolute;
  left: 50%;
  top: -7.5rem;
  height: 11.25rem;
  transform: translateX(-50%);
  z-index: 1;
  @media (max-width: 1000px) {
    top: -8rem;
  }
  @media (max-width: 768px) {
    top: -7rem;
  }
  @media (max-width: 500px) {
    top: -56px;
  }
  svg {
    height: 8.25rem;
    @media (max-width: 1000px) {
      height: 9rem;
    }
    @media (max-width: 768px) {
      height: 128px;
    }
    @media (max-width: 500px) {
      height: 60px;
    }
  }
`;

const ActivationTitle = styled.h3`
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  font-weight: 700;
  text-align: center;
  @media (max-width: 1660px) {
    font-size: ${fonts.font40.w1660.fontSize};
    line-height: ${fonts.font40.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
    line-height: ${fonts.font40.w1440.height};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
    line-height: ${fonts.font40.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font40.w500.fontSize};
    line-height: ${fonts.font40.w500.height};
    margin-top: 12px;
  }
`;

const ActivationList = styled.ul`
  padding: 4rem 80px 8.125rem 80px;
  height: 100%;
  width: 100%;
  @media (max-width: 1660px) {
    padding: 3rem 80px 8rem 60px;
  }
  @media (max-width: 1170px) {
    padding: 5.625rem 80px 18rem 80px;
  }
  @media (max-width: 768px) {
    padding: 32px 25px 11rem 25px;
    list-style: none;
  }
  @media (max-width: 500px) {
    padding: 32px 25px 9.5rem 25px;
  }
`;

const ActivationItem = styled.li`
  font-weight: 700;
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  margin-bottom: 18px;
  color: #000;

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
    line-height: ${fonts.font24.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
    line-height: ${fonts.font24.w500.height};
    margin-bottom: 7px;
  }

  &&:last-of-type {
    width: 70%;
    @media (max-width: 1170px) {
      width: 100%;
    }
  }

  span {
    color:#BE6DFF;
    margin-right: 12px;
  }
`;

const CalendarTitle = styled.h3`
  font-weight: 700;
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  color: #fff;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  @media (max-width: 1660px) {
    font-size: ${fonts.font40.w1660.fontSize};
    line-height: ${fonts.font40.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
    line-height: ${fonts.font40.w1440.height};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
    line-height: ${fonts.font40.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font40.w500.fontSize};
    line-height: ${fonts.font40.w500.height};
  }
`;

const CalendarTitleWrap = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  margin: 10.9375rem 0 4.375rem 0;
  @media (max-width: 1100px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    margin: 80px 0 0 0;
  }
`;

const CalendarTitleShadow = styled.h3`
  position: absolute;
  top: .25rem;
  left: .25rem;
  font-weight: 700;
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  color: #000;
  z-index: 0;
  white-space: nowrap;

  @media (max-width: 1660px) {
    font-size: ${fonts.font40.w1660.fontSize};
    line-height: ${fonts.font40.w1660.height};
    top: .15rem;
    left: .15rem;
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
    line-height: ${fonts.font40.w1440.height};
  }
  @media (max-width: 1100px) {
    left: 50%;
    transform: translateX(calc(-50% + .15rem));
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
    line-height: ${fonts.font40.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font40.w500.fontSize};
    line-height: ${fonts.font40.w500.height};
    transform: translateX(calc(-50% + .15rem));
  }
`;

const CalendarLimit = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0  24px;
`;

const TopVector = () => {
  return (
    <svg width="417" height="180" viewBox="0 0 417 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 180H416.606V137.996C416.606 126.036 406.791 116.183 394.822 116.183H237.496V96.2464C251.86 86.6812 261.166 70.7234 261.166 52.3896C261.166 23.3969
          237.769 0 208.781 0C179.802 0 156.127 23.3969 156.127 52.3896C156.127 70.7234 165.697 86.6764 179.797 96.2464V116.183H21.794C9.82924 116.183 0 126.036 0
          137.996V180Z"
        fill="black" />
    </svg>
  )
}

const content = [
  { percent: '10%', text: 'Pay back our team and send Da Bunnies some pizza.' },
  { percent: '20%', text: 'Airdrop giveaway Mysterious Eggs for top holders & HODL rally event announcement.' },
  { percent: '60%', text: 'DaBunny Island achivement 1/3 unlocked:     Activate DaBunny Island Lifestyle Music Channel on YouTube and Spotify.' },
  { percent: '80%', text: 'DaBunny Island achivement 2/3 unlocked:          DaBunny limited edition digital merchandise minting and DaBunny X NIFTI Studios collab. Details TBA on Discord.' },
  { percent: '95%', text: 'DaBunny Island achivement 3/3 unlocked:          Announcement of first DaBunny Island metaverse virtual live music event & lineup.' },
  { percent: '100%', text: ' We lambo! Announcement of metaverse celebration events, in-person live party & milestone billboard. Giveaway for all current NFT holders.' }
];

const Roadmap = () => {
  const [rocketOnScreen, setRocketOnScreen] = useState(false);

  const resizeEventHandle = () => {
    const windowWidth = window.innerWidth;
    switch (true) {
      case windowWidth > 1660:

        /* if (rocketOnScreen) {
          setPositionY(-12.5);
        } else {
          setCalcPosition(-12.5);
        } */
        break;
      default:
        /* if (rocketOnScreen) {
          setPositionY(-25);
        } else {
          setCalcPosition(-25);
        } */
        break;
    }
  };

  useEffect(() => {
    resizeEventHandle();
    window.addEventListener('resize', resizeEventHandle);
    return () => {
      window.removeEventListener('resize', resizeEventHandle);
    };
  }, []);

  const rocketAppears = () => {
    setRocketOnScreen(true);
  }

  return (
    <Section>
      <InnerWrap id="roadmap">
        <RocketBunny rocketOnScreen={rocketOnScreen}>
          <Waypoint
            onEnter={rocketAppears}
          />
          <Image
            width={2228}
            height={607}
            src="/img/rocket_bunny.png"
            alt=""
          />
        </RocketBunny>
        <ActivationsBox>
          <VectorWrap>
            <TopVector />
          </VectorWrap>
          <ActivationTitle>Roadmap Activations</ActivationTitle>
          <ActivationList>
            {content.map((item, index) => {
              return (
                <ActivationItem key={index}>
                  <span>{item.percent} </span>{item.text}
                </ActivationItem>
              )
            })}
          </ActivationList>
          <BunnyImage>
            <Image
              width={650}
              height={809}
              src="/img/bunny4.png"
              alt=""
            />
          </BunnyImage>
        </ActivationsBox>
        <CalendarLimit>
          <CalendarTitleWrap>
            <CalendarTitle>
              Event Calendar
            </CalendarTitle>
            <CalendarTitleShadow>
              Event Calendar
            </CalendarTitleShadow>
          </CalendarTitleWrap>
          <CalendarBoxOne />
          <CalendarBoxTwo />
          <CalendarBoxThree />
          <CalendarBoxFour />
        </CalendarLimit>
      </InnerWrap>
    </Section >
  )
}

export default Roadmap;
