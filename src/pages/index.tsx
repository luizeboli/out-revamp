import * as React from 'react';
import SectionHome from '@containers/SectionHome';

import Layout from '@components/Layout';
import SectionAboutUs from '@containers/SectionAboutUs';
import SectionHome from '@containers/SectionHome';

const SinglePage = () => (
  <Layout>
    <SectionHome />
    <SectionAboutUs />
  </Layout>
);

export default SinglePage;
