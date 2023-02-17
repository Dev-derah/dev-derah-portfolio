/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { NextStudioHead } from 'next-sanity/studio/head';

import config from '../../sanity.config';

const StudioPage = () => (
  <>
    <Head>
      <NextStudioHead />
    </Head>
    <NextStudio config={config} />
  </>
);
export default StudioPage;
