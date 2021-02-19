const express = require('express');
const app = express();
const mongoose = require('mongoose');
const customers = require('./model/customer');

 mongoose.connect('mongodb://localhost/firs-rest-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.json());


app.get('/',(req,res)=>{
  res.send('Welcome to first  rest api by Erkan Sevim');
})

app.get('/api/customers',(req,res)=>{
  customers.find({},(error,doc)=>{
    res.send(doc);
  })
})

app.get('/api/customers/:id',(req,res)=>{
  customers.findById(req.params.id,(error,doc)=>{
     res.send(doc);
  })


})


app.post('/api/customers',(req,res)=>{

  customers.create(req.body,(error,doc)=>{
    res.send(doc);
  })
   
})


app.put('/api/customers/:id',(req,res)=>{
  customers.findOneAndUpdate({_id:req.params.id},{title:req.body.title}).then(customer => res.send(customer));
})

app.delete('/api/customers/:id',(req,res)=>{
   customers.findByIdAndDelete(req.params.id,(error,doc)=>{
      res.send(doc);
   })

})



app.listen(3000);