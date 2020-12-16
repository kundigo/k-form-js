# Developpement

This package has been initiated using https://github.com/team-innovation/vue-sfc-rollup
# Description

Enhanced form components, inspired by formik, designed to work with server generated forms by Ruby on Rails

Should be used in pair with [k-form-rb](https://github.com/kundigo/k-form-rb)

# Install the package

This package belongs to Kundigo and it's supposed to remain private and to be used in kundigo's projects. Add this package to `package.json` file

```js
"k-form-js": "git+https://kundigo-ci:2381bb4546b420a55d62592192be6e65c201bf06@github.com/kundigo/k-form-js.git#master",
```

Then import the components you need in your Rails App.

```js
// in general you should only require to import FormStore
import { FormStore} from 'k-form-js'
// if needed, you can import the other components 
import { CheckBox, Date, Datetime, Field, Form, Select, Textarea} from 'k-form-js'
```

## Making it work in your rails application using a stimulus controller


```js
// file : app/javascript/controllers/vuejs_forms_controller.js
import { Controller } from "stimulus"
import { FormStore } from 'k-form-js'

// OPTIONAL: import a custom vuex plugin that allows adding additional behaviour
// import plugin from 'path/to/plugin'

// OPTIONAL: use custom components
// import CustomComponent from 'path/to/plugin'

export default class extends Controller {
  connect() {
    const serializedValues = this.element.dataset.values || "{}";
    const validationUrl = this.element.dataset.validationUrl
    let values = JSON.parse(serializedValues);
    let authenticityToken = this.element.querySelector("input[name='authenticity_token']").value

    const app = new FormStore({     
      authenticityToken: authenticityToken,
      additionalComponents: {
        // 'x-custom_component': CustomComponent
      }, // optional
      plugins:[
        // plugin  
       ],  // optional 
      element: this.element.firstElementChild,
      validationUrl: validationUrl,
      values: values,
    }).app
  }
}
```

Then in the vue we can do something similar to the following lines:
```erb
<%= content_tag :div,
                data: {
                    controller: "vuejs-forms",
                    values: { interest: form_object.to_builder.attributes! }, // mandatory
                    validation_url: validate_interest_path(@commodity.key) // mandatory
                } do %>
    <%= bs4_vue_form_with  model: @model, scope: :model_name, url: interest_form_url(interest, @commodity), local: false do |form| %>
    ...
    <% end %>
<% end %>
``


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

# Testing

Since this library relies heavily on hooking on forms generated by rails apps, tests will be done later in a dummy application using feature tests. 

