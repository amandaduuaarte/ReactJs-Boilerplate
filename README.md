<div align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="ReactJS">
</div>

# React Js with Typescript - Boilerplate🃏

This is a React JS template created using typescript and already configured with some great and usual libraries.

### How to run:🛠
`npm install`
`npm start`
<br />
`yarn`
`yarn start`

### How to create a new global component:🎯
`npm run new:globalComponent`
<br />
`yarn new:globalComponent`

### Project Structure:⚙
```
src
|-- assets/
|-- components/
|-- config/
|-- context/
|-- hooks/
|-- interfaces/
|-- modules/
|-- pages/
|-- routes/
|-- services/
|-- styles/
|-- utils/
|-- App.tsx
|-- index.tsx
...
```

###  What are modules and what is their structure?💻
Modules are independent project features, for example, if you have some feature that is independent of the project you create a module and add all features that need to work. Components that are only used in this module, hooks, styles, and others you can find in this module.

```
...
modules
|-- YourModule
   |-- components/
   |-- hooks/
   |-- interfaces/
   |-- screen/
   |-- styles/
   |-- index.ts
...
```

### Tech Guide:📖
Folders into `src`

`./assets`
Here are all the project assets that will be used by the application, such as images, fonts, and others.

`./components`

Here will be all the components used globally by the application, components used only by a specific page will be placed elsewhere.

`./configs`

Here will be all the configuration files used globally by the application.

`./context`

Here will be all our contexts, responsible for storing and manipulating the application's states.

`./modules`

Here is the folder in charge of dealing with application modules, or when we need to construct standalone features with their own logic and organization.

`./hooks`

Here I like to leave all the customizable hooks of the application.

`./pages`

As the name suggests, there will be all the pages of our application.

`./styles`

In this folder, all the global style files.

`./utils`

All of our application's useful files, such as a function to format strings, will be placed in this subdirectory.

`./routes`

Here are all the files that manage the routes of our application.

`./services`

Folder responsible for dealing with external services and also calls to APIs.


### Which libs I used:🕹
* Styled-components
* Axios
* React-Query
* Husky
* CommitLint
* Storybook

### Features: ✏
* Automated component development and the ability to automate additional procedures.
* Using PLOP.
  
## Contribution:🧠
Contributions are welcome! Feel free to open an issue or submit a pull request for code improvements, new features, or bug fixes.
