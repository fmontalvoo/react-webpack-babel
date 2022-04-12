const path = require('path');

module.exports = {
    // Punto de entrada de referencia para webpack -> src/index.js
    entry: path.join(__dirname, 'src', 'index.js'),

    // Punto de salida para el código procesado por webpack -> public/main.bundle.js
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    // Indica el modo en que se está ejecutando nuestra aplicación.
    mode: process.env.NODE_ENV || 'development',

    // Esto da la facilidad de poder utilizar importaciones con rutas relativas en vez de rutas absolutas.
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    // Permite usar .js o .jsx en nuestro archivos.
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },

    // Indica al servidor de desarrollo
    devServer: {
        port: 3000,
        compress: true,
        static: {
            directory: path.join(__dirname, "src")
        },
    }
};