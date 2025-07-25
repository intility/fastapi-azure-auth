import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  future: {
    experimental_faster: true,
  },
  title: 'FastAPI-Azure-Auth',
  tagline: 'Easy and secure implementation of Azure Entra ID for your FastAPI APIs 🔒',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/fastapi-azure-auth/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/global/favicon.ico',
  organizationName: 'Intility', // Usually your GitHub org/user name.
  projectName: 'FastAPI-Azure-Auth', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FastAPI-Azure-Auth',
      logo: {
        alt: 'FastAPI-Azure-Auth logo',
        src: 'img/global/fastad.png',
      },
      items: [
        {
          href: 'https://github.com/Intility/FastAPI-Azure-Auth',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick links',
          items: [
            {
              label: 'SECURITY.md',
              href: 'https://github.com/Intility/FastAPI-Azure-Auth/blob/main/SECURITY.md',
            },
            {
              label: 'jonas.svensson@intility.no',
              href: 'mailto:jonas.svensson@intility.no',
            },
            {
              label: 'Intility.com',
              href: 'https://intility.com',
            },
            {
              label: 'Azure',
              href: 'https://portal.azure.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intility AS. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/',
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'docs',
  //       routeBasePath: '/',
  //       sidebarPath: require.resolve('./sidebars.js'),
  //       editUrl: 'https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/',
  //       sidebarCollapsible: false,
  //     },
  //   ],
  ]
}

export default config;
