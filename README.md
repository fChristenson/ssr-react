# ssr-react

## What we will cover

SSR - server side rendering

* What is React SSR?
* How does it work?
* What are the benefits of doing it?
* What drawbacks does it bring?
* What alternatives do we have?

## Notes

SSR is when the server renders out a html file so that the browser can immediately show the content to the user.

This is different from how SPA applications usually work since they depend on JavaScript and that is not immediately available when the browser loads the page.

SSR has the benefit of allowing us to provide a experience that feels faster for the user since there is visible content as soon as the html document is loaded in the browser.

However using SSR with React has a few drawbacks we need to consider as well.

Sometimes it is simpler to be without SSR and a good alternative is to use placeholder content to improve the users experience.
