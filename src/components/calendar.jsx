import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import harrier from '../assets/harrier.jpg'
import { CiClock2 } from "react-icons/ci";

const calendar = () => (
    <div>
        <div className='flex w-full gap-10'>
            <div className='w-[80%] flex justify-between'>
                {/* //tailbar */}
                <div className='w-[40%] flex flex-col gap-5'>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#F5812C]'></div>
                        <p>Амралтын өдөр</p>
                    </div>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#8B8B8B]'></div>
                        <p> Ажлын өдөр</p>
                    </div>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#45539D]'></div>
                        <p>Билгийн тооллын өдөр</p>
                    </div>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#dc2626]'></div>
                        <p>Балжинямтай өдөр</p>
                    </div>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#dc2626]'></div>
                        <p>Дашнямтай өдөр</p>
                    </div>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#dc2626]'></div>
                        <p>Тэрсүүд өдөр</p>
                    </div>
                    <div className='flex w-full items-end gap-5'>
                        <div className='w-[20px] h-[20px] bg-[#dc2626]'></div>
                        <p>Модон хохимой өдөр</p>
                    </div>
                </div>
                {/* // calendar */}
                <div className='w-[60%]'>
                    <div className='border w-[100%] h-[50vh]'>
                        <div className='w-[100%]'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                    <DemoItem>
                                        <DateCalendar defaultValue={dayjs('2022-04-17')} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
            </div>
            {/* //new ad */}
            <div className='w-[40%]'>
                <p className=''>Зар мэдээ</p>
                <div className='border w-[100%] h-[50vh]'>
                    <div />
                    <div className='w-full max-w-5xl p-5 pb-5 mx-auto mb-5' >
                        <div className='flex'>
                            <img src={harrier} className='w-[40%]' />
                            <div>
                                <p className='text-sm' > 2007-2018 toyota harrier ipsum dolor, sit amet consectetur</p>
                              <p className='flex'>  <CiClock2 className='w-4 h-4 text-gray-500'  /> 1минутын өмнө</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={harrier} className='w-[40%]' />
                            <div>
                                <p className='text-sm' > 2007-2018 toyota harrier ipsum dolor, sit amet consectetur</p>
                              <p className='flex'>  <CiClock2 className='w-4 h-4 text-gray-500'  /> 1минутын өмнө</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={harrier} className='w-[40%]' />
                            <div>
                                <p className='text-sm' > 2007-2018 toyota harrier ipsum dolor, sit amet consectetur</p>
                              <p className='flex'>  <CiClock2 className='w-4 h-4 text-gray-500'  /> 1минутын өмнө</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={harrier} className='w-[40%]' />
                            <div>
                                <p className='text-sm' > 2007-2018 toyota harrier ipsum dolor, sit amet consectetur</p>
                              <p className='flex'>  <CiClock2 className='w-4 h-4 text-gray-500'  /> 1минутын өмнө</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={harrier} className='w-[40%]' />
                            <div>
                                <p className='text-sm' > 2007-2018 toyota harrier ipsum dolor, sit amet consectetur</p>
                              <p className='flex'>  <CiClock2 className='w-4 h-4 text-gray-500'  /> 1минутын өмнө</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
 </div>
    
)

export default calendar;
