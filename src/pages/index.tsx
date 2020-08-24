import * as React from 'react';

import Layout from '@components/Layout';
import Footer from '@containers/Footer';
import SectionAboutUs from '@containers/SectionAboutUs';
import SectionHome from '@containers/SectionHome';
import SectionSocialActivities from '@containers/SectionSocialActivities';

const SinglePage = () => (
  <Layout>
    <SectionHome />
    <SectionAboutUs />
    <SectionSocialActivities />
    <Footer />
  </Layout>
);

export default SinglePage;
