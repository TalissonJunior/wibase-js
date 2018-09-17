module.exports = {
    entry: [
        './src/wibase.ts',
    ],
    node: {
        __dirname: false
    },
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            './node_modules',
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ]
            }
        ]
    }
};