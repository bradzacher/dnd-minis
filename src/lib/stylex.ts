import inject from '@stylexjs/dev-runtime';

if (process.env.NODE_ENV === 'development') {
  inject({
    // configuration options
    dev: true,
    test: false,
    classNamePrefix: 'x-',
    definedStylexCSSVariables: {
      primary: {
        lightMode: 'black',
        darkMode: 'white',
      },
    },
  });
}
