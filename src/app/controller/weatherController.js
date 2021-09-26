const geocode = require('../../utils/geocode');
const forecast = require('../../utils/forecast');

class WeatherController {
    index(req,res) {
            if(!req.query.address)
        {
            return res.send({
                error:'You must provide an address',
            })
        }
             //GEOCODE IS HERE 
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        // fore cast
        forecast(latitude,longitude,(error, forecastData) => {  //lat - long
        if(error){
            return res.send({error})
        }
        return res.send({
            address: req.query.address,
            location: location,
            forecastData: forecastData,
            })
        })
    })
        
};

}

module.exports = new WeatherController;