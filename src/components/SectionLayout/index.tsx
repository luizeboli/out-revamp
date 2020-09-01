import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import { useAnimation } from 'framer-motion';

import * as S from './styles';

type Props = {
  backgroundColor: string;
  headingColor: string;
  headingAlignment?: string;
  name: string;
};

const SectionLayout: React.FC<Props> = ({
  children,
  backgroundColor,
  headingColor,
  headingAlignment,
  name,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.12,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  return (
    <Element name={name}>
      <S.Wrapper ref={ref} backgroundColor={backgroundColor}>
        <S.Container
          headingColor={headingColor}
          headingAlignment={headingAlignment}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 60,
                mass: 2,
                delay: 0.2,
              },
            },
          }}
        >
          {children}
        </S.Container>
      </S.Wrapper>
    </Element>
  );
};

export default SectionLayout;
