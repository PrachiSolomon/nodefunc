const fdk=require('@fnproject/fdk');

fdk.handle(function(input, ctx){
  let name = 'World';
  if (input) {
    name = input;
  }
  let hctx = ctx.httpGateway
  console.log("Request URL" , hctx.requestURL)
  
  console.log("Authorization header:" , hctx.getHeader("Authorization"))
  console.log( hctx.headers)
  return 'Hello ' + name + ' from Node call ' + ctx.callID + '!';
})
