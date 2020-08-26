import React from 'react';

import SectionLayout from '@components/SectionLayout';
import theme from '@styles/theme';

import MasonryGallery from './MasonryGallery';

const SectionOurWorks = () => {
  return (
    <SectionLayout
      backgroundColor={theme.secondary}
      headingColor={theme.primary}
    >
      <h1>Nossos eventos</h1>

      <MasonryGallery />
    </SectionLayout>
  );
};

export default SectionOurWorks;
