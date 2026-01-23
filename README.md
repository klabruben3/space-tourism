# Frontend Mentor – Space tourism website solution

This repository contains my solution to the **Space tourism multipage website** challenge from Frontend Mentor. The goal of this project was not just visual accuracy, but improving how I structure data, manage state, and share logic cleanly across a React application.

## Overview

### The challenge

Users should be able to:

- View an optimal layout for each page depending on their device size
- See hover and focus states for interactive elements
- Navigate between pages and tabs without unnecessary re-renders

From a developer perspective, the challenge was also about scaling UI logic without prop drilling or brittle conditionals.

### Links

- **Solution URL:** [https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)
- **Live Site:** [https://space-tourism-swart-kappa.vercel.app/](https://space-tourism-swart-kappa.vercel.app/)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Mobile-first workflow
- React
- Next.js (App Router)
- TypeScript
- Context API for shared state
- JSON-based configuration data

### What I learned

#### Transforming data vs transforming structure

One of the biggest takeaways from this project was understanding the difference between **changing data values** and **changing the shape of the data itself**.

- `map()` always returns an array. You can transform items, but the structure stays the same.
- `Object.fromEntries()` returns an object when given `[key, value]` pairs.

By combining the two, I was able to convert array-based config data into object-based, state-addressable data.

```ts
const entries = data.map((item) => [item.id, item]);
const indexedData = Object.fromEntries(entries);
```

This allowed my React state to directly index into data instead of searching arrays at render time, which simplified logic and improved clarity.

#### Context over prop drilling

I implemented a custom **MediaQuery context** using `createContext` and `useContext` to avoid passing device information through multiple component layers.

- The context wraps the app
- A custom hook exposes the current device type
- Any component can consume it without prop chaining

This cleaned up component APIs significantly and centralized responsive logic.

One limitation I discovered is that screen width alone is not always accurate. A tablet in landscape can easily be misclassified as desktop. This pushed me to think more critically about responsiveness beyond breakpoints.

#### TypeScript and explicit intent

A small but important TypeScript lesson came from rendering navigation dynamically.

```ts
type Tab = "home" | "about" | "projects" | "contact";
```

Using `Object.keys()` caused type issues because it returns `string[]` by default. TypeScript does not assume your runtime data matches your union types.

```ts
(Object.keys(data) as Tab[]).map((tab) => {
  setTab(tab);
});
```

The key lesson was that **TypeScript requires you to be explicit when your data and state are conceptually linked**.

### Continued development

Areas I want to keep refining:

- More accurate device detection using pointer and input capabilities
- Stronger typing between configuration objects and UI state
- Better separation between presentation and logic
- Reducing conditional rendering complexity

### Useful resources

- MDN – `Object.fromEntries`
- TypeScript Handbook – Union Types
- React Docs – Context API
- Frontend Mentor community solutions

## Author

- Frontend Mentor: _[Profile link](https://www.frontendmentor.io/profile/klabruben3)_
- GitHub: _[Profile link](https://github.com/klabruben3)_

## Acknowledgments

Frontend Mentor for consistently well-scoped challenges that expose real-world frontend problems rather than toy examples.
