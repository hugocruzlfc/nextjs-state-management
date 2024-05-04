## Quickstart

### Summarizing State Management Options in Next.js App Router

The state management model has changed with the advent of Next.js App Router.

The traditional Redux store, which held both immutable and mutable data, has been replaced.

Now, the mutable data only resides on the client, which means that the volume of data is much less. As a result, you may find that you can get by with just the basic React Hooks.

You can handle state with useState, useReducer, and useRef, and watch for changes with useEffect, useMemo, and useCallback. Pairing these hooks with query libraries like React Query or SWR can take you even further.

### Categories of State Managers

If you need more than what React Hooks offer, there are four categories of state managers to consider:

- Unidirectional State Managers, such as [Redux](https://github.com/reduxjs/redux) and Zustand that we worked with in this tutorial.
- Bidirectional State Managers, like MobX.
- Event-based State Managers like Effector, often used with RxJS.
- Atomic State Managers: Like Recoil and Jotai, which was covered in a previous lesson.

### Installation

```bash
pnpm add redux react-redux @reduxjs/toolkit
pnpm add zustand
pnpm add jotai

```
