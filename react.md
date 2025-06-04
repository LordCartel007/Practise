What is React?
A JavaScript library for building user interfaces, primarily for single-page applications.

Who developed React?
Facebook (Meta).

What are components in React?
Reusable pieces of UI that can be either class-based or functional.

What is JSX?
A syntax extension for JavaScript that allows mixing HTML with JS.

What are props in React?
Short for “properties”, they are read-only data passed from parent to child components.

What is state in React?
A built-in object for holding dynamic data within a component.

What is the difference between state and props?
Props are immutable and passed externally; state is mutable and maintained internally.

What are functional components?
Simple JavaScript functions that return JSX.

What are class components?
Components defined as ES6 classes extending React.Component.

Can you use state in functional components?
Yes, using the useState hook.

What is a React hook?
Functions that let you use state and lifecycle features in functional components.

What is the useState hook?
Allows you to manage state in a functional component.

What is the useEffect hook?
Handles side effects like data fetching or subscriptions.

How do you pass data between components?
Using props for parent-to-child, and callback functions for child-to-parent.

What is the virtual DOM?
An in-memory representation of the real DOM for efficient updating.

Stopped Here 👍👍👍

How does React update the UI?
By comparing the virtual DOM with the previous one and updating only the changed parts.

What is a key in React lists?
A unique identifier used to help React identify which items have changed.

Why should keys be unique?
To optimize rendering and avoid unwanted re-renders.

What are fragments in React?
A way to group multiple elements without adding extra nodes to the DOM.

What is lifting state up?
Moving state to a common ancestor so multiple children can share it.

What is a controlled component?
An input element where the value is controlled by React state.

What is an uncontrolled component?
An input element that maintains its own state independently.

What is a higher-order component (HOC)?
A function that takes a component and returns a new component.

What is the purpose of defaultProps?
To set default values for props.

What is PropTypes?
A way to validate the type of props passed to a component.

What is conditional rendering?
Rendering UI elements based on a condition.

What is the useRef hook?
Provides a way to access and persist values or DOM nodes between renders.

What is the difference between useRef and useState?
useRef does not cause a re-render when its value changes.

What is context in React?
A way to pass data deeply without manually passing props at every level.

How do you create a context?
Using React.createContext().

What is the Provider in context API?
A component that allows consuming components to subscribe to context changes.

What is a Consumer in context API?
A component that subscribes to context changes.

What is React Router?
A library for handling routing in React applications.

What is the difference between BrowserRouter and HashRouter?
BrowserRouter uses HTML5 history API; HashRouter uses URL hash.

How do you navigate programmatically in React Router?
Using the useNavigate hook in React Router v6.

What is a single-page application (SPA)?
A web app that loads a single HTML page and dynamically updates content.

Why is React fast?
Because of the virtual DOM and efficient diffing algorithm.

What is reconciliation in React?
The process of comparing old and new virtual DOM trees and updating the UI.

What are synthetic events in React?
React’s wrapper around native browser events for cross-browser compatibility.

How does React handle forms?
With controlled and uncontrolled components.

What are lifecycle methods in React?
Special methods in class components that run at specific points in a component's life.

Name some common lifecycle methods.
componentDidMount, componentDidUpdate, componentWillUnmount, shouldComponentUpdate.

What is componentDidMount() used for?
Runs after the component mounts. Common for data fetching.

What is componentWillUnmount() used for?
Used for cleanup before a component is removed from the DOM.

What is shouldComponentUpdate() used for?
Determines whether a component should re-render.

What replaced lifecycle methods in functional components?
React Hooks like useEffect, useLayoutEffect.

What does useEffect do?
It lets you perform side effects in function components.

When does useEffect run?
After the render, depending on its dependency array.

What happens if you leave the dependency array empty in useEffect?
It runs only once after the first render (like componentDidMount).

What happens if there’s no dependency array?
The effect runs after every render.

What is the cleanup function in useEffect?
A function returned inside useEffect that cleans up side effects like subscriptions.

When does the cleanup function run in useEffect?
Before the component unmounts or before the effect runs again.

What is useLayoutEffect?
Like useEffect, but it runs synchronously after all DOM mutations.

What is the useMemo hook?
Optimizes performance by memoizing a computed value.

What is the useCallback hook?
Returns a memoized version of a callback function.

How is useMemo different from useCallback?
useMemo returns a value, useCallback returns a function.

What is useReducer?
A hook used for more complex state logic, similar to Redux's reducer pattern.

What parameters does useReducer take?
A reducer function and an initial state.

What is the return value of useReducer?
An array with [state, dispatch].

When would you use useReducer instead of useState?
When you have complex state logic or multiple related state variables.

Can you use multiple hooks in one component?
Yes, and they are independent of each other.

Can hooks be conditional?
No, hooks must be called in the same order each render.

What is a custom hook?
A reusable function that starts with use and can contain other hooks.

Why use custom hooks?
To encapsulate and reuse hook logic across components.

What is the useContext hook?
Allows you to consume context directly in a functional component.

What does useRef return?
A mutable ref object with a .current property.

Can useRef be used to store values?
Yes, and it won’t cause re-renders.

What is a forward ref?
A technique to pass a ref through a component to one of its children.

What is React.forwardRef?
A React API that enables ref forwarding to DOM elements in child components.

What’s the difference between useEffect and useLayoutEffect?
useEffect runs asynchronously after render, useLayoutEffect runs synchronously.

What is batching in React?
Combining multiple state updates into a single re-render.

How do you force a re-render in a functional component?
By changing state.

What is lazy loading in React?
A technique to load components only when needed to improve performance.

How do you implement lazy loading?
Using React.lazy() and Suspense.

What is React.Suspense used for?
Displays a fallback UI while a lazy component is loading.

Can you use useEffect inside a loop?
No, hooks should not be inside loops or conditionals.

What is the dependency array in useEffect?
A list of variables that, when changed, trigger the effect again.

Why is it important to include all dependencies in the array?
To ensure the effect behaves correctly and avoids stale closures.

What are stale closures in React?
When a function captures an outdated version of a variable due to closure.

What happens if a hook's dependency is missing in useEffect?
It can lead to bugs because the effect may not re-run when expected.

Performance & Optimization (81–120)
What is performance optimization in React?
Techniques used to make React apps faster and more efficient.

What causes unnecessary re-renders in React?
Changes in props or state that don’t affect the component’s output.

How can you prevent unnecessary re-renders?
By using React.memo, useMemo, and useCallback.

What is React.memo?
A higher-order component that prevents re-renders if props haven’t changed.

What is the difference between React.memo and useMemo?
React.memo prevents re-rendering of components, useMemo memoizes values.

When should you use React.memo?
For pure functional components that receive the same props frequently.

What is code splitting in React?
Breaking code into smaller chunks to load only what’s necessary.

How do you implement code splitting?
With React.lazy() and Suspense.

What is tree shaking?
A technique to remove unused code during bundling.

Which tools support tree shaking in React?
Webpack, Rollup.

What is the significance of key props in lists?
Helps React identify which items changed, are added, or are removed.

Why is it bad to use array index as a key?
It can lead to performance issues and incorrect component states during reordering.

What is PureComponent?
A class component that implements shouldComponentUpdate with a shallow prop/state comparison.

How is PureComponent different from Component?
PureComponent automatically prevents re-renders when props/state haven’t changed.

What is lazy loading images in React?
Loading images only when they enter the viewport.

What is debounce in React?
A technique to delay a function call to prevent it from firing too often.

What is throttle in React?
A technique to limit the frequency of function calls.

How can you debounce an input in React?
Using libraries like lodash’s debounce or implementing it manually with setTimeout.

What is the difference between client-side and server-side rendering?
CSR renders in the browser, SSR renders HTML on the server before sending it to the browser.

What is hydration in React?
When React attaches event handlers to the existing server-rendered HTML.

What is prefetching in React?
Loading code or data before it’s needed to reduce perceived latency.

What is the role of React.StrictMode?
Highlights potential problems in an application during development.

Does React.StrictMode run in production?
No, it's only active in development mode.

What are render props in React?
A technique where a component’s child is a function that returns JSX.

How does reconciliation affect performance?
Efficient reconciliation improves performance by reducing DOM updates.

What is a shallow comparison in React?
Comparing object references instead of deep equality checks.

What is a deep comparison?
Comparing actual values of nested objects/arrays.

When should you avoid using inline functions in JSX?
When they cause unnecessary re-renders of child components.

What is the danger of large component trees?
They can cause slow renders and complex state management.

How do you measure performance in React apps?
Using Chrome DevTools, React Profiler, Lighthouse, or performance APIs.

What is the React Profiler?
A tool to measure the performance of React components.

What are "controlled" vs "uncontrolled" inputs in terms of performance?
Controlled components offer better control but can be slower for large forms.

When should you use dynamic imports in React?
When you want to split your code and load parts only when needed.

What is render blocking?
When some code or resource delays the rendering of the page.

What are the signs of a memory leak in React?
Unexpected memory usage, slow performance, or effects not cleaning up.

How do you avoid memory leaks in useEffect?
Use a cleanup function to remove subscriptions or event listeners.

Why is immutability important in React state?
To allow predictable state changes and efficient rendering.

What happens if you mutate state directly?
React may not re-render the component, leading to inconsistent UI.

How can you improve React app load time?
Code splitting, lazy loading, image optimization, and reducing bundle size.

Why should you avoid passing functions as props without useCallback?
Because new references cause unnecessary child component re-renders.

4.  Routing, Navigation & State Management (121–170)
    📍 Routing & Navigation (121–140)
    What is client-side routing in React?
    Navigation handled entirely in the browser without reloading the page.

Which library is commonly used for routing in React?
react-router-dom.

What is <BrowserRouter> in React Router?
A router that uses the HTML5 history API for clean URLs.

What is <HashRouter> used for?
A router that uses the hash in the URL (#) for navigation.

What is the difference between Link and a tag in React?
Link enables client-side navigation without reloading the page; a reloads the entire page.

How do you navigate programmatically in React Router v6?
Using the useNavigate() hook.

What does the useParams hook do?
Returns an object of URL parameters.

What does the useLocation hook do?
Returns the current location object, including pathname and search.

What is nested routing in React Router?
Defining routes within routes, rendering child components inside parents.

What is a route guard in React?
A method to protect routes based on user authentication or roles.

How do you implement route guards?
By wrapping protected routes in conditional logic or custom components.

What is Outlet in React Router?
A placeholder for nested route components to be rendered.

What is useMatch used for?
To check if the current URL matches a given pattern.

How do you handle 404 routes in React Router?
Add a wildcard path: <Route path="\*" element={<NotFound />} />.

What is lazy loading routes in React?
Loading route components on demand using React.lazy().

Can you use query parameters in React Router?
Yes, accessed via useSearchParams() in v6.

What is redirection in React Router?
Automatically navigating the user to a different route using <Navigate />.

What does replace do in navigation?
Replaces the current entry in history rather than pushing a new one.

Can you animate page transitions in React Router?
Yes, using libraries like Framer Motion or React Transition Group.

How do you scroll to top on route change?
Use useEffect inside a layout or wrapper component to scroll when pathname changes.

📍 State Management (141–170)
What is state management in React?
The process of managing and sharing data across components.

What are the types of state in React?
Local, global, server, and URL state.

What is local state?
State that belongs to a single component.

What is global state?
State shared across multiple components.

What are common global state management libraries?
Redux, Zustand, Jotai, Recoil, MobX, React Context.

What is Redux?
A predictable state container for JavaScript apps.

What are the core principles of Redux?
Single source of truth, state is read-only, changes via pure functions.

What are actions in Redux?
Plain objects that describe state changes.

What is a reducer in Redux?
A pure function that takes state and action, and returns new state.

What is the Redux store?
The centralized place that holds the application state.

How do you update state in Redux?
By dispatching actions.

What is useSelector in Redux?
A hook to read values from the Redux store.

What is useDispatch in Redux?
A hook to dispatch actions to the Redux store.

What is middleware in Redux?
Functions that run between dispatching an action and reaching the reducer.

What is Redux Thunk?
A middleware that allows you to write async logic in action creators.

What is Redux Toolkit?
A set of tools to simplify Redux development.

Why use Redux Toolkit?
Reduces boilerplate, includes good defaults like Immer, Thunk.

What is createSlice in Redux Toolkit?
A helper function to create actions and reducers automatically.

What is Immer?
A library used in Redux Toolkit to allow writing "mutating" logic that is internally immutable.

What are selectors in Redux?
Functions used to select or compute derived data from the store.

What is the difference between useContext and Redux?
Context is simple for small apps; Redux is better for complex state logic and debugging.

What is prop drilling?
Passing data through many layers of components unnecessarily.

How do you avoid prop drilling?
Using context or global state management libraries.

Can you use multiple reducers in Redux?
Yes, using combineReducers().

What is reselect in Redux?
A library to create memoized selectors.

What is hydration in the context of Redux and SSR?
Reusing server-rendered state in the client without mismatch.

What is a store enhancer in Redux?
Higher-order function that adds custom behavior to the store.

How does Redux handle immutability?
By requiring pure functions and not mutating state directly.

Is Redux still needed with React Context?
Context can be used for small/medium apps; Redux is better for large, complex apps.

What are alternatives to Redux?
Zustand, Jotai, MobX, Recoil, XState, Context API with hooks.

5. Testing, Deployment & Best Practices (171–200)
   🧪 Testing in React (171–185)
   What is the purpose of testing in React?
   To ensure components and logic behave as expected, preventing bugs.

Which testing libraries are popular in React?
React Testing Library, Jest, Enzyme (less common now).

What is Jest?
A JavaScript testing framework often used with React.

What is React Testing Library?
A library for testing React components from the user’s perspective.

What is a unit test?
A test that checks an individual function or component in isolation.

What is an integration test?
A test that checks how multiple components or functions work together.

What is a snapshot test?
A test that compares the rendered output of a component to a saved snapshot.

What is mocking in tests?
Replacing real implementations with fake ones to isolate behavior.

How do you simulate events in tests?
Using fireEvent or userEvent from React Testing Library.

What is act() in testing?
A helper that ensures all updates related to a test are applied before making assertions.

How do you test asynchronous behavior in React?
Using async/await, waitFor(), and proper assertions.

What is code coverage?
A metric showing how much of the code is tested by tests.

How do you mock API calls in tests?
Using tools like jest.fn(), jest.mock(), or libraries like msw.

Should you test implementation details in React?
No, focus on testing behavior and user interactions.

What is end-to-end (E2E) testing?
Testing the entire application flow from the user’s perspective using tools like Cypress or Playwright.

🚀 Deployment (186–192)
How do you build a React app for production?
Run npm run build or yarn build to create optimized static files.

What does the build folder contain?
Optimized HTML, CSS, JavaScript, and assets ready for deployment.

Where can you host a React app?
Vercel, Netlify, GitHub Pages, Firebase, AWS, DigitalOcean, etc.

What is the use of environment variables in React?
To store sensitive or environment-specific values (e.g., API keys).

How do you set environment variables in React?
Add them in a .env file with REACT*APP* prefix (e.g., REACT_APP_API_URL).

How do you configure routing for SPAs on deployment?
Ensure server always serves index.html and handle 404s via client-side routing.

What causes a blank page after deploying a React app?
Misconfigured routing, incorrect build path, or broken links.

✅ Best Practices (193–200)
What are best practices for file structure in React?
Group by feature/folder, keep components modular and organized.

How do you handle large-scale apps in React?
Use modular architecture, lazy loading, global state, and proper separation of concerns.

What are reusable components?
Components that are generic and can be reused with different props across the app.

Why is separation of concerns important in React?
Makes code easier to read, test, and maintain.

How should you manage side effects in React?
Inside useEffect or middleware like Redux Thunk/Saga.

How do you ensure accessibility in React apps?
Use semantic HTML, ARIA attributes, and test with screen readers.

What are some performance anti-patterns in React?
Mutating state directly, using index as key, excessive re-renders, deep prop trees.

What is the most important React development habit?
Writing clean, reusable, testable components with a focus on performance and user experience.
