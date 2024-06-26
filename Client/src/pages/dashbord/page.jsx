import DashboardCard from './components/Dashboaed-card';
import { dollerSign, userAvatar, creditCard, checkIcon } from '../../assets/icons/icons';
import Barchart from './components/barChart';

const Dashbord = _ => {
    return <>
        <div className="bg-black text-white h-screen flex flex-col gap-5 w-full font-poppins">
            <h1 className="font-semibold text-4xl mx-6 text-center py-10 cursor-pointer">dashbord</h1>
            <div className="mx-auto py-8">
                <div className="flex flex-col gap-5 w-full">
                    <section className="grid w-full gap-4 grid-cols-1 gap-x-8 transiton-all sm:grid-cols-2 xl:grid-cols-4">
                    <DashboardCard 
                            label='Revenu'
                            icon='negative'
                            amount='MAD 10.000'
                            text='-1.4%'
                            description='Le revenu totel de ce mois.'
                        />
                        <DashboardCard 
                            label='Client'
                            icon='positif'
                            text='augmenter'
                            amount='+200'
                            description='Vous avez recus +30 client ce mois.'
                        />
                        <DashboardCard 
                            label='Profit'
                            icon='negative'
                            text='-100 DH'
                            amount='MAD 3.000'
                            description='Le total revenu generer ce mois.'
                        />
                        <DashboardCard 
                            label='Sales'
                            icon='positive'
                            text='augmenter'
                            amount='+90'
                            description='+10 ce mois'
                        />
                    </section>
                    <section className="grid grid-cols gap-4 transitin-all lg:grid-cols-2">
                        <Barchart />
                    </section>
                </div>
            </div>
        </div>
    </>
}


export default Dashbord;