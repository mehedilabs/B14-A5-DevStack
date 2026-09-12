# Dev Stack Builder

A modern and responsive React application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, compare their details, and add their preferred technologies to a personal stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Vite

## Features

### 1. Explore Technologies

Browse different technologies with useful information such as category, difficulty level, rating, description, and badge.

### 2. Build Your Own Stack

Select technologies and add them to your personal development stack. The selected technology count is updated automatically.

### 3. Manage Your Stack

Remove individual technologies or clear the entire stack at once. Toast notifications also provide feedback when an action is completed.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write, read, and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is data managed inside a component that can change over time. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data inside a component.

In this project, I used `useState` to store the selected technologies in the stack and also to control the mobile navbar menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.

I used it in the `TechnologyGrid` component to fetch the technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

For example:

```tsx
{
  technologies.map((technology) => (
    <TechnologyCard key={technology.id} technology={technology} />
  ));
}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the stack sidebar. If the stack is empty, an empty-stack message is shown. If technologies are selected, the selected technologies are displayed.

For example:

```tsx
{
  stack.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    <div>
      {stack.map((technology) => (
        <StackItem key={technology.id} technology={technology} />
      ))}
    </div>
  );
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props.

To send something back, the parent can pass a function to the child. The child then calls that function with the required data.

In this project, `App` passes the `onAddToStack` function to `TechnologyCard`. When the user clicks **Add to Stack**, the child component calls the function and sends the selected technology back to the parent.
