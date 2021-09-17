# earthquake-zen-garden

This is a simple app that shows a homepage with a list of earthquakes. It has a header with a logo (link back to home), and a link to a profile detail view. Each entry in the table links to a detail view of that particular record.

[https://fervent-hamilton-af396e.netlify.app/](https://fervent-hamilton-af396e.netlify.app/)


## Demo

The application is deployed on Netlify and can be tested on this link


## Installation

Use `npm` or `yarn` to install the application.

```bash
npm install
```

## Run application

```bash
npm start
```
This will automatically open a browser to `localhost:3000`

## File Structure
We are grouping by feature as listed in the React docs. See
[Grouping by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes)

## Linting
We are using [ESLint](https://github.com/eslint/eslint) with [Airbnb rules](https://github.com/airbnb/javascript), alongside [Prettier](https://github.com/prettier/prettier) to format code and follow modern standards when writing JavaScript. In addition, we can minimize runtime errors.

## Memoized Custom Hook For Sorting
We are taking advantage of [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) and [Memoization](https://reactjs.org/docs/hooks-custom.html) to abstract sorting into a testable and robust unit of code. 

## License
[MIT](https://choosealicense.com/licenses/mit/)