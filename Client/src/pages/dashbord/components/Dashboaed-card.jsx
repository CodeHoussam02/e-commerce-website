const DashboardCard = ({label, icon, amount, description}) => {
    return <div className="bg-slate-600/40 shadow flex w-full flex-col gap-3 rounded-[5px] p-5 font-poppins group">
        <section className="flex justify-between gap-2">
            <p className="text-sm">{label}</p>
            {icon}
        </section>
        <section className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{amount}</h2>
            <p className="text-sm">{description}</p>
        </section>
    </div>
}


export default DashboardCard;
