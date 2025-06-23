import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function RoadmapSection() {
  return (
    <div className={styles.roadmapSection}>
      <Heading as="h2" className="text--center margin-bottom--md">
        Roadmap
      </Heading>
      <div className="text--center">
        <p>Check our progress and upcoming features on Trello.</p>
        <Link to="https://trello.com/b/xyz123/weissfi-roadmap" target="_blank">
          View Roadmap
        </Link>
      </div>
    </div>
  );
}
