import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('session.db')

export const init  = () =>{
   const promise = new Promise(( resolve, reject ) =>{
      db.transaction(tx =>{
         tx.executeSql(
            'CREATE TABLE IF NOT EXISTS sessionUser (localid TEXT NOT NULL, email TEXT NOT NULL, idToken TEXT)',
            [],
            ( _, result )=> resolve( result ),
            ( _, error ) => reject( error )
         )
      })
   })
   return promise
}

export const insertSession = ( { localId, email, idToken } ) =>{
   const promise = new Promise(( resolve, reject ) =>{
      db.transaction(tx =>{
         tx.executeSql(
            'INSERT INTO sessionUser (localId, email, idToken) VALUES (?, ?, ?)',
            [ localId, email, idToken ],
            ( _, result )=> resolve( result ),
            ( _, error ) => reject( error )
         )
      })
   })
   return promise
}

export const fetchSession = () =>{
   const promise = new Promise(( resolve, reject ) =>{
      db.transaction(tx =>{
         tx.executeSql(
            'SELECT * FROM sessionUser',
            [],
            ( _, result )=> resolve( result ),
            ( _, error ) => reject( error )
         )
      })
   })
   return promise
}


export const deleteSession = () =>{
   const promise = new Promise(( resolve, reject ) =>{
      db.transaction(tx =>{
         tx.executeSql(
            'DELETE FROM sessionUser',
            [],
            ( _, result )=> resolve( result ),
            ( _, error ) => reject( error )
         )
      })
   })
   return promise
}