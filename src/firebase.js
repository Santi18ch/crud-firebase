require('dotenv').config()
const { initializeApp, aplicationDefaul } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admon/firestore')

initializeApp({
    credential: aplicationDefaul()
})

const db = getFirestore()

    module.exports = {
        db
    }