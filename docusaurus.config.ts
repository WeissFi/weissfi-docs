import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WeissFi Docs',
  tagline: 'Borrow and earn with full control — powered by Sui.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.weiss.finance',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WeissFi', // Usually your GitHub org/user name.
  projectName: 'WeissFi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-rounded.jpg',
    navbar: {
      title: 'WeissFi Docs',
      logo: {
        alt: 'WeissFi Logo',
        src: 'img/logo-rounded.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://weiss.finance',
          label: 'Website',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Borrow',
              to: '/docs/borrow',
            },
            {
              label: 'Earn',
              to: '/docs/earn',
            },
            {
              label: 'Fees',
              to: '/docs/fees',
            },
            {
              label: 'Redemption',
              to: '/docs/redemption',
            },
            {
              label: 'Points System',
              to: '/docs/points-system',
            },
            {
              label: 'Vault Drop Campaign',
              to: '/docs/vault-drop-campaign',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Mainnet Package IDs',
              to: '/docs/mainnet-package',
            },
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://twitter.com/weiss_fi',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/weissfi',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/SZRnaZCYzy',
            },
            {
              label: 'Github',
              href: 'https://github.com/WeissFi',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'Edit the docs on GitHub',
              href: 'https://github.com/WeissFi/weissfi-docs',
            },
          ],
        }
      ],
      copyright: `<img src="/img/logo-rounded.svg" alt="WeissFi Logo" style="height:40px;margin-top:10px;" /><br/>© ${new Date().getFullYear()} WeissFi. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
