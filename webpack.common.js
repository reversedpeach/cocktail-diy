import path from 'path';
const loaders = [];

loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader',
})

loaders.push({
    test: /\.css$/,
    use: 'style-loader', 
})

loaders.push({
    test: /\.css$/,
    use: 'css-loader',
})

loaders.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: 'file-loader',
})


export default {
    entry: {
        app:'./client/app.jsx'
    }, module: {
        rules: loaders
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(path.resolve(), 'dist')
    }
}