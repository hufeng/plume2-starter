## plume2 starter


1.git clone https://github.com/hufeng/plume2-starter.git

2.npm install

3.npm run start      查看demo

4.npm run hello      查看hello 

5.npm run build:all  发布


demo GIF

![Aaron Swartz](https://raw.githubusercontent.com/hufeng/plume2-starter/master/docs/hello.app.gif)
![Aaron Swartz](https://raw.githubusercontent.com/hufeng/plume2-starter/master/docs/demo.app.gif)

```
plume2-starter demo  项目依赖

1.plume2                Simple, props state management

2.preact preact-compat  Preact is a fast, 3kB alternative to React, with the same ES2015 API.

3.react-router          Router

4.ui react-toolbox      UI

5.posscss               css

6.classnames            A simple javascript utility for conditionally joining classNames                                                    together. 

```

```
项目目录
├── favicon.ico
├── index.ejs
├── app
├──├── hello
│  │   ├── actor
│  │   │   ├── counter-actor.ts
│  │   │   └── hello-actor.ts
│  │   ├── component
│  │   │   ├── colors.css
│  │   │   ├── text.css
│  │   │   └── text.tsx
│  │   ├── index.tsx
│  │   ├── store.ts
│  └── └── webapi.ts
└── dist
├── node_modules
├── package.json
├── postcss.config.js
├── tsconfig.json
├── typings
├── webpack.config.js
├── webpack.dll.config.js
├── webpack.production.js
└── yarn.lock
```