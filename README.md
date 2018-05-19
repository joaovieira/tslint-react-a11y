# tslint-react-a11y

JSX a11y lint rules for [TSLint](https://github.com/palantir/tslint).

## Instalation

```bash
npm i tslint-react-a11y
```

## Usage

In `tslint.json`:

```js
{
  "extends": ["tslint:latest", "tslint-react", "tslint-react-a11y"],
  "rules": {
    // override tslint-react-a11y rules here
    "react-a11y-lang": false
  }
}
```

## Supported rules

This is a subset of the react rules defined in [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib) that regard accessibility.

Rule name | Description
:---------- | :------------
`react-a11y-anchors` | For accessibility of your website, anchor element link text should be at least 4 characters long. Links with the same HREF should have the same link text. Links that point to different HREFs should have different link text. Links with images and text content, the alt attribute should be unique to the text content or empty. An an anchor element's href prop value must not be just #. <br/>References:<br/>[WCAG Rule 38: Link text should be as least four 4 characters long](http://oaa-accessibility.org/wcag20/rule/38/)<br/>[WCAG Rule 39: Links with the same HREF should have the same link text](http://oaa-accessibility.org/wcag20/rule/39/)<br/>[WCAG Rule 41: Links that point to different HREFs should have different link text](http://oaa-accessibility.org/wcag20/rule/41/)<br/>[WCAG Rule 43: Links with images and text content, the alt attribute should be unique to the text content or empty](http://oaa-accessibility.org/wcag20/rule/43/)<br/>
`react-a11y-aria-unsupported-elements` | For accessibility of your website, enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
`react-a11y-event-has-role` | For accessibility of your website, Elements with event handlers must have explicit role or implicit role.<br/>References:<br/>[WCAG Rule 94](http://oaa-accessibility.org/wcag20/rule/94/)<br/>[Using the button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role).
`react-a11y-image-button-has-alt` | For accessibility of your website, enforce that inputs element with `type="image"` must have non-empty alt attribute.
`react-a11y-img-has-alt` | Enforce that an `img` element contains the `alt` attribute or `role='presentation'` for a decorative image. All images must have `alt` text to convey their purpose and meaning to **screen reader users**. Besides, the `alt` attribute specifies an alternate text for an image, if the image cannot be displayed. This rule accepts as a parameter a string array for tag names other than img to also check. For example, if you use a custom tag named 'Image' then configure the rule with: `[true, ['Image']]`<br/>References:<br/>[Web Content Accessibility Guidelines 1.0](https://www.w3.org/TR/WCAG10/wai-pageauth.html#tech-text-equivalent)<br/>[ARIA Presentation Role](https://www.w3.org/TR/wai-aria/roles#presentation)<br/>[WCAG Rule 31: If an image has an alt or title attribute, it should not have a presentation role](http://oaa-accessibility.org/wcag20/rule/31/)
`react-a11y-lang` | For accessibility of your website, HTML elements must have a lang attribute and the attribute must be a valid language code.<br/>References:<br/>[H58: Using language attributes to identify changes in the human language](https://www.w3.org/TR/WCAG20-TECHS/H58.html)<br/>[lang attribute must have a valid value](https://dequeuniversity.com/rules/axe/1.1/valid-lang)<br/>[List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
`react-a11y-meta` | For accessibility of your website, HTML meta elements must not have http-equiv="refresh".
`react-a11y-props` | For accessibility of your website, enforce all `aria-*` attributes are valid. Elements cannot use an invalid `aria-*` attribute. This rule will fail if it finds an `aria-*` attribute that is not listed in [WAI-ARIA states and properties](https://www.w3.org/TR/wai-aria/states_and_properties#state_prop_def).
`react-a11y-proptypes` | For accessibility of your website, enforce the type of aria state and property values are correct.
`react-a11y-role-has-required-aria-props` | For accessibility of your website, elements with aria roles must have all required attributes according to the role. <br/>References:<br/>[ARIA Definition of Roles](https://www.w3.org/TR/wai-aria/roles#role_definitions)<br/>[WCAG Rule 90: Required properties and states should be defined](http://oaa-accessibility.org/wcag20/rule/90/)<br/>[WCAG Rule 91: Required properties and states must not be empty](http://oaa-accessibility.org/wcag20/rule/91/)<br/>
`react-a11y-role-supports-aria-props` | For accessibility of your website, enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`. Many aria attributes (states and properties) can only be used on elements with particular roles. Some elements have implicit roles, such as `<a href='hrefValue' />`, which will be resolved to `role='link'`. A reference for the implicit roles can be found at [Default Implicit ARIA Semantics](https://www.w3.org/TR/html-aria/#sec-strong-native-semantics). <br/>References: <br/>[ARIA attributes can only be used with certain roles](http://oaa-accessibility.org/wcag20/rule/87/)<br/>[Check aria properties and states for valid roles and properties](http://oaa-accessibility.org/wcag20/rule/84/)<br/>[Check that 'ARIA-' attributes are valid properties and states](http://oaa-accessibility.org/wcag20/rule/93/)
`react-a11y-role` | For accessibility of your website, elements with aria roles must use a **valid**, **non-abstract** aria role. A reference to role defintions can be found at [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions). References:<br/>[WCAG Rule 92: Role value must be valid](http://oaa-accessibility.org/wcag20/rule/92/)
`react-a11y-tabindex-no-positive` | For accessibility of your website, enforce tabindex value is **not greater than zero**. Avoid positive tabindex attribute values to synchronize the flow of the page with keyboard tab order.<br/>References:<br/>[WCAG 2.4.3 - Focus Order](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-order)<br/>[Audit Rules - tabindex-usage](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#tabindex-usage)<br/>[Avoid positive integer values for tabIndex](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03)
`react-a11y-titles` | For accessibility of your website, HTML title elements must not be empty, must be more than one word, and must not be more than 60 characters long.<br/>References:<br/>[WCAG 2.0 - Requirement 2.4.2 Page Titled (Level A)](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title)<br/>[OAA-Accessibility Rule 13: Title element should not be empty](http://oaa-accessibility.org/wcag20/rule/13/)<br/>[OAA-Accessibility Rule 24: Title content should be concise](http://oaa-accessibility.org/wcag20/rule/24/)<br/>[OAA-Accessibility Rule 25: Title text must contain more than one word](http://oaa-accessibility.org/wcag20/rule/25/)<br/>
