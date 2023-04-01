import { useState, useEffect } from "react"
import { collection, query, getDocs } from "firebase/firestore"
import  {db} from "../Config/Firebase"

const useFetch = () => {
  const [data, setData] = useState([])
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {
        const q = query(collection(db, "users"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setData(list)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return { data }

  //   const reFetch = async () => {
  //     setLoading(true);
  //          let list=[];
  //               try{
  //                   const q = query(collection(db, "users"));
  //                   const querySnapshot = await getDocs(q);
  //                   querySnapshot.forEach((doc) => {
  //                       list.push({id:doc.id,...doc.data()});

  //                   });
  //                   setData(list);

  //             }catch(err){
  //               setError(err);
  //             }
  //     setLoading(false);
  //   };
}

export default useFetch
