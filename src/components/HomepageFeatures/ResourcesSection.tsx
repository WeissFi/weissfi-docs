import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function ResourcesSection() {
  return (
    <div className={styles.resourcesSection}>
      <Heading as="h2" className="text--center margin-bottom--md">
        Developer Resources
      </Heading>
      <div className="text--center">
        <p>Find smart contract addresses, package IDs, GitHub links, and more.</p>
        <Link to="/docs/resources">
          Explore Resources
        </Link>
      </div>
    </div>
  );
}
