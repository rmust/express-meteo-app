const express = require('express'); 

const app = express(); 
const PORT = 3000; 

const METEO_BASE_URL = "https://api.meteo.lt/v1";

app.get('/places/:place/forecasts/long-term', async (req, res) => { 
	const response = await fetch(`${METEO_BASE_URL}/places/${req.params.place}/forecasts/long-term`)
	const json = await response.json()
	res.set('Content-Type', 'application/json'); 
	res.set('Access-Control-Allow-Origin', '*'); 
	res.status(200).send(json); 
}); 

app.get('/places', async (req, res)=>{ 
	const data = await fetch(`${METEO_BASE_URL}/places`).then(res => res.json())
	res.set('Content-Type', 'application/json'); 
	res.set('Access-Control-Allow-Origin', '*'); 
	res.status(200).send(data); 
}); 

app.listen(PORT, (error) => { 
  	if(!error)  {
  		console.log(`Server is Successfully Running, and App is listening on port ${PORT}`) 
  	}
  	else {
  		console.log("Error occurred, server can't start", error); 
  	}
  } 
); 

