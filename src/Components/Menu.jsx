import React from 'react'
import '../CSS/Menu.css'
import logo from '../assets/logo.png'
import user from '../assets/user.jpg'
import { BiSolidDashboard } from 'react-icons/bi'
import { MdAnalytics } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { FaWallet, FaSignOutAlt } from 'react-icons/fa'

const Menu = () => {
    return (
        // <div className='absolute'>
        <div className='menu_container'>
            <div className="sec1 logo">
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div className="sec2">
                <div className='user'>
                    <img src={user} alt='user' className='user' />
                </div>
                <div className='welcome'>Welcome back,</div>
                <div className='name'>Tylor Simora</div>
            </div>
            <div className="sec3">
                <div className='budget'>$34,321</div>
                <div className='budget_text'>Monthly budget</div>
            </div>
            <div className="sec4">
                <div className='options dashboard'>
                    <div className='icon'><BiSolidDashboard /></div>
                    <div className='text'>Dashboard</div>
                </div>
                <div className='options'>
                    <div className='icon'><MdAnalytics /></div>
                    <div className='text'>Investments</div>
                </div>
                <div className='options'>
                    <div className='icon'><BiTransfer /></div>
                    <div className='text'>Transactions</div>
                </div>

                <div className='options'>
                    <div className='icon'><FaWallet /></div>
                    <div className='text'>Wallet</div>
                </div>
            </div>
            <div className="sec5">
                <div className='icon'><FaSignOutAlt /></div>
                <div className='text'>Sign-out</div>
            </div>
        </div>
        // </div>
    )
}

export default Menu