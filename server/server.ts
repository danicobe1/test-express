import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

import * as homeController from './controllers/api.controller';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api', homeController.httpGet);
app.put('/api', homeController.httpPut)

app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;
