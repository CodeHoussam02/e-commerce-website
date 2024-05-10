import { BadgeDelta } from "@tremor/react";

const DashboardCard = ({ label, icon, amount, description, text }) => {
    return (
        <div className="bg-slate-600/40 shadow flex w-full flex-col gap-3 rounded-[5px] p-9 font-poppins group">
            <section className="flex justify-between gap-2">
                <p className="text-sm">{label}</p>
                {icon == "negative" ? (
                    <BadgeDelta
                        deltaType="moderateDecrease"
                        isIncreasePositive={true}
                    >
                        {text}
                    </BadgeDelta>
                ) : (
                    <BadgeDelta deltaType="increase" isIncreasePositive={true}>
                        {text}
                    </BadgeDelta>
                )}
            </section>
            <section className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{amount}</h2>
                <p className="text-sm">{description}</p>
            </section>
        </div>
    );
};

export default DashboardCard;
