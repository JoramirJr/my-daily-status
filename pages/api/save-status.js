import { db } from '../../lib/db'
import admin from 'firebase-admin'

const saveStatus = async(request, response) => {
    await db.collection('test').add({ test: 1, coordinates: new admin.firestore.GeoPoint(-20.218990, -45.939060) })
    console.log(request)
    response.send( {ok:true} )
}
export default saveStatus