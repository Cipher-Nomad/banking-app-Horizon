import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Akash', lastName: 'SG', email: 'akashsg1398@gmail.com' }

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName || 'Guest'} subtext='Access and manage your account and transaction efficiently.'></HeaderBox>
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}></TotalBalanceBox>
                </header>
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.45 }, { currentBalance: 543.21 }]}>
            </RightSidebar>
        </section >
    )
}

export default Home