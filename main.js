const express= require("express")

const app = express()

const port = 5000

const verifTime=(req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

if(currentDay >= 2 && currentDay <= 6 && currentHour >= 12 || currentHour < 17){
    return res.status(503).send('Service Unavailable');
}
next()
};
app.use(verifTime)


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/Homepage.html')
})

app.get('/Ourservice.html', (req,res)=>{
    res.sendFile(__dirname+'/Ourservice.html')
})


app.get('/Contact.html', (req,res)=>{
    res.sendFile(__dirname+'/Contact.html')
})




app.listen(port,console.log('server en marche'))