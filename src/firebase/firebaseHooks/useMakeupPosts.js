import { useState, useEffect } from "react";
import { db } from "../config";
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {

    const [posts, setPosts] = useState(null)
    
    useEffect(() => {
        
        let ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) =>{

        let results = []
        snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data()})
        
        })
        setPosts(results)
        })
        
        return () => unsub()
}, [c])

return { posts }
}