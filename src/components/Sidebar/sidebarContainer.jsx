﻿import { connect } from 'react-redux';
import Sidebar from './sidebar';

let mapStateToProps = (state) => {
        return {
            friends: state.sidebar.friends
        }
    }

const SidebarContainer = connect(mapStateToProps) (Sidebar)

export default SidebarContainer;
