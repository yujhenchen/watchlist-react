import React from 'react';
import Search from "./Search";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <h1>Find your film</h1>
      <Search/>
      <Navigation/>
    </header>
  )
}
