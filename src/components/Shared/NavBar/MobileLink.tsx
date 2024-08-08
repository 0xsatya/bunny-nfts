import React from 'react';
import Image from 'next/image';
import { MobileLinkType } from './NavTypes';

import {
  LinkWrap,
  CarrotWrap,
  MobileLinkText,
} from './NavStyle';

const MobileLink = ({ href, children, toggleNavMobile, handleClick, animationTimeout }: MobileLinkType) => {
  const mobileTouch = () => {
    toggleNavMobile();
    setTimeout(() => {
      handleClick(href);
    }, animationTimeout);
  }

  return (
    <LinkWrap>
      <CarrotWrap>
        <Image
          width={28}
          height={39}
          layout="fixed"
          src="/img/carrot.png"
          alt=""
        />
      </CarrotWrap>
      <MobileLinkText onClick={mobileTouch}>
        {children}
      </MobileLinkText>
    </LinkWrap>
  )
}

export default MobileLink;
