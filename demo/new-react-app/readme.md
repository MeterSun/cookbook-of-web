# 新建 react 项目

1. 新建一个文件夹，如 app
1. 命令行执行
   ```
   npm init
   ```
   一路回车
1. 支持 webpack
   ```
   npm install webpack webpack-dev-server webpack-cli --save-dev
   ```

1. 支持 react
   ```
   npm install react react-dom --save
   ```
1. 支持 babel
   ```
   npm install babel-core babel-loader@7 babel-preset-es2015 babel-preset-react --save-dev
   ```
1. 目录结构与文件内容

   ```
   node_modules
   public
     - index.html
   src
     - index.jsx
   .babelrc
   webpack.config.js
   package.json
   package-lock.json
   ```

   **index.html**

   ```html
   ...
   <body>
     <div id="root"></div>
     <script src="bundle.js"></script>
   </body>
   ...
   ```

   **index.jsx**


    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";

    class Hello extends React.Component {
        render() {
            return <p>hello react!</p>;
        }
    }
    ReactDOM.render(<Hello />, document.getElementById("root"));

    ```
    **.babelrc**
    ```json
    {
      "presets": ["react", "es2015"],
      "env": {
        "dev": {
          "plugins": [["react-transform", {
            "transforms": [{
              "transform": "react-transform-hmr",
              "imports": ["react"],
              "locals": ["module"]
            }]
            }]]
        }
      }
    }
    ```
    **webpack.config.js**
    ```js
    module.exports = {
        mode: "development",
        entry: __dirname + "/src/index.jsx",
        output: {
            path: __dirname + "/public",
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: "./public",
            inline: true
        },
        module: {
            rules: [
                { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
            ]
        }
    };
    ```
1. 在 package.json 中添加以下内容
   ```
   ...
   "scripts": {
       "start": "webpack-dev-server --open",
       "build": "webpack"
   }
   ...
   ```
1. 启动
    ```
    npm start # 启动
    npm run build # 构建
    ```