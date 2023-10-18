import React from 'react'
import '../CSS/Dashboard.css'
import { FaStarOfLife } from 'react-icons/fa'
import { SiRiotgames } from 'react-icons/si'
import { FiPlus } from 'react-icons/fi'
import { BiSolidCart } from 'react-icons/bi'
import { SiWattpad } from 'react-icons/si'
import { BsDiscord } from 'react-icons/bs'
import { GoHomeFill } from 'react-icons/go'
import { AiOutlineRight } from 'react-icons/ai'
import { HiMiniTicket } from 'react-icons/hi2'
import graph1 from '../assets/graph1.png'
import graph2 from '../assets/graph2.png'
import user from '../assets/user.jpg'

const Dashboard = () => {
    return (
        <div className='dashboard_container'>
            <div className='text'>Dashboard</div>
            <div className='sec'>
                <div className='sec1'>
                    <div className='balance_card'>
                        <div className='layer1'>
                            <div className=''>Available balance</div>
                            <div className='toggle'>
                                <div>Credits</div>
                                <div>
                                    <input type="checkbox" id="switch" />
                                    <label htmlFor="switch">Togg</label>
                                </div>
                            </div>
                        </div>
                        <div className='layer2'>$12,234</div>
                        <div className='layer3'>
                            <div className='cardpin'>
                                <div className='card_no'>
                                    <FaStarOfLife />
                                    <FaStarOfLife />
                                    <FaStarOfLife />
                                    <FaStarOfLife />
                                </div>
                                <div className=''>4532</div>
                            </div>
                            <div className='circles'>
                                <div className='c1'></div>
                                <div className='c2'></div>
                            </div>
                        </div>
                    </div>

                    <div className='payment_limit'>
                        <div className='sections'>
                            <div className='sections_text'>Internet Payment Limit</div>
                            <div className='sections_limit'>$ 1,200/3,000</div>
                        </div>
                        <div className='progressbar_back'>
                            <div className='progressbar_front'></div>
                        </div>

                        <div className='insights'>
                            <div className='insights_sec1'>
                                <div className='graphline'>
                                    <img src={graph1} alt="graph_img" className='graph_img' />
                                </div>
                                <div className='texts'>
                                    <div className='insight_text1'>Income</div>
                                    <div className='insight_text2'>$ 5,700</div>
                                </div>
                            </div>
                            <div className='insights_sec2'>
                                <div className='graphline'>
                                    <img src={graph2} alt="graph_img" className='graph_img' />
                                </div>
                                <div className='texts'>
                                    <div className='insight_text1'>Spendings</div>
                                    <div className='insight_text2'>$ 2,254</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='spendings'>
                        <div className='headers'>
                            <div className='header1'>Latest spendings</div>
                            <div className='view'>View all</div>
                        </div>
                        <hr />
                        <div className='spendings_items'>
                            <div className='spendings_item item1'>
                                <div className='spending_item_1'>
                                    <div className='item1_1'><BiSolidCart /></div>
                                    <div className='item1_2'>
                                        <div className='spending_name'>Housekeeping</div>
                                        <div className='spending_date'>May 23, 2022 at 4:20 PM</div>
                                    </div>
                                </div>
                                <div className='spending_item_2'>
                                    <div className='item2_1'>- $32.50</div>
                                    <div className='item2_2'><AiOutlineRight /></div>
                                </div>
                            </div>
                            <div className='spendings_item item2'>
                                <div className='spending_item_1'>
                                    <div className='item1_1'><GoHomeFill /></div>
                                    <div className='item1_2'>
                                        <div className='spending_name'>Online store</div>
                                        <div className='spending_date'>May 23, 2022 at 8:20 PM</div>
                                    </div>
                                </div>
                                <div className='spending_item_2'>
                                    <div className='item2_1'>- $4.20</div>
                                    <div className='item2_2'><AiOutlineRight /></div>
                                </div>
                            </div>
                            <div className='spendings_item item3'>
                                <div className='spending_item_1'>
                                    <div className='item1_1'><HiMiniTicket /></div>
                                    <div className='item1_2'>
                                        <div className='spending_name'>Tickets</div>
                                        <div className='spending_date'>May 23, 2022 at 1.:30 PM</div>
                                    </div>
                                </div>
                                <div className='spending_item_2'>
                                    <div className='item2_1'>- $100.29</div>
                                    <div className='item2_2'><AiOutlineRight /></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=''></div>
                </div>
                <div className='sec2'>
                    <div className='expenses'>
                        <div className='expense_layer'>
                            <div>Expenses statistics</div>
                            <div>
                                <select className='week'>
                                    <option>Week</option>
                                    <option>Month</option>
                                    <option>Year</option>
                                </select>
                            </div>
                        </div>
                        <div className='graph'>
                            <div className='graph_item'>120K</div>
                            <div className='graph_item'>90K</div>
                            <div className='graph_item'>60K</div>
                            <div className='graph_item'>30K</div>
                            <div className='graph_item'>20K</div>
                            <div className='graph_item diff'>
                                <div className='graph_items'>May 12</div>
                                <div className='graph_items'>May 13</div>
                                <div className='graph_items'>May 14</div>
                                <div className='graph_items'>May 15</div>
                                <div className='graph_items'>May 16</div>
                                <div className='graph_items'>May 17</div>
                            </div>
                        </div>
                    </div>

                    <div className='send_money_sec'>
                        <div className='headers'>
                            <div className='header1'>Send money to</div>
                            <div className='gray'><AiOutlineRight /></div>
                        </div>
                        <hr />
                        <div className='persons'>
                            <div className='person add'><FiPlus /></div>
                            <div className='person'><img src={user} alt='person' /></div>
                            <div className='person'><img src={user} alt='person' /></div>
                            <div className='person'><img src={user} alt='person' /></div>
                            <div className='person'><img src={user} alt='person' /></div>
                        </div>
                    </div>

                    <div className="payments">
                        <div className='headers'>
                            <div className='header1'>Scheduled payments</div>
                        </div>
                        <div className='payment_options'>
                            <div className='option_info'>
                                <div className='price'>$13.99/m</div>
                                <div className='payment_type'>
                                    <div className='type_logo'><SiRiotgames /></div>
                                    <div className='type_name'>Ps5 game</div>
                                </div>
                            </div>

                            <div className='option_info discord'>
                                <div className='price'>$1.99/m</div>
                                <div className='payment_type'>
                                    <div className='type_logo'><BsDiscord /></div>
                                    <div className='type_name'>Discord</div>
                                </div>
                            </div>

                            <div className='option_info wattpad'>
                                <div className='price'>$10.00/m</div>
                                <div className='payment_type'>
                                    <div className='type_logo'><SiWattpad /></div>
                                    <div className='type_name'>Wattpad</div>
                                </div>
                            </div>


                            <div className='option_info'>
                                <div className='price'>$10.00/m</div>
                                <div className='payment_type'>
                                    <div className='type_logo'><SiRiotgames /></div>
                                    <div className='type_name'>Ps5 Game</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard