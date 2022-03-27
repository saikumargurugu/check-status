import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import compImage from '../../assets/screenusermanagement.png'

const SideBar = ({
    panelData
}) => {

    const history = useNavigate()
    const Sidebar = styled.div`
    background-color:rgb(17, 24, 39);
    overflow-y: overlay;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }
    `
    const Selectdiv = styled.li`
     &:hover{
    background-color:rgb(16, 185, 129);
    opacity: 0.6;
    border-radius: 10px;
    }
    `
    const Border = styled.hr`
    border-color: rgb(45, 55, 72);
    `
    const SItem = styled.h1`
    color: rgb(209, 213, 219)
    `

    const [expand, setExpand] = useState(false)
    const [Selected, setSelected] = useState(undefined)

    const handelClickedItem = (item, pid, cid) => {
        if (Selected && Selected.pid === pid && Selected.cid === cid) {
            setExpand(!expand)
        } else if (item.subItems === true) {
            setExpand(true)
        } else {
            setExpand(!expand)
        }
        /* console.log(item, pid, cid) */
        setSelected({
            "item": item,
            "pid": pid,
            "cid": cid
        });
        if(item.subItems===false){
            history(item.route)
        }
    }

    return (
        <Sidebar className='w-80 h-screen sticky top-0 z-50 p-4' >
        <div>
        <img src={compImage} width={60} height={60} className='m-3' alt='dfd' />
        </div>
        <Card className='flex m-3 p-4' style={{backgroundColor:'#1f242e'}} >
            <div className='flex-auto' >
                <h1 className=' text-white font-bold text-lg' >
                Acme Inc
                </h1>
                <h1 className=' text-white text-sm' >
                Your Tire :Premium
                </h1>
            </div>
            <div className='flex-none' style={{alignSelf:'center'}} >
            <SplitscreenIcon sx={{color:'white'}} />
            </div>
        </Card>
            <Border className='my-8' />
            {panelData.map((pan, pIdx) => (
                <>
                    <div className='h-auto'>
                        <ul className='text-red-500 font-bold text-xs'>{pan.title}</ul>
                        {pan.items.map((item, cIdx) => (
                            <>
                                <Selectdiv className='relative h-auto pl-2 py-2 ml-2 my-2 flex flex-row items-center cursor-pointer'
                                    onClick={() => handelClickedItem(item, pIdx, cIdx)}
                                >
                                    {item.icon}
                                    <SItem className='text-white font-bold text-sm px-2 '>
                                        {item.title}
                                    </SItem>
                                    {item.subItems ? <>{(expand && (Selected?.pid === pIdx && Selected?.cid === cIdx)) ? <ExpandLess sx={{
                                        color: 'white'
                                    }} /> : <ExpandMore sx={{
                                        color: 'white'
                                    }} />}</> : <></>}
                                </Selectdiv>
                                {(expand && Selected?.pid === pIdx && Selected?.cid === cIdx) && item.subItems && item.items.map(item => (
                                    <Selectdiv className='h-auto  pl-2 ml-6 my-2 flex flex-row  items-center'>
                                        {item.icon}
                                        <SItem className=' text-white font-bold px-2 text-sm cursor-pointer'>
                                            {item.title}
                                        </SItem>
                                    </Selectdiv>
                                ))
                                }
                            </>
                        ))}
                    </div>
                </>
            ))}
            <Border className='my-8' />
        </Sidebar>
    )
}

export default SideBar