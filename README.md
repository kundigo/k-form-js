# Developpement

This package has been initiated using https://github.com/team-innovation/vue-sfc-rollup
# Description

Enhanced form components, inspired by formik, designed to work with server generated forms by Ruby on Rails

# Install the package

This package belongs to Kundigo and it's supposed to remain private and to be used in kundigo's projects. Add this package to `package.json` file

```js
"k-form": "git+https://kundigo-ci:2381bb4546b420a55d62592192be6e65c201bf06@github.com/kundigo/k-form-js.git#master",
```

Then import the components you need in your Rails App.

```js
import { CheckBox, Date, Datetime, Field, Form, Select, Textarea} from 'k-form'
```



# Updating

Updating the package:

* Make the updates to the components
* When adding new components, update `README.md` and `src/lib-components/index.js`
* Bump the version in `package.json`
* run the command `npm run build`
* commit and push changes

Get the updates in your Rails app

* Run :  `yarn upgrade k-form`
* Note : You can use another branch in you app, by replacing `master` with the name of the branch in the rails apps `package.json` 