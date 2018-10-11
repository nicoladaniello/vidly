import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://232e8233afc2478a966f70834da9ebd6@sentry.io/1299229"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export { init, log };
