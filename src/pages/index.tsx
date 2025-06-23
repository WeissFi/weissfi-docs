import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container text-center">
        <Heading as="h1" className={clsx('text-5xl ', styles.title)}>
          Welcome to <span className="text-red-600">Weiss</span>Fi
        </Heading>
        <p className={clsx('mt-4 text-lg', styles.subtitle)}>
          A decentralized lending protocol built on the Sui blockchain, allowing users to borrow against their digital assets with user-defined interest rates.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="WeissFi Documentation"
      description="The official WeissFi protocol documentation — borrow, stake and grow in a decentralized way."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
