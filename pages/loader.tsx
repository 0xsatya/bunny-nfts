import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import styled from 'styled-components';
import Loader from '../src/components/Shared/Loader/Loader'

const LoaderWrapper = styled.div`
  padding: 0 50px;
  background: #FFD74C;
 height: 100vh;
`;
export default function privacyPage({
  pageComponentProps,
}: 

  InferGetServerSidePropsType<typeof getServerSideProps>) {
    
  return (
  <>
    <LoaderWrapper>
    <div></div>
    </LoaderWrapper>
    
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
