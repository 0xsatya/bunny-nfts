import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../styles/typography';

const ContentImage = styled.div`
  z-index: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  position: relative;
`;

const ContentText = styled.div`
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.div`
  position: relative;
  margin-top: 90px;
`;

const BlockText = styled.div`
  font-size: ${fonts.font24.w768.fontSize};
  line-height: ${fonts.font24.w768.height};
  width: 100%;
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
    line-height: ${fonts.font24.w500.height};
  }
  p {
    text-align: center;
    padding: 0 48px;
  }
`;

const BlockWrap = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const ContentMobile = () => {
  return (
    <ContentWrap>
      <ContentText>
        <BlockWrap>
          <BlockText>
            <p>
            The origin of Da Bunny tribe is a one-in-a-billion, singular coincidence on earth over the course of evolution.
            <span className='line-break'></span>
For generations, life couldn&apos;t be more boring for a tribe of Lilac Rabbits inhabited on the Easter Island of Chile...
            </p>
          </BlockText>
          <ContentImage>
            <Image
              width={769}
              height={684}
              src={"/img/path_mobile_top.png"}
              alt=""
            />
          </ContentImage>
        </BlockWrap>
        <BlockWrap>
          <BlockText>
            <p>
              These bunnies spent their lifetime at the factory, miserable, starved and deprived, mass-producing artificial eggs for a festival celebrated in the post-industrialized human society — in a meager exchange for only three carrots a day...
            </p>
          </BlockText>
          <ContentImage>
            <Image
              width={769}
              height={648}
              src={"/img/path_mobile_middle.png"}
              alt=""
            />
          </ContentImage>
        </BlockWrap>
        <BlockWrap>
          <BlockText>
            <p>
            The life-changing moment arrived one day when a tribe member found an idled Antminer S19 crypto mining machine in the remnants of an abandoned factory havocked by a deadly volcanic erruption.
            <span className='line-break'></span>
            It soon occurred to a bunny that he can get “ETH” from the machine.

The “Aha!” moments continued to cascade, and one day, a tribe member decided to take funny portraits of everyone on the island for fun and sell online as NFTs - and this gives rise to DaBunny NFT collection!

Now tribe members of DaBunny are forever work-free. They spend their days 24/7 dancing to music at DaBunny Island virtual metaverse campground!
            </p>
          </BlockText>
          <ContentImage>
            <Image
              width={769}
              height={708}
              src={"/img/path_mobile_bottom.png"}
              alt=""
            />
          </ContentImage>
        </BlockWrap>
      </ContentText>
    </ContentWrap>
  )
}

export default ContentMobile;
