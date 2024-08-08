const adjustScroll = (setPositionFix: any, width: number) => {
  if (width >= 1920) {
    setPositionFix({
      about: 120,
      rabbit: 200,
      roadmap: -400,
      faq: 0,
    });
    return
  }
  if (width >= 1600) {
    setPositionFix({
      about: 130,
      rabbit: 100,
      roadmap: -400,
      faq: 0,
    });
    return
  }
  if (width >= 1440) {
    setPositionFix({
      about: 130,
      rabbit: 100,
      roadmap: -400,
      faq: 0,
    });
    return
  }
  if (width >= 1200) {
    setPositionFix({
      about: 120,
      rabbit: 20,
      roadmap: -400,
      faq: 0,
    });
    return
  }
  if (width >= 768) {
    setPositionFix({
      about: -50,
      rabbit: -20,
      roadmap: -400,
      faq: -180,
    });
    return
  }
  if (width >= 500) {
    setPositionFix({
      about: -50,
      rabbit: -20,
      roadmap: -320,
      faq: -160,
    });
    return
  }
}

export default adjustScroll;
