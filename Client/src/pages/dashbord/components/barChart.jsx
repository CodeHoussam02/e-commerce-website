"use client";

import {
    BarChart as BarGrpah,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Bar,
} from "recharts";
import { chartIcon } from "../../../assets/icons/icons";

const salesData = [
    {
        mois: "Janvier",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Fevrier",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Mars",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Avril",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Mai",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Jui",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Juillet",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Aout",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Septembre",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Octobre",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Nevembre",
        ventes: Math.floor(Math.random() * 100),
    },
    {
        mois: "Decembre",
        ventes: Math.floor(Math.random() * 100),
    },
];
console.log(salesData)

const Barchart = () => {
    return (
        <div className="bg-slate-600/50 shadow w-full flex flex-col gap-3 rounded-[5px] p-5 text-slate-100">
            <section className="flex justify-between gap-2 text-slate-100 pb-2">
                <p>Ventes Data</p>
                {chartIcon}
            </section>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarGrpah 
                    data={salesData}
                    margin={{top: 0, bottom: 0, right: 0, left: -15}}
                >
                    <XAxis
                        dataKey={"mois"}
                        tickLine={false}
                        axisLine={true}
                        stroke="#FFFFFF"
                        fontSize={13}
                        padding={{ left:0, right: 0,}}
                    />

                    <YAxis
                        dataKey={"ventes"}
                        tickLine={false}
                        axisLine={true}
                        stroke="#FFFFFF"
                        fontSize={13}
                        padding={{ top: 0, bottom: 0}}    
                    />
                </BarGrpah>
            </ResponsiveContainer>
        </div>
    );
};

export default Barchart;
