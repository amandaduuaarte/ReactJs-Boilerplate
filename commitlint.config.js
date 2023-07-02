module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        // Adicione suas regras personalizadas aqui
        "type-enum": [2, "always", ["feat", "fix", "docs", "chore", "test"]],
        "subject-case": [2, "always", "sentence-case"],
        "subject-max-length": [2, "always", 100],
    },
};
