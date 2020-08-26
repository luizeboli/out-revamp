import * as React from 'react';

import Layout from '@components/Layout';
import Footer from '@containers/Footer';
import SectionAboutUs from '@containers/SectionAboutUs';
import SectionHome from '@containers/SectionHome';
import SectionJoinUs from '@containers/SectionJoinUs';
import SectionOurWorks from '@containers/SectionOurWorks';
import SectionSocialActivities from '@containers/SectionSocialActivities';
import SectionVolunteers from '@containers/SectionVolunteers';

const SinglePage = () => (
  <Layout>
    <SectionHome />
    <SectionAboutUs />
    <SectionSocialActivities />
    <SectionOurWorks />
    <SectionVolunteers />
    <SectionJoinUs />
    <Footer />
  </Layout>
);

export default SinglePage;
