import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box office"
        subtitle="are you looking for movie or an actor"
      >
        {' '}
      </Title>
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
