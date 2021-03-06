import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar, Doughnut, Line } from "react-chartjs-2"
import Chart from 'chart.js/auto'

const Project = () => {
    
    const [confirmedData, setConfirmedData] = useState({})
    const [quarantinedData, setQuarantinedData] = useState({})
    const [comparedData, setComparedData] = useState({})

    const [loading, setLoading] = useState(true);
    const [array, setArray] = useState(0)
    const count = 0;
    useEffect(()=>{
        let completed = false;
        
        const fetchEvents = async ()=>{
           
            const res= await axios.get("https://api.covid19api.com/total/dayone/country/kr");
            
            if(!completed){
                console.log("completed=false")
                makeData(res.data)
            }            
        } 
        function setArray(){

        }

        const makeData = (items)=>{
                const arr = items.reduce((acc, cur)=>{
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths; 
                const recovered = cur.Recovered;
                
                const findItem = acc.find(a=>a.year === year && a.month === month);

                if(!findItem){
                    acc.push({
                        year,
                        month,
                        date,
                        confirmed,
                        active,
                        death,
                        recovered
                    })
                }
                if(findItem && findItem.date < date){
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.recovered = recovered;
                    findItem.confirmed = confirmed;
                }
                
                console.log("array+1")
                return acc
                   
                
            }, [])
            
            console.log(arr);
    
            const labels = arr.map(a => `${a.month + 1}???`)
            console.log(labels);
            const datas = arr.map(a=>a.confirmed) 
            console.log(datas);
            setConfirmedData({
                labels,
                datasets:[
                    {
                        label:"?????? ?????? ?????????",
                        backgroundColor : "salmon",
                        fill : true,
                        data : arr.map(a=>a.confirmed)
                    },
                ]
            });
            setQuarantinedData({
                labels,
                datasets:[
                    {
                        label:"?????? ????????? ??????",
                        borderColor : "salmon",
                        fill : true,
                        data : arr.map(a=>a.active)
                    },
                ]
            });
            const last = arr[arr.length -1];
            console.log(last.recovered)
            setComparedData({
                labels: ["?????????", "????????????", "??????"],
                datasets:[
                    {
                        label:["?????? ??????, ??????, ?????? ??????"],
                        backgroundColor : ["#ff3d67","#059bff","#ffc233"],
                        borderColor : ["#ff3d67","#059bff","#ffc233"],
                        fill : false,
                        data : [last.confirmed, last.recovered, last.death]
                    },
                ]
            });
            setLoading(false)
        }
        console.log("array" + array)
        
        fetchEvents()
        return() =>{
            completed = true; 
            console.log("completed=true");
            
        }
            
        
    }, [loading])
   
        return (
        <section>
        <a name="home" className="tm"></a>  
        <div className="contents" >
            <br /> 
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-center">Welcome to Jaemin's homepage</h1>
                    
                </div>
            </div>
        </div>
      </section> 
    )
        
}

export default Project
