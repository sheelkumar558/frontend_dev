/*
Database - 
What ? - a dedicated s/w -> store/retrieving data
Why ? - 
        - 1. Create/store data ---> in some file/db
          2. Read                                   
          3. Update                                  
          4. Delete
      
        db.json -> 
         // CRUD + more things

Types
       - SQL - Structured Query Language - Tabular form - rows and columns
       - NOSQL - NO - SQL


       - NoSQL -> MongoDB
       -> easy to learn

   1 database - Masai database
    
    collection_1
      {
          name : "Mobile",
          price : 10k
      }
      {
          name : "Laptop",
          price : 40k
      }
       {
          name : "Tablet",
          price : 15k,
          screen_size : 6 
      }

collection_2
      {
          id : 1
          name : "Arun",
          course : "NEM-111"
      }
      {
          id : 99,
          name : "Shubham",
          course : "NEM-111"
      }
                     
                      

                    database 
                         - collections 
                            - document


see all databases - show dbs
use a particular database - use dbname
create a collection - db.createCollection("collection_name")
access a collection - db.collection_name.CRUD
                           
// CRUD -> 
        db.collection_name.CRUD

         Read -> .find()
                 .find({key:value})
                 .findOne() - returns the first matching document
                 .findOne({key : value})
                           .pretty()
        
         Create -> .insertMany([{},{}]) - insert/create 1 or many documents - array of objects
                   .insertOne({})

         Update -> .updateOne({criteria/target},{updatedvalues}) - updates the first document which is matching the criteria
                   .updateMany({target},{updatedvalues}) - updates all documents which match the criteria

                    //country : India

                    //atomic operators - 
                              $set, - new key-value pair, modifying/updating a key-value pair
                              $inc, - 
        
        Delete -> .deleteOne({target})
                  .deleteMany({target})


                  // - Mongo is installed and working -> mongosh
                  // - try out basic CRUD


                  // JSON -> BSON
                  // BSON -> JSON + binary




*/
