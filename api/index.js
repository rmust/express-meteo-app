const express = require('express'); 

const app = express(); 
const PORT = 3000; 

const METEO_BASE_URL = "https://api.meteo.lt/v1";

function setHeaders(res) {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
	res.setHeader('Content-Type', 'application/json'); 
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', 'meteo-app.vercel.app')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
}

app.get('/places/:place/forecasts/long-term', async (req, res) => { 
  setHeaders(res);
	const response = await fetch(`${METEO_BASE_URL}/places/${req.params.place}/forecasts/long-term`);
	const json = await response.json();
	res.status(200).send(json); 
}); 

app.get('/places', async (req, res)=>{ 
  setHeaders(res);
	const data = await fetch(`${METEO_BASE_URL}/places`).then(res => res.json());
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

