import { initializeApp, cert } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'
import { getFirestore } from 'firebase-admin/firestore'

var serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "{}");

initializeApp({
    credential: cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
});
  
const bucket = getStorage().bucket();
const db = getFirestore();

const checkFile = async (fileName: string) => {
    let file = bucket.file(fileName);
    let exists = await file.exists();

    return exists[0];
}

const saveContent = async (fileName: string, content: string) => {
    let file = bucket.file(fileName);
    let upload = file.save(content);

    return upload;
}

const getContent = async (fileName: string) => {
    let file = bucket.file(fileName);
    let content = await file.download();

    return content.toString();
}

const saveData = async (collection: string, data: any, id?:string) => {
    if(id){
        await db.collection(collection).doc(id).set(data);
    }else{
        await db.collection(collection).add(data);    
    }
    
    return data;
}

const getData = async (collection: string, id: string) => {
    let doc = db.collection(collection).doc(id);
    let data = await doc.get();

    return data.data();
}

export const StorageService = { 
    checkFile, 
    saveContent, 
    getContent 
}

export const FirestoreService = {
    saveData,
    getData
}