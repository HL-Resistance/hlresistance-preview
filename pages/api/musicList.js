import {MongoClient} from "mongodb";
import config from "../../config.json"; // Basetag doesn't seem to work

export default function musicList(req, res) {
    MongoClient.connect(`mongodb+srv://${config.mongodb.username}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            res.status(500).send("Internal server error");
            client.close();
        } else {
            const col = client.db("backend").collection("musics");
            col.find().toArray((err2, items) => {
                if (err2) {
                    res.status(500).send("Internal server error");
                    client.close();
                } else {
                    res.status(200).json({docs: items});
                    client.close();
                }
            });
        }
    });
}