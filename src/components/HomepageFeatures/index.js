import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    imageSrc: require('@site/static/img/favicon.png').default,
    description: <>
    Hi, it's me, <b>Sai Kumar Aili</b>. I am a Machine Learning Engineer with experience in developing, deploying and maintaining scalable, flexible systems for core ML services. I have particular interests in statistical learning and building products. 
    <br />
    <br />
    I am ambitious to continuously develop in ML and data analysis, and apply this knowledge to a vast range of fields.
    </>
  },
  {
    title: 'What I Do',
    imageSrc: require('@site/static/img/techny-artificial-intelligence-icon.png').default,
    description: (
      <p>
        I currently work at an AI healthcare startup. You can find some of my projects on 
        my <a href="https://github.com/sk-aili">Github page</a>.
      </p>
    ),
  },
  {
    title: 'Skills',
    imageSrc: require('@site/static/img/flexy-code-icon.png').default,
    description: (
      <p>
        I have experience in Python, TensorFlow, Keras, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Flask, Docker, Kubernetes, AWS, GCP, Azure, SQL, NoSQL, Git, Linux, etc.
      </p>
    ),
  },
];

function Feature({ imageSrc, title, description }) {

  return (
    <div className="col col--4">
      <div className="text--center">
        <img src={imageSrc} className={clsx(styles.featureSvg)} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
