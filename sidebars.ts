import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Weiss Finance',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'introduction',
          label: 'Introduction',
        },
        'borrow',
        'earn',
        'sdori',
        'fees',
        'redemption',
        'points-system',
        // 'vault-drop-campaign',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'oracles',
        'mainnet-package',
        'media-kit',
        'roadmap-feedback',
        'analytics',
        'faq',
      ],
    },
  ],
};

export default sidebars;
