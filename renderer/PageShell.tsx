import React from 'react';
import {PageContextProvider} from './usePageContext';
import type {PageContext} from 'vike/types';
import './PageShell.css';
import {Container, Flex} from '@chakra-ui/react';

export {PageShell};

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  );
}
