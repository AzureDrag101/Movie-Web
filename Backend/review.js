import app from './server.js';
import mongodb from 'mongodb';


const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://kokafor100:$Ibeoka22@moviereview.ms3ir7m.mongodb.net/?appName=MovieReview";
const port = 8000;

MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
    maxPoolSize: 50,
    wtimeoutMS: 2500,})
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port: ${port}`);
        });
    });