## 🎓 CSS Homework Assignment: **"Profile Cards Layout"**

> 💡 You are given an `index.html` file. Your task is to create a `style.css` file and follow the instructions below **exactly as written**. Do not invent your own styles unless told in the bonus section.

---

### ✅ Part 1: Global Styles

1. Set `box-sizing` to `border-box` for all elements using the universal selector `*`.
2. Set the default font family for the `body` to:
    ```
    'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    ```
3. Set the body text color to `#333` and the background color to `#f9f9f9`.
4. Set `line-height` on the `body` to `1.6`.
5. Remove default `margin` from the `body`.

---

### ✅ Part 2: Typography

1. Style the `<h1>` element to:

    - Be centered (`text-align: center`)
    - Have a font size of `2.5rem`
    - Have top and bottom margins of `2rem`

2. Style all `<h2>` elements to:

    - Have font size `1.5rem`
    - Use text color `#1e90ff`
    - Have top margin `1rem` and bottom margin `0.5rem`

3. Style elements with the class `.role` to:

    - Be italic
    - Have font size `0.9rem`
    - Use text color `#555`
    - Have bottom margin `0.5rem`

4. Style elements with the class `.bio` to:
    - Have font size `1rem`
    - Use text color `#666`
    - Have a max width of `250px`
    - Have bottom margin `1rem`

---

### ✅ Part 3: Layout with Flexbox

1. Style the container with class `.card-container` to:
    - Use `display: flex`
    - Use `justify-content: center`
    - Use a horizontal `gap` of `2rem`
    - Allow wrapping on small screens using `flex-wrap: wrap`
    - Add padding of `2rem` on all sides

---

### ✅ Part 4: Card Styling

1. Style each element with class `.card` to:
    - Have background color `#fff`
    - Use padding of `1.5rem`
    - Have fixed width of `300px`
    - Have rounded corners with `border-radius: 12px`
    - Use a soft shadow:
        ```
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        ```
    - Center all text inside the card

---

### ✅ Part 5: Image Styling

1. Inside each `.card`, style the `<img>` to:
    - Have a width and height of `150px`
    - Use `border-radius: 50%` (make it circular)
    - Use a solid border of `4px` with color `#1e90ff`
    - Be centered using `display: block` and `margin: 0 auto 1rem`

---

### ✅ Part 6: Button Styling

1. Style elements with class `.contact-btn` to:

    - Have background color `#1e90ff`
    - Have white text
    - Remove border (`border: none`)
    - Use padding: `0.6rem 1.2rem`
    - Use font size `1rem`
    - Use `border-radius: 8px`
    - Change the mouse cursor to a pointer

2. Add a hover effect using the `:hover` pseudo-class:
    - On hover, change the background color to `#006edc`

---

### ✅ Part 7: Footer Styling

1. Style the `<footer>` to:
    - Center the text
    - Use font size `0.8rem`
    - Add padding of `1rem`
    - Use background color `#eaeaea`

---

### ✅ Part 8: ID Selectors

1. Style the card with ID `card-john` to:

    - Use background color `#ffffff`

2. Style the card with ID `card-jane` to:
    - Use background color `#f0f8ff`

---

### ⭐ BONUS (Optional)

> You may choose any or all of the following for extra credit.

#### 🌀 Bonus 1: Use CSS Grid

-   Replace the Flexbox in `.card-container` with Grid:
    -   Use `display: grid`
    -   Set the grid to have 2 columns using:
        ```
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        ```
    -   Keep the `gap` at `2rem`

#### 🧱 Bonus 2: Utility Classes

-   Create the following utility classes and use them where applicable:
    ```css
    .mb-1 {
    	margin-bottom: 0.5rem;
    }
    .mb-2 {
    	margin-bottom: 1rem;
    }
    .p-1 {
    	padding: 0.5rem;
    }
    .p-2 {
    	padding: 1rem;
    }
    .text-center {
    	text-align: center;
    }
    ```
