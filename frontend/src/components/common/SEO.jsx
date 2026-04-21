import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'NATA'
const BASE_URL = 'https://nata.vercel.app'
const DEFAULT_IMAGE = `${BASE_URL}/hero.jpg`

function SEO({ title, description, path = '/', image }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — National Association of Tattoo Artists`
  const url = `${BASE_URL}${path}`
  const ogImage = image ? `${BASE_URL}${image}` : DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />

      {/* Open Graph */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:type' content='website' />

      {/* Twitter */}
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default SEO
