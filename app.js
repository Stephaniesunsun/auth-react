var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const dotenv=require('dotenv');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const indexRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post');
const cors=require('cors');
//middlewares
app.use(express.json());
app.use(cors());
//app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
()=>{
  console.log('connect to DB');
  
});
//Route middlewares
app.use('/api/user', indexRouter);
app.use('/api/posts', postRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//static assets 
if(process.env.NODE_ENV==='production'){
  //set static folder
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}
var port = process.env.PORT || 8080;
app.listen(port,function(){
  console.log('app listening on port'+port);
})
module.exports = app;
