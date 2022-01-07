# https://jesalgandhi.com

## Running locally

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Making updates to the site
- Should have netlify-cli installed, also auto-deploy on netlify should be off
1. Make any updates locally
2. Push updates to main branch
3. Run `netlify deploy --prod --build` to deploy the publish directory while builiding a fresh copy
- This ensures that all updates are pushed to github and that the site is deployed through netlify-cli, which keeps API keys secure
- Disabling auto-deploy on netlify ensures that site is never deployed from github -- deployment will only occur with the above command


