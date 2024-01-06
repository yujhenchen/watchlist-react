# watchlist-react


# use emotion
https://emotion.sh/docs/introduction

## search for pros and cons of emotion compare to tailwind css and other css


# use fontawesome
@fortawesome/fontawesome-svg-core": "^6.5.1",
@fortawesome/free-solid-svg-icons": "^6.5.1",
@fortawesome/react-fontawesome": "^0.2.0",


# Issues and solutions

## Use emotion get `You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).`

In src\Header.jsx

```
import React from 'react';
import Search from "./Search";
import Navigation from "./Navigation";

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

```

### Root cause
???

### Solution
https://stackoverflow.com/questions/61741076/css-emotion-library-getting-css-props-error-when-using-css-prop

Add `/** @jsxImportSource @emotion/react */` before the line `import { css } from '@emotion/react';`, so it becomes

```
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

```