import React from 'react';
import Search from "./Search";
import Navigation from "./Navigation";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Header() {
  return (
    <header>
      <h1 css={css`
      font-weight: 700;
      font-size: 5rem;
      color: rgb(39 39 42);
      `}>Find your film</h1>
      <Search/>
      <Navigation/>
    </header>
  )
}
