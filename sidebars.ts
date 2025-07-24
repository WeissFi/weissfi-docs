import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Weiss Finance',
      collapsed: false,
      items: [
        'introduction',
        'borrow',
        'earn',
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
