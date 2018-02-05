const errJSON ={error:'Could not decode request:JSON parsing failed'};

function clientErrorHandler (err,req,res,next ) {
  res.status(400).send(errJSON);
}

module.exports.clientErrorHandler =clientErrorHandler;
module.exports.errJSON=errJSON;
