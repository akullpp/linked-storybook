# Linked Storybook

Symlink a SPA created by CRA to use in a separate Storybook project.

## Setup

Create the symlink for the SPA

```bash
cd single-page-application
npm i
npm link
```

Link the SPA

```bash
cd single-page-application-storybook
npm link single-page-application
npm i
```

Finally, run the storybook.
