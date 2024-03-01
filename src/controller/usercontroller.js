"use strict"

const User = require("../model/usermodel")


module.exports={
    list :async(req,res)=>{
        /**  
         #swagger.tags=["Users"] 
         #swagger.summer="Users List"
         */

        const data  = await res.getModelList(User)
        // res ile başlamasının sebebi, bu methodların res nesnesine eklenmiş olmasıdır. Bu, methodların herhangi bir controller içerisinde yanıt nesnesi üzerinden çağrılabilmesini sağlar. Bu yaklaşım, kodun yeniden kullanılabilirliğini artırır ve genellikle MVC (Model-View-Controller) gibi tasarım desenlerinde kullanılır.
        res.status(200).send({
            error:false,
            data,
             details: await res.getModelListDetails(User)
        })


    },
    create :async(req,res)=>{
        /**
         #swagger.tags=["Users"]  
        #swagger.summery="User Create"       ]
         */
          
        const data  = await User.create(req.body)
            console.log(data,"create")
        res.status(201).send({
            error:false,
            data,
        })

    },
    read :async(req,res)=>{
        /**
         #swagger.tags=["User"]
         #swagger.summery="One Read"
         */

        const data = await User.findOne({_id:req.body.id})
        res.status(204).send({
            data,
            error:false
        })

    },
    update :async(req,res)=>{
        const data = await User.updateOne({_id:req.params.id},req.body,{ runValidators: true })

        res.status(202).send({
            error:false,
            new:await User.findOne({_id:req.params.id})
        })

    },
    delete :async(req,res)=>{
        const data = await User.deleteOne({_id:req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            error:!data.deletedCount,
            data

        })

    },
  
}