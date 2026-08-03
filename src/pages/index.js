import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header style={{padding: '4rem 0', textAlign: 'center', background: 'var(--ifm-color-primary)'}}>
        <div className="container">
          <h1 style={{color: 'white', fontSize: '3rem'}}>{siteConfig.title}</h1>
          <p style={{color: 'white', fontSize: '1.5rem'}}>{siteConfig.tagline}</p>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Read Documentation
          </Link>
        </div>
      </header>
      <main style={{padding: '4rem 0'}}>
        <div className="container">
          <div className="row">
            <div className="col col--4">
              <h3>🎯 Complete PRD</h3>
              <p>Comprehensive product requirements based on AmenityBook AI project documentation.</p>
            </div>
            <div className="col col--4">
              <h3>🏗️ Architecture</h3>
              <p>System design, AI Agent workflows, and Policy Engine specifications.</p>
            </div>
            <div className="col col--4">
              <h3>📊 Evaluation</h3>
              <p>Benchmark framework with metrics and reproducible testing.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
