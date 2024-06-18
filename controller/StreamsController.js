import fs, { write } from 'fs';
const streamController = {};

streamController.readStreamData = async (req,res) => {
    const data = fs.createReadStream('sampleFile.txt', 'utf8');
    data.on('data', (chunk) => {
        console.log(`Received Chunk ::  ${chunk}`);
        res.status(200).send({message : 'File was successfully Read'});
    });

    data.on('end', () => {
        console.log('No more data');
    });

    data.on('error', (err) => {
        console.error(`Error :: ${err}`);
        res.status(400).send({message : `Error while reading file :: ${err}`});
    })
}

streamController.writeStreamData = async (req,res) => {
    const writeStream = fs.createWriteStream('sampleFile.txt', 'utf-8');
    writeStream.write('Hello,');
    writeStream.write('Stream Write\n');
    writeStream.end('This is the end \n');
    writeStream.on('finish', () => {
        console.log(`All data has been written.`);
        res.status(201).send({message: 'Writing Stream is completed'});
    });
    writeStream.on('error', (err) => {
        console.error(`Error in write stream :: ${err}`);
        res.status(400).send({err});
    })
}

streamController.readWriteStreamData = async(req,res) => {
    const readStream = fs.createReadStream('C:/Users/conta/OneDrive/Desktop/transcript_MessageQueue');
    const writeStream = fs.createWriteStream('sampleFile.txt');

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`All data has been written.`);
        res.status(201).send({message: 'Writing Stream is completed'});
    });

    writeStream.on('error', (err) => {
        console.error(`Error in write stream :: ${err}`);
        res.status(400).send({err});
    })
}

export default streamController;