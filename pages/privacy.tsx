import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import styled from 'styled-components';
import Loader from '../src/components/Shared/Loader/Loader'

const PrivacyWrapper = styled.div`
  padding: 0 50px;
  // background: #fff;
  @media (max-width: 768px) {
    position: relative;
    top: -280px;
  }
  h1{
    font-weight: bold;
font-size: 50px;
line-height: 64px;
/* identical to box height */

display: flex;
align-items: center;

color: #000000;

padding-top: 50px;

  }
  p{
    font-weight: normal;
font-size: 25px;
line-height: 32px;
display: flex;
align-items: center;

color: #000000;
  }
  h3{
    font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 32px;

padding-top: 50px;
padding-bottom: 25px;



  }
  div{
    width: 263px;
    height: 16px;
    border-bottom: 4px solid #BE6DFF;
    transform: matrix(1, 0, -1, 1, 0, 0);
    border-left: 6px solid #BE6DFF;
    border-right: 0px;
    border-top: 0px;
    margin-top: 50px;
    border-radius: 0px;
  }
  a{
    font-weight: 600;
font-size: 20px;
line-height: 26px;
/* identical to box height */

display: flex;
align-items: center;

color: #BE6DFF;
  }
`;
export default function privacyPage({
  pageComponentProps,
}: 

  InferGetServerSidePropsType<typeof getServerSideProps>) {
    
  return (
  <>
    <PrivacyWrapper>
      <div></div>
      <a href="https://www.dabunnynft.com/">Back to DaBunnyNFT.com</a>
     <h1>Privacy Policy for Da Bunny</h1>
     <p>This Privacy Policy sets out our commitment to protecting the privacy of personal information provided to us, or otherwise collected by us, offline or online, including through our website, https://lazylionsnft.com/ (Site). In this Privacy Policy we, us or our means Blockchain Media Pty Ltd trading as Lazy Lions (ACN 652 576 675). </p>
    <h3>Personal information</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, feugiat mi quam eget quis fringilla sem sed volutpat. Rhoncus urna lectus proin donec est ut in cras ornare. Vel pellentesque ac, mauris leo pretium. Dapibus diam imperdiet elementum, suspendisse purus.</p>
    <p>Urna cursus turpis euismod viverra sed. Vitae eget dignissim elementum velit libero amet dictum. Diam a sit accumsan ac arcu sed. Luctus purus in iaculis neque quisque vitae ultrices orci. Velit interdum porttitor scelerisque ullamcorper rhoncus pretium. Pharetra cursus augue mi ultrices nunc, praesent vitae donec. Elit auctor rhoncus sollicitudin pharetra. Nec, eget a, imperdiet imperdiet euismod augue congue.
Fringilla viverra ultrices vestibulum semper. Morbi turpis at euismod euismod id. Nisi gravida in sed turpis. Adipiscing nec aenean sit duis semper ipsum interdum in ipsum. Tempor non semper rutrum consectetur viverra. Quam cursus commodo vitae arcu amet. Mauris lobortis duis consequat nunc, a, massa. At magna fermentum cras purus leo elementum. Pellentesque non vitae nisi, cursus iaculis odio tempus, ornare aliquet. In aliquam nisl pellentesque a, integer bibendum placerat bibendum eros. Euismod natoque nisi velit feugiat phasellus sed. Aliquet urna tincidunt diam integer lacus in malesuada. At tortor eu eu, arcu vitae augue commodo. Dictumst ut orci bibendum enim risus. Ullamcorper eu praesent nulla id adipiscing diam.</p>
    <h3>Personal information</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, feugiat mi quam eget quis fringilla sem sed volutpat. Rhoncus urna lectus proin donec est ut in cras ornare. Vel pellentesque ac, mauris leo pretium. Dapibus diam imperdiet elementum, suspendisse purus.</p>
    <p>Urna cursus turpis euismod viverra sed. Vitae eget dignissim elementum velit libero amet dictum. Diam a sit accumsan ac arcu sed. Luctus purus in iaculis neque quisque vitae ultrices orci. Velit interdum porttitor scelerisque ullamcorper rhoncus pretium. Pharetra cursus augue mi ultrices nunc, praesent vitae donec. Elit auctor rhoncus sollicitudin pharetra. Nec, eget a, imperdiet imperdiet euismod augue congue.</p>
    <h3>Personal information</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, feugiat mi quam eget quis fringilla sem sed volutpat. Rhoncus urna lectus proin donec est ut in cras ornare. Vel pellentesque ac, mauris leo pretium. Dapibus diam imperdiet elementum, suspendisse purus.</p>
    <p>Urna cursus turpis euismod viverra sed. Vitae eget dignissim elementum velit libero amet dictum. Diam a sit accumsan ac arcu sed. Luctus purus in iaculis neque quisque vitae ultrices orci. Velit interdum porttitor scelerisque ullamcorper rhoncus pretium. Pharetra cursus augue mi ultrices nunc, praesent vitae donec. Elit auctor rhoncus sollicitudin pharetra. Nec, eget a, imperdiet imperdiet euismod augue congue.
Fringilla viverra ultrices vestibulum semper. Morbi turpis at euismod euismod id. Nisi gravida in sed turpis. Adipiscing nec aenean sit duis semper ipsum interdum in ipsum. Tempor non semper rutrum consectetur viverra. Quam cursus commodo vitae arcu amet. Mauris lobortis duis consequat nunc, a, massa. At magna fermentum cras purus leo elementum. Pellentesque non vitae nisi, cursus iaculis odio tempus, ornare aliquet. In aliquam nisl pellentesque a, integer bibendum placerat bibendum eros. Euismod natoque nisi velit feugiat phasellus sed. Aliquet urna tincidunt diam integer lacus in malesuada. At tortor eu eu, arcu vitae augue commodo. Dictumst ut orci bibendum enim risus. Ullamcorper eu praesent nulla id adipiscing diam.</p>
    </PrivacyWrapper>
    
  </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      pageComponentProps: 'Hello World > Privacy Page',
    },
  }
}
