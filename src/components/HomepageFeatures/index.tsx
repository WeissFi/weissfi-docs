import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Borrow',
    Svg: require('@site/static/img/undraw_transfer_money.svg').default,
    description: (
      <>
        Learn how to open a vault, borrow DORI against SUI, and set your own interest rate. Flexible and non-custodial.
      </>
    ),
    link: '/docs/borrow',
  },
  {
    title: 'Earn',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        Stake your DORI or provide liquidity to earn rewards and support the protocol’s stability.
      </>
    ),
    link: '/docs/earn',
  },
  {
    title: 'Points System',
    Svg: require('@site/static/img/undraw_data_points.svg').default,
    description: (
      <>
        Discover how points are calculated for vaults and staking. Long-term activity matters more than short-term boosts.
      </>
    ),
    link: '/docs/points-system',
  },
  {
    title: 'Fees',
    Svg: require('@site/static/img/undraw_printing_invoices.svg').default,
    description: (
      <>
        Understand how protocol fees are shared: from interest paid by borrowers to rewards earned by Liquidity Providers and the Stability Pool.
      </>
    ),
    link: '/docs/fees',
  },
    {
    title: 'Redemption',
    Svg: require('@site/static/img/undraw_online_information.svg').default,
    description: (
      <>
        Learn how $DORI is redeemed for collateral and how this mechanism ensures the stablecoin's peg.
      </>
    ),
    link: '/docs/redemption',
  },
  {
    title: 'FAQ',
    Svg: require('@site/static/img/undraw_searching.svg').default,
    description: (
      <>
        Quick answers to common questions about borrowing, staking, liquidation, and more.
      </>
    ),
    link: '/docs/faq',
  },
];

const resourcesList = [
  {
    title: '📄 Mainnet Package IDs',
    link: '/docs/mainnet-package',
    description: 'Find all Sui package addresses used by the WeissFi protocol.',
  },
  {
    title: '🎨 Media Kit',
    link: '/docs/media-kit',
    description: 'Download WeissFi logos, visuals, and official brand assets.',
  },
  {
    title: '🗺️ Roadmap Feedback',
    link: '/docs/roadmap-feedback',
    description: 'Suggest features, vote on ideas, and help shape the future of WeissFi.',
  },
  {
    title: '📊 Analytics Dashboard',
    link: '/docs/analytics',
    description: 'Track protocol usage, TVL, and performance across the platform.',
  },
];


function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <Link to={link} className={styles.card}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={clsx('text--center', styles.cardContent)}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className="text--center margin-bottom--lg">
          Explore WeissFi Documentation
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h1 className="text--center margin-top--lg margin-bottom--lg text--h1">Resources</h1>
        <div className="row">
          {resourcesList.map((item, idx) => (
            <div key={idx} className={clsx('col col--6', styles.feature)}>
              <Link to={item.link} className={styles.card}>
                <div className={clsx('text--center', styles.cardContent)}>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
