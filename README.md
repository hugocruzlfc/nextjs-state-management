## Quick Start

### Initialize the project

Clone the project and install the dependencies for each example.

### Summarizing State Management Options in Next.js App Router

The state management model has changed with the advent of Next.js App Router.

The traditional Redux store, which held both immutable and mutable data, has been replaced.

Now, the mutable data only resides on the client, which means that the volume of data is much less. As a result, you may find that you can get by with just the basic React Hooks.

You can handle state with useState, useReducer, and useRef, and watch for changes with useEffect, useMemo, and useCallback. Pairing these hooks with query libraries like React Query or SWR can take you even further.

### Categories of State Managers

If you need more than what React Hooks offer, there are four categories of state managers to consider:

- Unidirectional State Managers, such as [Redux](https://github.com/reduxjs/redux) and [Zustand](https://github.com/pmndrs/zustand) that we worked with in this tutorial.
- Bidirectional State Managers, like [MobX](https://github.com/mobxjs/mobx).
- Event-based State Managers like [Effector](https://github.com/effector/effector), often used with RxJS.
- Atomic State Managers: Like [Recoil](https://github.com/facebookexperimental/Recoil) and [Jotai](https://github.com/pmndrs/jotai), which was covered in a previous lesson.

### Conclusion

State management has evolved. There are a lot of different options out there, so it's important to evaluate them before you pick one for your application. Choose wisely to ensure that you're using the most appropriate model for your specific use case.
