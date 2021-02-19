const express = require('express');
const app = express();

app.use(express.json());
let customers = [
  {title: 'George', id: 1},
  {title: 'Josh', id: 2},
  {title: 'Tyler', id: 3},
  {title: 'Alice', id: 4},
  {title: 'Candice', id: 5}
  ]

app.get('/',(req,res)=>{
  res.send('Welcome to first  rest api by Erkan Sevim');
})

app.get('/api/customers',(req,res)=>{
  res.send(customers);
})

app.get('/api/customers/:id',(req,res)=>{
  const customer = customers.find(c=> c.id === parseInt(req.params.id));

  if(!customer){
    return res.status(404).send('<h1>Cant find what you are looking for</h1>')
  }
  
  res.send(customer)
})


app.post('/api/customers',(req,res)=>{
   if(!req.body){
    return res.status(404).send('<h1>Cant find what you are looking for</h1>')
   }
   const newCustomer = {title:req.body.title,id:customers.length+1};
   customers.push(newCustomer);
   res.send(newCustomer);
})
app.put('/api/customers/:id',(req,res)=>{
  console.log('girdi');
   const customer = customers.find(c => c.id === parseInt(req.params.id));
   if(!customer){
    return res.status(404).send('<h1>Cant find what you are looking for</h1>')
   }
   customer.title = req.body.title;
   res.send(customers);
})

app.delete('/api/customers',(req,res)=>{
   if(!req.body.id){
    return res.status(404).send('<h1>Cant find what you are looking for</h1>')
   }

   customers = customers.filter(customer => customer.id !== req.body.id);
   res.send(customers);
})



app.listen(3000);