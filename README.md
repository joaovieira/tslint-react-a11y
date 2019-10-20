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

<table>
  <thead>
    <th>Rule Name</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>react-a11y-accessible-headings</code>
      </td>
      <td>
        For accessibility of your website, there should be no more than 2 H1 heading elements, HTML heading elements must be concise, used for structuring information on the page and non-empty.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-anchors</code>
      </td>
      <td>
        For accessibility of your website, anchor element link text should be at least 4 characters long.
        Links with the same HREF should have the same link text.
        Links that point to different HREFs should have different link text.
        This can be relaxed to allow differences in cases using <code>ignore-case</code> option.
        You can also allow differences in leading/trailing whitespace by adding <code>{"ignore-whitespace": "trim"}</code> option or all whitespace by adding <code>{"ignore-whitespace": "all"}</code> option.
        Links with images and text content, the alt attribute should be unique to the text content or empty.
        An an anchor element's href prop value must not be undefined, null, or just #.
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/38">WCAG Rule 38: Link text should be as least four 4 characters long</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/39">WCAG Rule 39: Links with the same HREF should have the same link text</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/41">WCAG Rule 41: Links that point to different HREFs should have different link text</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/43">WCAG Rule 43: Links with images and text content, the alt attribute should be unique to the text content or empty</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-aria-unsupported-elements</code>
      </td>
      <td>
        For accessibility of your website, enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-event-has-role</code>
      </td>
      <td>
        For accessibility of your website, elements with event handlers must have explicit role or implicit role.
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/94">WCAG Rule 94</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role">Using the button role</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-iframes</code>
      </td>
      <td>
        Enforce that iframe elements are not empty, have title, and are unique.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-image-button-has-alt</code>
      </td>
      <td>
        For accessibility of your website, enforce that inputs element with <code>type="image"</code> must have non-empty alt attribute.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-img-has-alt</code>
      </td>
      <td>
        Enforce that an <code>img</code> element contains the <code>alt</code> attribute or <code>role='presentation'</code> for a decorative image.
        All images must have <code>alt</code> text to convey their purpose and meaning to screen reader users.
        Besides, the <code>alt</code> attribute specifies an alternate text for an image, if the image cannot be displayed.
        <br />
        This rule accepts as a parameter a string array for tag names other than img to also check.
        For example, if you use a custom tag named 'Image' then configure the rule with: <code>[true, ['Image']]</code>.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/WCAG10/wai-pageauth.html#tech-text-equivalent">Web Content Accessibility Guidelines 1.0</a></li>
          <li><a href="https://www.w3.org/TR/wai-aria/roles#presentation">ARIA Presentation Role</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/31">WCAG Rule 31: If an image has an alt or title attribute, it should not have a presentation role</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-input-elements</code>
      </td>
      <td>
        For accessibility of your website, HTML input boxes and text areas must include default, place-holding characters.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-place-holders">WCAG 10.4</a></li>
          <li><a href="https://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-specific">WCAG 11.5</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-lang</code>
      </td>
      <td>
        For accessibility of your website, HTML elements must have a lang attribute and the attribute must be a valid language code.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H58.html">H58: Using language attributes to identify changes in the human language</a></li>
          <li><a href="https://dequeuniversity.com/rules/axe/1.1/valid-lang">lang attribute must have a valid value</a></li>
          <li><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">List of ISO 639-1 codes</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-meta</code>
      </td>
      <td>
        For accessibility of your website, HTML meta elements must not have <code>http-equiv="refresh"</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-mouse-event-has-key-event</code>
      </td>
      <td>
        For accessibility of your website, elements with mouseOver/mouseOut should be accompanied by onFocus/onBlur keyboard events.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-no-onchange</code>
      </td>
      <td>
        For accessibility of your website, enforce usage of onBlur over onChange on select menus.
        References:
        <ul>
          <li><a href="http://cita.disability.uiuc.edu/html-best-practices/auto/onchange.php">OnChange Event Accessibility Issues</a></li>
          <li><a href="https://www.w3.org/TR/WCAG10/wai-pageauth.html#gl-own-interface">Guideline 8. Ensure direct accessibility of embedded user interfaces.</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-props</code>
      </td>
      <td>
        For accessibility of your website, enforce all <code>aria-*</code> attributes are valid.
        Elements cannot use an invalid <code>aria-*</code> attribute.
        This rule will fail if it finds an <code>aria-*</code> attribute that is not listed in <a href="https://www.w3.org/WAI/PF/aria/states_and_properties#state_prop_values">WAI-ARIA states and properties</a>.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-proptypes</code>
      </td>
      <td>
        For accessibility of your website, enforce the type of aria state and property values are correct.
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-required</code>
      </td>
      <td>
        For accessibility of your website, enforce that required input elements have aria-required set to true.
        <br/>
        References:
        <ul>
          <li><a href="http://www.clarissapeterson.com/2012/11/html5-accessibility/">Acessibility in HTML5</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-role</code>
      </td>
      <td>
        For accessibility of your website, elements with aria roles must use a **valid**, **non-abstract** aria role.
        A reference to role definitions can be found at [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions).
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/92">WCAG Rule 92: Role value must be valid</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-role-has-required-aria-props</code>
      </td>
      <td>
        For accessibility of your website, elements with aria roles must have all required attributes according to the role.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions">ARIA Definition of Roles</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/90">WCAG Rule 90: Required properties and states should be defined</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/91">WCAG Rule 91: Required properties and states must not be empty</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-role-supports-aria-props</code>
      </td>
      <td>
        For accessibility of your website, enforce that elements with explicit or implicit roles defined contain only <code>aria-*</code> properties supported by that <code>role</code>.
        Many aria attributes (states and properties) can only be used on elements with particular roles.
        Some elements have implicit roles, such as <code>&lt;a href='hrefValue' /&gt;</code>, which will be resolved to <code>role='link'</code>.
        A reference for the implicit roles can be found at <a href="https://www.w3.org/TR/html-aria/#sec-strong-native-semantics">Default Implicit ARIA Semantics</a>.
        <br />
        References:
        <ul>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/87">ARIA attributes can only be used with certain roles</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/84">Check aria properties and states for valid roles and properties</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/93">Check that 'ARIA-' attributes are valid properties and states</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-tabindex-no-positive</code>
      </td>
      <td>
        For accessibility of your website, enforce tabindex value is **not greater than zero**.
        Avoid positive tabindex attribute values to synchronize the flow of the page with keyboard tab order.
        <br />
        References:
        <ul>
          <li><a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-order">WCAG 2.4.3 - Focus Order</a></li>
          <li><a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#tabindex-usage">Audit Rules - tabindex-usage</a></li>
          <li><a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03">Avoid positive integer values for tabIndex</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>react-a11y-titles</code>
      </td>
      <td>
        For accessibility of your website, HTML title elements must not be empty, must be more than one word, and must not be more than 60 characters long.
        <br />
        References:
        <ul>
          <li><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title">WCAG 2.0 - Requirement 2.4.2 Page Titled (Level A)</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/13">OAA-Accessibility Rule 13: Title element should not be empty</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/24">OAA-Accessibility Rule 24: Title content should be concise</a></li>
          <li><a href="http://oaa-accessibility.org/wcag20/rule/25">OAA-Accessibility Rule 25: Title text must contain more than one word</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
