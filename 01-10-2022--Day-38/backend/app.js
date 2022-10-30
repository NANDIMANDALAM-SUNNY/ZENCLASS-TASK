var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var urlRouter = require('./routes/url');
const { default: mongoose } = require('mongoose');
const { dburl } = require('./DbConnection/dbConnection');
const fileUpload = require('express-fileupload');



mongoose.connect(dburl, { useNewUrlParser: true,useUnifiedTopology: true})
.then(
  (res) =>  {
    console.log(`Database is Connected`)
    // console.log(res.connection);
  },
  err => { console.log(`Not Connected`) }
);



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload({
  useTempFiles: true,
  // createParentPath: true,
}))


// setInterval(() => {
  // fetchProductData()
//   console.log("New Data fetched after 12 hours")
// }, 43200000);



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/url', urlRouter);
// app.use('/webscrap', productsRouter);




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

module.exports = app;
