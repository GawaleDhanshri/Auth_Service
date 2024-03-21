const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const db = require('./models/index');
// const UserRepostory = require('./repository/user-repository')

const UserService = require('./service/user-service')

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        // const repo = new UserRepostory();
        // const response = await repo.getById(1);
        // console.log(response);
        
        // if(process.env.DB_SYNC) {
        //     db.sequelize.sync({alter: true});
        // }

        const service = new UserService();
        const newToken = service.createToken();
    });
}   

prepareAndStartServer();