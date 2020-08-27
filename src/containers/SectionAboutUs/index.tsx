import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SectionLayout from '@components/SectionLayout';
import theme from '@styles/theme';

import Card from './components/Card';
import * as S from './styles';

const aboutUsCards = [
  {
    id: 1,
    title: 'O início',
    content: `O projeto OUT iniciou em 2015, ainda com trabalho voluntário não oficializado. 
      Entregávamos alimentos para pessoas em situação de rua e dando suporte às comunidades carentes. 
      Com o crescimento no número de voluntários e doações recebidas, 
      o OUT se tornou uma ONG oficializada e que se dedica hoje especialmente ao desenvolvimento de periferias.`,
  },
  {
    id: 2,
    title: 'OUT',
    content: `"Out" traduzido da lingua inglesa significa "fora". 
    O nome "Out" nasceu na ideia de sairmos de nosso comodismo, 
    teorias e expectativas gerais de melhoria, 
    para agirmos e colaborarmos efetivamente com a sociedade e necessidades básicas da nossa gente.`,
  },
  {
    id: 3,
    title: 'Valores',
    content: `A ONG preza pelo respeito a cada história. 
    Não podemos valer de nossas experiências para definir 
    o porquê alguém está em uma situação. 
    Então queremos entender a razão da deficiência social das familias
    ou de uma comunidade específica, 
    para assim trabalharmos a recuperação/melhoria com recursos e estratégias singulares.`,
  },
  {
    id: 4,
    title: 'Diferenciais',
    content: `O nosso trabalho é desenvolver cidadãos, 
    e não apenas sustentar com nossos recursos. 
    Aplicamos o nosso capital em trabalhos que conduzam às oportunidades de emancipação,
    motivamos a qualidade de vida gerada por dedicação.`,
  },
];

const SectionAboutUs = () => {
  const { aboutUs } = useStaticQuery(graphql`
    query {
      aboutUs: allFile(filter: { sourceInstanceName: { eq: "aboutUs" } }) {
        nodes {
          childImageSharp {
            id
            fluid(maxWidth: 600, quality: 70) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);

  return (
    <SectionLayout
      backgroundColor={theme.secondary}
      headingColor={theme.primary}
    >
      <h1>Quem somos</h1>
      <h2>
        A OUT investe em causas sociais para o desenvolvimento de periferias.
      </h2>

      <S.CardsWrapper>
        {aboutUs.nodes.map((node, idx) => (
          <Card
            key={aboutUsCards[idx].id}
            title={aboutUsCards[idx].title}
            content={aboutUsCards[idx].content}
            image={node.childImageSharp.fluid}
          />
        ))}
      </S.CardsWrapper>
    </SectionLayout>
  );
};

export default SectionAboutUs;
