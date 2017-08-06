var HomeController = require('./controllers/HomeController');
var DataRoute = require('./routes/DataRoute.js');
var cors = require('cors')



// Routes
module.exports = function(app){
    
    // Main Routes
    app.use(cors());
    app.get('/getMimicData', DataRoute.getMimicData);
    //app.get('/other', HomeController.Other,AuthenticationConroller.checkAccessWrites, updateController.addinfo()) ;   
    app.get('/getvitals', DataRoute.getVitals);
    app.get('/getvitalsall', DataRoute.getVitalsAll);
    app.get('/getvitalsall', DataRoute.getVitalsAll);
    app.get('/getreport', DataRoute.getReport);
    app.get('/getreportparam', DataRoute.getReportParam);
    app.get('/safiatest', function(req, res){
    	var data={
    		safia:"isthebest"
    	}
    	return res.json(data)
    } )

    

};
