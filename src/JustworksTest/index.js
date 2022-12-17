import React, {useState} from "react";
import Papa from "papaparse";

function Justworktest() {

    const [values, setValues] = useState([]);
    const uploadhandler = (event)=> {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const valuesArray = [];
                const map = new Map();
                results.data.map((d) => {
                    if (Object.values(d)[0] != ""){
                        var id = Object.values(d)[0]
                        var date = Object.values(d)[1].split("/")[0]+"/"+Object.values(d)[1].split("/")[2]
                        var amount = Object.values(d)[2]
                        var mapkey = id+date;
                        if (!map.has(mapkey)){
                            var person = new Object();
                            person.id = id
                            person.date = date
                            person.currentbalence = parseInt(amount)
                            person.minbalence= person.currentbalence;
                            person.maxbalence = person.currentbalence;

                            map.set(mapkey,person);
                        }else{
                            person = map.get(mapkey);
                            person.currentbalence += parseInt(amount);
                            if (person.currentbalence>person.maxbalence){
                                person.maxbalence=person.currentbalence;
                            }
                            if (person.currentbalence<person.minbalence){
                                person.minbalence=person.currentbalence;
                            }
                            map.set(mapkey,person);
                        }
                    }
                });
                map.forEach((value, key, map)=>{
                    valuesArray.push(value)
                })
                setValues(valuesArray);

            },
        });
    }
    console.log(values);
    return (
        <div className={"mt-5"}>
            <div>
                <input type="file" id="file" onChange={(event) => uploadhandler(event)}/>
            </div>
            <div>
                <table className={"mt-2 table"} border={1} id="result">
                    <thead>
                        <tr>
                            <th>{"Id"}</th>
                            <th>{"Minbalence"}</th>
                            <th>{"Maxbalence"}</th>
                            <th>{"Currentbalence"}</th>
                            <th>{"Date"}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        values.map(x => {
                            return(<tr>
                                <td>{x.id}</td>
                                <td>{x.minbalence}</td>
                                <td>{x.maxbalence}</td>
                                <td>{x.currentbalence}</td>
                                <td> {x.date}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Justworktest;