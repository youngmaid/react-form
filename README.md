# React forms and review

## Objectives

1. Explain how React controls form inputs
2. Describe how the input value is set to React state
3. Explain how React handles changes in form inputs
4. Take a step back and review React

## [React, forms, and controlled inputs](https://facebook.github.io/react/docs/forms.html)

- From the React docs:

In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

- Normally, we would use built in DOM methods, like `document.querySelector()` to retrieve the values of form inputs. React is now going to take over the control of our input.

- There are a few pieces of this process:
  1. The form input's value will be set to a portion of the component's state
  2. The form input will have an `onChange` event handler
  3. The `onChange` event handler will set the state of the input to the new value of the input

- Note that the form itself also has an `onSubmit` event handler. This is so we can prevent the form from actually submitting if the user hits enter on the input box.

## [Uncontrolled form inputs](https://facebook.github.io/react/docs/uncontrolled-components.html)

- React also enables us to control form inputs ourselves using somethings called `ref`s. Take a peak at the documentation if you're curious. We can always use controlled inputs.
