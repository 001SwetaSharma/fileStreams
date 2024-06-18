import { promises as fs } from 'fs';
const fileController = {};

fileController.writeFileData = async (req, res) => {
    try {
        await fs.writeFile('sampleFile.txt', req.body.data, 'utf-8');

        res.status(201).send({message : 'File is successfully written'});
    } catch (err) {
        console.error(`Error in writting File :: ${err}`);
        res.status(400).send(`${JSON.stringify(err.message)}`);
    }
}

fileController.readFileData = async (req,res) => {
    try {
        let data = await fs.readFile('C:/Users/conta/OneDrive/Desktop/transcript_MessageQueue', 'utf8');
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error in reading file :: ${err}`);
        res.status(400).json(err);
    }
}


fileController.writeReadFileData = async (req,res) => {
    try {
        let data = await fs.readFile('C:/Users/conta/OneDrive/Desktop/transcript_MessageQueue', 'utf8');
        console.log('for data....', data);
        await fs.writeFile('sampleFile.txt', data, 'utf8');
        res.status(201).send('Read and write is succesfull');
    } catch (err) {
        console.error(`Error in reading and writting file ::  ${err}`);
        res.json(400).json(err);
    }
}

export default fileController;