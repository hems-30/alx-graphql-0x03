import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <main style={{ padding: 16 }}>
      <h1>Home</h1>
      <p>Below we intentionally render a component that throws to test the boundary.</p>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </main>
  );
};

export default Home;