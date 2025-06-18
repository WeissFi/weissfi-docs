import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'WeissFi Protocol',
      collapsed: false,
      items: [
        'introduction',
        'borrow',
        'earn',
        'fees',
        'redemption',
        'points-system',
        'vault-drop-campaign',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'faq',
      ],
    },
  ],
};

export default sidebars;
