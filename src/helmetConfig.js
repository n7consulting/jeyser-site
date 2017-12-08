export default {
  head: {
    titleTemplate: 'Jeyser CRM: %s',
    defaultTitle: 'Jeyser CRM',
    meta: [
      { name: 'description', content: 'Open source ERP/CRM for Junior-Entreprises' },
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#f39c12' },
      { property: 'og:site_name', content: 'Jeyser CRM' },
      { property: 'og:image', content: `${process.env.GATSBY_ROOT_URL}/logo.png` },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: 'Jeyser CRM' },
      {
        property: 'og:description',
        content: 'Open source ERP/CRM for Junior-Entreprises',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/jeyser-icon-192x192.png',
      },
    ],
  },
};
