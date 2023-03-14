import Head from "next/head";


type Props = {
  title: string;
  description: string;
  keywords: string;
  author: string;
}


const Meta = ({ title, author, keywords, description }: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{title.includes('Jourdain') ? title : title.concat(' | Jourdain Thomas  ')}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Jourdain Thomas - A Customer Service Specialist    ',
  keywords: ' Customer Specialist, Customer Serivce, Customer Support',
  description: 'A Customer Service Specialist with over 4 years of experience in providing empathy, quick solutions, amazing service.',
  author: 'Jourdain Thomas'
}


export default Meta;