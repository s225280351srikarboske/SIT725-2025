const mongoose = require('mongoose');
var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://003boske:Srikar%402003@cluster0.jadkjwq.mongodb.net/SIT725', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('4.2', ProjectSchema);

const sampleProjects = [
    {
        title: "Kitten 1",
        image: "images/1.jpg",
        link: "About Kitten 4",
        description: "Demo description about kitten 1"
    },
    {
        title: "Kitten 2",
        image: "images/2.jpg",
        link: "About Kitten 2",
        description: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/3.jpg",
        link: "About Kitten 3",
        description: "Demo desciption about kitten 3"
    }
];

Project.insertMany(sampleProjects)
    .then(() => console.log("Project saved!"))
    .catch((err) => console.error(err));
    
app.get('/api/4.2', async (req,res) => {
    const projects = await Project.find({});
    res.json({statusCode: 200, data: projects, message:"Success"})
})

var port = process.env.port || 3000;



app.listen(port,()=>{
    console.log("Server is  listening to: "+port)
})