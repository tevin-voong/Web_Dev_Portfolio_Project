import 'dotenv/config';
import express from 'express';
import * as comics from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post ('/comics', (req,res) => { 
    comics.createComic(
        req.body.title, 
        req.body.year, 
        req.body.language
        )
        .then(comic => {
            res.status(201).json(comic);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Comic document creation failed' });
        });
});

// RETRIEVE controller ****************************************************
app.get('/comics', (req, res) => {
    comics.retrieveComics()
        .then(comic => { 
            if (comic !== null) {
                res.json(comic);
            } else {
                res.status(404).json({ Error: 'Unable to find comic document.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Comic document retrieval failed.' });
        });
});

// RETRIEVE by ID controller
app.get('/comics/:_id', (req, res) => {
    comics.retrieveComicByID(req.params._id)
    .then(comic => { 
        if (comic !== null) {
            res.json(comic);
        } else {
            res.status(404).json({ Error: 'Unable to find comic document.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Comic document retrieval failed.' });
    });

});

// UPDATE controller ************************************
app.put('/comic/:_id', (req, res) => {
    comics.updateComic(
        req.params._id, 
        req.body.title, 
        req.body.year, 
        req.body.language
    )
    .then(comic => {
        res.json(comic);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'unable to update document' });
    });
});


// DELETE Controller ******************************
app.delete('/comic/:_id', (req, res) => {
    comics.deleteComicById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document does not longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'unable to delete document' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});