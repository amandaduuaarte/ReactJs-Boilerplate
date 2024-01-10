module.exports = {
    description: "Creates a new global component",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the global component?",
        },
    ],
    actions: [
        {
            type: "add",
            path: "../src/components/{{pascalCase name}}/index.tsx",
            templateFile: "templates/globalComponents/index.tsx.hbs",
        },
        {
            type: "add",
            path: "../src/components/{{pascalCase name}}/styles.ts",
            templateFile: "templates/globalComponents/styles.ts.hbs",
        },
        {
            type: "add",
            path: "../src/components/{{pascalCase name}}/interfaces.ts",
            templateFile: "templates/globalComponents/interfaces.ts.hbs",
        },
        {
            path: "../src/components/index.ts",
            template:
                "export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n",
            type: "append",
        },
    ],
};
