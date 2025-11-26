import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function AboutSection() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.avatar}>
            {/* Замените на свое фото в static/img/avatar.jpg */}
            <img src={require('@site/static/img/avatar.png').default} alt="Mikhail Kitaev" />
          </div>
          <div className={styles.bio}>
            <Heading as="h1">Mikhail Kitaev</Heading>
            <p className={styles.tagline}>
              {/* Добавьте краткое описание о себе */}
              Разработчик, инженер, энтузиаст технологий
            </p>
            <p className={styles.description}>
              {/* Добавьте более подробное описание */}
              Добро пожаловать на мой персональный сайт. Здесь вы найдете информацию
              о моих проектах и профессиональном опыте.
            </p>
            <div className={styles.links}>
              <Link
                className="button button--primary button--lg"
                to="/projects/intro">
                Мои проекты
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://github.com/mkitaev">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="О себе"
      description="Персональный сайт Mikhail Kitaev">
      <main>
        <AboutSection />
      </main>
    </Layout>
  );
}
