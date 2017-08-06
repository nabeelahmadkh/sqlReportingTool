# agreedpredict
Analytics, Simulation, visualization,Prediction and Reports of your Business

# AgreedPredict
### V0
AgreedPredict is custom reporting tool for businesses that want very tailored analytics. This is demo of AgreedPredict. We have created a reporting tool on MIMIC-III, a freely accessible critical care database. 
  
For more information please see:
  
https://mimic.physionet.org/
  
This is just the demo data of the MIMIC DATABASE.
  
![](https://github.com/hamzaowais/agreedpredict/blob/master/demo.gif)

### Environment Set up

1. Install MySQL Data base
  
2, Create two databases with the following configuration 
`"demo_mimic":{
		"host"     : 'localhost',
  		"user"     : 'root',
  		"password" : 'paytm@123',
  		"database" : 'demo_mimic'
	}
`
  
`"iEXPLORECC":{
		"host"     : 'localhost',
  		"user"     : 'root',
  		"password" : 'paytm@123',
  		"database" : 'iEXPLORECC'
	}`
  
2. Import the mysql dump of the 2 database from the folder   : backend/mysql_query
  
3. Install npm and node.js
  
4. goto the folder /backend
  
5. run the following command in the terminal:
  
`
npm install
  
node app.js
`
  
6. goto the /frontend folder
  
7. run the following command:
  
`
npm install
  
npm start
`
  
8.The app will start on ip : http://localhost:3000/
  