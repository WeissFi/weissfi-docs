import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function FeedbackSection() {
  return (
    <div className={styles.roadmapSection}>
      <Heading as="h2" className="text--center margin-bottom--md">
        Feedback
      </Heading>
      <div className="text--center">
        <p>Have suggestions or bugs to report? We’d love to hear from you.</p>
        <Link to="https://forms.gle/xyz-feedback-form" target="_blank">
          Submit Feedback
        </Link>
      </div>
    </div>
  );
}
