const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

// prisma 

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


app.get('/',(req,res) => {

    res.json({message: 'connected'});

});

app.listen(port,()=>{

    console.log(`Listening to request on port ${port}`);
});


//End points


app.get('/explorers', async (req,res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers)
})

app.get('/explorers/:id',async (req,res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

//post

app.post('/explorers',async (req,res) =>{
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    }

    const message ='explorer creado'
    await prisma.explorer.create({data: explorer});
    return res.json({message})
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});



//new model endpoints

app.get('/newmodels', async (req,res) => {
    const masters = await prisma.newmodel.findMany({});
    res.json(masters)
})


app.get('/newmodels/:id',async (req,res) => {
    const id = req.params.id;
    const master = await prisma.newmodel.findUnique({where: {id: parseInt(id)}});
    res.json(master);
});


app.post('/newmodel',async (req,res) =>{
    const newmodel = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander
    }

    const message ='master borned'
    await prisma.newmodel.create({data: newmodel});
    return res.json({message})
});

app.put('/newmodels/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.newmodel.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander,
            hasCertification: req.body.hasCertification
		}
	})

	return res.json({message: "Actualizado correctamente"});
});


app.delete('/newmodels/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.newmodel.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

