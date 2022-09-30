import path from 'path';
import { PassThrough } from 'stream';
import {merge} from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: {directory:path.join(path.resolve(), "../dist")
    },
    port: 3000,
    http2:true,
    https: {
        key: fs.readFileSync("./cert/localhost-key.pem"),
        cert: fs.readFileSync("./cert/localhost.pem"),
    }
}

})