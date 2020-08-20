import * as React from 'react';

import Layout from '@components/Layout';
import Footer from '@containers/Footer';
import SectionAboutUs from '@containers/SectionAboutUs';
import SectionHome from '@containers/SectionHome';

const SinglePage = () => (
  <Layout>
    <SectionHome />
    <SectionAboutUs />
    <Footer />
  </Layout>
);

export default SinglePage;
