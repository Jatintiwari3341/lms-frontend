# LMS Frontend

### setup instruction

1.clone the project

```
git clone https://github.com/Jatintiwari3341/lms-frontend.git

```
2.Move into the directory

```

cd lms-frontend

```

3-install dependencies

```
npm i

```

4.run the server

```
npm run dev

```

### Setup instruction for tailwind

[tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1.install tailwind css

```
npm install -D tailwindcss

```
2.Create tailwind config file

```
npx tailwindcss init

```
3.Add file extension to tailwind config file
```
"./src/**/*.{html,js,jsx,ts,tsx}"

```
4.Add the tailwind directives at the top of the `index.css` file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5.Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
### Configure auto import sort esline
1.Install simple imports sort
```
 npm i -D eslint-plugin-simple-import-sort
 ```
 2.Add rule in `.eslint.cjs`
 ```
 'simple-import-sort/imports':'error'
 ```
 3.add simple-import sort plugin in`.eslint.cjs`
 ```
lugins: ['....,'simple-import-sort']
 ```

 4.To enable auto import sort on file save in vscode

 -open `settings.json`
 -add the following config
 ```
"editor.codeActionOnSave":{
    "source.fixAll.eslint":true
}

 ```