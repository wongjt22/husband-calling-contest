import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Husband Calling Contest` : undefined}
      defaultTitle="Husband Calling Contest"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
