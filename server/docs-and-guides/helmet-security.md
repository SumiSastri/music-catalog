### Helmet library for site security

Helmet is a package that automatically sets 12 HTTP security headers to your application with a few simple lines.
Documentation: [helmetjs.github.io]

The basic set-up gives you by default

```
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
```

In your server folder npm install helmet and use it in Express like any other middleware with Express app.use() method after you import the library.

If you don't see it in your package JSON, that means you're running a Legacy version of npm, and you need to do dash dash save.

To use additional security headers all you have to do is do is use the prop extension - eg. helmet.nocache