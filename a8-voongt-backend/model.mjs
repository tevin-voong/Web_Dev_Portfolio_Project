// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const database = mongoose.connection;

database.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Comics collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const comicSchema = mongoose.Schema({
	title:    { type: String, required: true },
	year:     { type: Number, required: true },
	language: { type: String, required: true }
});

// Compile the model from the schema.
const Comic = mongoose.model('Comic', comicSchema);

// CREATE model *****************************************
const createComic = async (title, year, language) => {
    const comic = new Comic({ 
        title: title, 
        year: year, 
        language: language 
    });
    return comic.save();
}

// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveComics = async () => {
    const query = Comic.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveComicByID = async (_id) => {
    const query = Comic.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteComicById = async (_id) => {
    const result = await Comic.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateComic = async (_id, title, year, language) => {
    const result = await Comic.replaceOne({_id: _id }, {
        title: title,
        year: year,
        language: language
    });
    return { 
        _id: _id, 
        title: title,
        year: year,
        language: language 
    }
}


// Export our variables for use in the controller file.
export { createComic, retrieveComics, retrieveComicByID, updateComic, deleteComicById }
