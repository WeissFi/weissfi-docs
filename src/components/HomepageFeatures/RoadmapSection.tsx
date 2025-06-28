import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function RoadmapSection() {
  return (
    <div className={styles.roadmapSection}>
      <Heading as="h2" className="text--center margin-bottom--md">
        Roadmap & Feedback
      </Heading>
      <div className="text--center">
        <p>Check our progress and leave feedback on FeatureBase.</p>
        <Link to="https://weissfinance.featurebase.app/" target="_blank">
          https://weissfinance.featurebase.app/
        </Link>
      </div>
    </div>
  );
}
