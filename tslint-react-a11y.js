const path = require('path');

module.exports = {
  rulesDirectory: path.dirname(require.resolve('tslint-microsoft-contrib')),
  rules: {
    'react-a11y-accessible-headings': true,
    'react-a11y-anchors': true,
    'react-a11y-aria-unsupported-elements': true,
    'react-a11y-event-has-role': true,
    'react-a11y-iframes': true,
    'react-a11y-image-button-has-alt': true,
    'react-a11y-img-has-alt': true,
    'react-a11y-input-elements': true,
    'react-a11y-lang': true,
    'react-a11y-meta': true,
    'react-a11y-mouse-event-has-key-event': true,
    'react-a11y-no-onchange': true,
    'react-a11y-props': true,
    'react-a11y-proptypes': true,
    'react-a11y-required': true,
    'react-a11y-role-has-required-aria-props': true,
    'react-a11y-role-supports-aria-props': true,
    'react-a11y-role': true,
    'react-a11y-tabindex-no-positive': true,
    'react-a11y-titles': true,
  },
};
