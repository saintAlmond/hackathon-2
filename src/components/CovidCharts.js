import React, {  useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';




export default function Chart ()  {
//iniciar data container
    const [dataESP, setDataESP] = useState();
    const [dataUS, setDataUS] = useState();

//fetch info from server

    useEffect(() => {
        fetch(
            'http://localhost:3001/ESP'
        ).then((response => {
            if (response.status < 400){
                return response.json();
            }
            return Promise.reject()

        }))
            .then(response => {
                const filteredData = response.data.filter((dayData) => {
                    console.log(dayData);
                    if (dayData.date === '2020-11-01' || dayData.date === '2020-10-01' ){
                        console.log('ENTR')
                        return ({
                            'date': dayData.date,
                            'cases': dayData.new_cases_per_million}
                            )
                    }
                })
                setDataESP(filteredData);
            })
            .catch(err => console.log(err));
    }, []);
// if data not loaded empty div

    // iniciar data container

//fetch info from server

    useEffect(() => {
        fetch(
            'http://localhost:3001/ESP'
        ).then((response => {
            if (response.status < 400){
                return response.json();
            }
            return Promise.reject()

        }))
            .then(response => {
                const filteredData = response.data.filter((dayData) => {
                    if (dayData.date === '2020-11-01' || dayData.date === '2020-10-01' || dayData.date === '2020-09-01' || dayData.date === '2020-08-01' || dayData.date === '2020- -01'){
                        return ({
                            'date': dayData.date,
                            'cases': dayData.new_cases_per_million}
                            )
                    }
                })
                setDataUS(filteredData)
                ;
            })
            .catch(err => console.log(err));
    }, []);
// if data not loaded empty div
    if (dataUS === undefined || dataESP === undefined) {
        return <div />;
    }
console.log(dataESP, dataUS)

const data = dataESP && dataUS && [
    {name: '2020-11-01', es: dataESP[0].new_cases_per_million, us: dataUS[0].new_cases_per_million},
    {name: '2020-10-01', es: dataESP[1].new_cases_per_million, us: dataUS[1].new_cases_per_million},
    {name: '2020-10-01', es: dataESP[2].new_cases_per_million, us: dataUS[2].new_cases_per_million},
    {name: '2020-10-01', es: dataESP[3].new_cases_per_million, us: dataUS[3].new_cases_per_million},
    {name: '2020-10-01', es: dataESP[4].new_cases_per_million, us: dataUS[4].new_cases_per_million},
];
// const data = [];

        return (
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="es" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="us" stroke="#82ca9d" />
            </LineChart>
        );
    }