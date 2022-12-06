
import { useState, useEffect } from "react";
import { firestore as db } from '../../firebase/firebase-setup'
import { collection, onSnapshot} from "firebase/firestore"

export default function useUserName() {
    const [userName, setUserName] = useState([]);
    
    useEffect(() => {
        const unsubsribe = onSnapshot(
          collection(db, "users"),
          (QuerySnapshot) => {
            if (QuerySnapshot.empty) {
              userName([]);
              return;
            }
            setUserName(
              QuerySnapshot.docs.map((snapDoc) => {
                let data = snapDoc.data();
                data = [snapDoc.id, data.username];
                return data;
              })
            );
          });
        return () => {
          unsubsribe();
        }
      }, [],);
      console.log(userName)
      return userName
}