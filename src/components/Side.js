import React from 'react'
import '../components/Side.css'
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Side() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchIcon />
                <input type='text' placeholder='search or start new chat'/>
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Side