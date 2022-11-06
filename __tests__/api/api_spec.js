const frisby = require('frisby');

const Joi = frisby.Joi;

it('should be successfully browsed', function () {
  return frisby.get('https://www.shoecarnival.com/manifest.json')
    .expect("status", 200)
    .expect("json", "name", "Shoe Carnival")
    .expect("json", "short_name", "Shoe Carnival")
    .expect("json", "start_url", "/")
    .expect("json", "background_color", "#fff")
    .expect("json", "theme_color", "#002596")
    .expect("json", "display", "standalone")
    .expect("json", "orientation", "portrait-primary")
    .expect('jsonTypes', 'icons.*', {
        'src': Joi.string().required(),
        'sizes': Joi.string().required(),
        'purpose': Joi.string().required()
    })

    // return frisby.get('https://www.shoecarnival.com/api/session?__v__=A2rlwdUz2B-rBRZ0UElOv')
    //     .expect("status", 200)
    //     .expect("json", "signedIn", false)
    //     .expect('jsonTypes', 'customer', {
    //         'authType': Joi.string().required(),
    //         'customerId': Joi.string().required() })
    //     .expect('jsonTypes', 'cart', {
    //          '_type': Joi.string().required(),
    //          '_resource_state': Joi.string().required(), 
    //          'adjustedMerchandizeTotalTax' : Joi.number().integer()

    //         })
    
    
});