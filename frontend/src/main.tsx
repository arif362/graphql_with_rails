import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    // uri: 'https://flyby-router-demo.herokuapp.com/',
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});


// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);