## React + TypeScript Exercise: **Mini Task Tracker**

### 📦 Objective

Build a small Task Tracker app using React and TypeScript. The focus is on **typing props and state properly** across components.

---

### 🔤 Types

#### 1. `Task` type (Model)

Define a type representing a single task with:

-   `id`: a unique number
-   `title`: the task's text (string)
-   `completed`: whether the task is done (boolean)

---

### 🧩 Component Prop Types

#### 2. `TaskForm` props

This component is used to add a new task.

-   It receives one function as a prop:

    -   A callback to handle adding a task (`onAdd`)
    -   Accepts a single argument: the task title (string)

#### 3. `TaskItem` props

Displays a single task.

-   Receives:

    -   A `task` object (of type `Task`)
    -   A function (`onToggle`) that takes the task’s `id` (number) to toggle its completed state

#### 4. `TaskList` props

Displays a list of tasks.

-   Receives:

    -   An array of tasks (`Task[]`)
    -   A function (`onToggle`) to toggle individual tasks by `id`

#### 5. `Filter` props

Displays buttons to filter the task list (All / Active / Completed).

-   Receives:

    -   The current filter value (`'all' | 'active' | 'completed'`)
    -   A function (`onChange`) to update the filter, which takes one of the three filter values

---

### 🧠 State Types

#### 6. In the `App` component

You’ll manage two state variables:

-   A list of tasks (`Task[]`)
-   The current filter (`'all' | 'active' | 'completed'`)
