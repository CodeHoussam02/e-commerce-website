import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianAxis,
    ResponsiveContainer,
} from "recharts";

import { usersIcon } from "../../../assets/icons/icons";

const numberOfUsersData = [
    {
        mois: "Janvier",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Fevrier",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Mars",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Avril",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Mai",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Jui",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Juillet",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Aout",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Septembre",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Octobre",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Nevembre",
        client: Math.floor(Math.random() * 100),
    },
    {
        mois: "Decembre",
        client: Math.floor(Math.random() * 100),
    },
];

const Linegraph = () => {
    return (
        <div className="bg-slate-600/50 shadow w-full flex flex-col gap-3 rounded-[5px] p-5 text-slate-100">
            <section className="flex justify-between gap-2 text-slate-100 pb-2">
                <p>Users Data</p>
                {usersIcon}
            </section>
            <ResponsiveContainer width={"100%"} height={350}>
                <LineChart
                    data={numberOfUsersData}
                    margin={{ top: 0, left: -50, right: 0, bottom: 0 }}
                >
                    <Line
                        type="monotone"
                        dataKey="clients"
                        stroke="#FFFFFF"
                        width={50}
                        strokeWidth={3}
                    />

                    <XAxis 
                        dataKey={"Mois"}
                    />

                    <YAxis 
                        dataKey={"Clients"}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Linegraph;
