import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = () => {
  const {
    site: {
      siteMetadata: { title, description, lang, siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          lang
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
      ]}
      link={[
        {
          rel: 'canonical',
          href: siteUrl,
        },
      ]}
    />
  );
};

export default SEO;
