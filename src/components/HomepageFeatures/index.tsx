import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import RoadmapSection from './RoadmapSection';
import FeedbackSection from './FeedbackSection';
import ResourcesSection from './ResourcesSection';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imageUrl?: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Borrow',
    imageUrl: 'https://weissfi.s3.eu-west-3.amazonaws.com/vault-no-bg.svg',
    description: (
      <>
        Learn how to open a vault, borrow DORI against SUI, and set your own interest rate. Flexible and non-custodial.
      </>
    ),
    link: '/docs/borrow',
  },
  {
    title: 'Earn',
    // Svg: require('@site/static/img/undraw_savings.svg').default,
    imageUrl: 'https://weissfi.s3.eu-west-3.amazonaws.com/dori-staking-no-bg.svg',
    description: (
      <>
        Stake your DORI or provide liquidity to earn rewards and support the protocol’s stability.
      </>
    ),
    link: '/docs/earn',
  },
  {
    title: 'Points System',
    imageUrl: 'https://weissfi.s3.eu-west-3.amazonaws.com/points.svg',
    description: (
      <>
        Discover how points are calculated for vaults and staking. Long-term activity matters more than short-term boosts.
      </>
    ),
    link: '/docs/points-system',
  },
  {
    title: 'Fees',
    imageUrl: 'https://weissfi.s3.eu-west-3.amazonaws.com/fees.svg',
    description: (
      <>
        Understand the platform fees.
      </>
    ),
    link: '/docs/fees',
  },
    {
    title: 'Redemption',
    imageUrl: 'https://weissfi.s3.eu-west-3.amazonaws.com/redemption.svg',
    description: (
      <>
        Learn how $DORI is redeemed for collateral and how this mechanism ensures the stablecoin's peg.
      </>
    ),
    link: '/docs/redemption',
  },
  {
    title: 'FAQ',
    imageUrl: 'https://weissfi.s3.eu-west-3.amazonaws.com/faq.svg',
    description: (
      <>
        Quick answers to common questions about borrowing, staking, liquidation, and more.
      </>
    ),
    link: '/docs/faq',
  },
];

function Feature({ title, Svg, imageUrl, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <Link to={link} className={styles.card}>
        <div className="text--center">
          {Svg ? (
            <Svg className={styles.featureSvg} role="img" />
          ) : imageUrl ? (
            <img src={imageUrl} className={styles.featureSvg} alt={title} />
          ) : null}
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
        <Heading as="h2" className="text--center margin-bottom--lg">
          Explore WeissFi Documentation
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        {/* <RoadmapSection />
        <FeedbackSection />
        <ResourcesSection /> */}
      </div>
    </section>
  );
}
