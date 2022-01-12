### Learning Objectives[](https://alchemycodelab.github.io/react-use-time-travel/#learning-objectives)

-   Use custom hooks to bundle together multiple useState & useEffect calls
-   Use react-testing-library to test components

### Description[](https://alchemycodelab.github.io/react-use-time-travel/#description)

You've been tasked with implementing a date tracking feature in your company's audit log system. The security team needs a way to input dates into the system, change them, and also undo/redo their changes. No funny business here, I'm sure...

Your objective is to create a custom hook that tracks changes to input values over time. You can use a date input for this ([`<input type="date" />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)).

Your `useTimeTravel` function should return:

-   `save` - a function to set & save a new current value
-   `undo` - a function that sets the current value to the previous value
-   `redo` - a function that sets the current value to the next value
-   `current` - the current value the input should use

Your app should contain an input, two buttons (undo & redo), and display the current value.

### Acceptance Criteria[](https://alchemycodelab.github.io/react-use-time-travel/#acceptance-criteria)

-   The hook should behave as follows:
    -   select a date (e.g. 2022-01-01), see the date change (to 2022-01-01)
    -   select another date (e.g. 2022-02-22), see the date change to the new date (to 2022-02-22)
    -   select another date (e.g. 2022-03-14), see the date change to the new date (to 2022-03-14)
    -   press undo, see the date change to the second date (to 2022-02-22)
    -   press undo, see the date change to the first date (to 2022-01-01)
    -   press redo, see the date change to the second date (to 2022-02-22)
    -   select another date (e.g. 2022-04-04), see the date change to the new date (to 2022-04-04)
    -   press undo, see the date change to the second date (to 2022-02-22)
    -   press undo, see the date change to the first date (to 2022-01-01)
    -   press redo, see the date change to the second date (to 2022-02-22)
    -   press redo, see the date change to the fourth date (to 2022-04-04)
    -   press redo, see the date change to the third date (to 2022-03-14)
-   A test exists that validates this behavior for your App

### Rubric[](https://alchemycodelab.github.io/react-use-time-travel/#rubric)

| Task | Points |
| --- | --- |
| `save` function implemented | 4 |
| `undo` function implemented | 4 |
| `redo` function implemented | 4 |
| `current` value returned correctly | 4 |
| Behavior test | 4 |