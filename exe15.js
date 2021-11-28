const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()


///---exercise 15----

/*app.get('/', function (req, res) {
    res.send('This text returned from my nodejs server')
  })
   
  app.listen(3000)

*/
  ///----exercise 16------   http://localhost:3000?num1=23&num2=12

 /* app.get('/', function (req, res) {

        let total = +req.query.num1 + +req.query.num2
        res.json(total)
  })
   
 app.listen(3000)
*/

 ///-----exercise 17 -------   http://localhost:3000/1991


 /*app.get('/:birthYear', function (req, res) {
    
    let birthYear = +req.params.birthYear
    res.json(`You were born in: ${birthYear}`)

  })
   
  app.listen(3000)
*/


////-----exercise 18-------




let personArr = []







