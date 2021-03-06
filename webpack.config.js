module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json",
        ],
    },
    target: [
        "web", "es5",
    ],
};
