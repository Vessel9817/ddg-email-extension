# DuckDuckGo Email Extension

[![CI][ci-badge]][ci-workflow]

## Motivation

So you're interested in getting [DuckDuckGo proxy emails][get-email], as it:

- Removes trackers
- Hides your personal email
- Allows you to create multiple identities

Upon visiting the page, you'll find you're required to install their extension,
which has other privacy-enhancing features. However, if you're already using a
pro-privacy browser, this may be redundant or even an extra fingerprint.

Ironically, you can install this extension instead. Click on the extension icon
and it'll open the same page and supersede the requirement. Behind the scenes,
all it actually does is change one CSS property before the check runs.

## Installation

- Clone this repository
- Enable developer mode in your browser's extension management page
- Load the `src` directory as an unpacked extension (Chromium)
  or temporary add-on (Firefox)

[ci-workflow]: https://github.com/Vessel9817/ddg-email-extension/actions/workflows/ci.yml
[ci-badge]: https://github.com/Vessel9817/ddg-email-extension/actions/workflows/ci.yml/badge.svg
[get-email]: https://duckduckgo.com/email/
