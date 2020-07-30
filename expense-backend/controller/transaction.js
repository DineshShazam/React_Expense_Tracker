import Transaction from '../Driver/Schema'


//@desc get the Balance
//@route GET /showBalance
export const getTransaction = async (req,res) => {

    try {

        const value = await Transaction.find() //finds all the value from moongo db

        res.status(200).json({
            Success:true,
            Count:value.length,
            data:value
        })
        
    } catch (error) {

        console.log(error)
        
    }
  
}

// @desc Adding Transaction History
// @route POST /addMoney
// @access public 
export const addTransaction = async (req,res) => {
    
      try {
          const {text,amount} = req.body

          const result = await Transaction.create(req.body) // create a seperate collection

          res.status(201).json({
              Success:true,
              data:result
          })

      } catch (error) {
          if(error.name == 'ValidationError')
          {
              const message = Object.values(error.errors).map(val => val.message)
              res.status(400).json({
                  Error: message
              })
          }
          else {
            res.status(500).json({
                Error: 'Internal Server Error'
            })
          }
      }
        
}

// @desc deleting Transaction History
// @route POST /deleteMoney:id
// @access public 
export const deleteTransaction = async(req,res) => {
  

        try {

            
        console.log(`${req.params.id}`)
        const id = req.params.id

        const result = await Transaction.findById(id);

        if(!result) {
            res.status(404).json({
                Success:false,
                Error:'Id Missing'
            }) 
        }
        else {

            await result.remove() //delet the mentioned id
            res.status(200).json({
                Success:true,
                Message:'Deleted'
            })
        }

       
            
        } catch (error) {

            res.status(500).json({
                Success:false,
                Error: 'Internal Server Error'
            })
            
        }
   
}