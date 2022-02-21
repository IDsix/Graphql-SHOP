import logo from './logo.svg';
import './App.css';
import {ApolloClient,InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import GetCategories from './Components/GetCategories';
import { setContext } from '@apollo/client/link/context';
import GetProducts from './Components/GetProducts';
import { useState } from 'react';
const errorLink=onError(({graphqlErrors,networkErrors})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert(`Graphql error ${message}`);
    })
  }
});

const link=from([
  errorLink, 
  new HttpLink({
    uri:"https://api.helice.cloud/dev/graphql",
    headers: {
      'apikey':"ytG4bGx10sju61Z0Z4BgCxIYJEGhdl1rVLTph8OLe3OlHyo9"
    }
   
  })
]);
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client= new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  
  
  return <ApolloProvider client={client}>
    <GetCategories></GetCategories>
    
  </ApolloProvider>;
}

export default App;
