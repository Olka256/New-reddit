const webpack = require('webpack'); // для автоматического обновления сборки билда и запуске сервера при изменении в коде
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

compiler.run((err) => { //холодный старт нашего приложения, если ошибка - консоль
    if (err) {
    console.log('Compilation faild: ', err);
    }
    compiler.watch({}, (err) => {
        if (err) {
           console.log('Compilation faild: ', err);
        }
        console.log('Compilation was successful');
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),  //наблюдение за изменениями в файлах директорий
            path.resolve(__dirname, '../dist/client')
        ]
    });
});
