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
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'faq',
        'links',
      ],
    },
  ],
};

export default sidebars;
