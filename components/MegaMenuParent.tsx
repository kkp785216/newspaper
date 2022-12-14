import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import { useSelector, useDispatch } from 'react-redux';
import action from '../redux/action';
import MegaMenuParentCurrent from './MegaMenuParentCurrent';

const MegaMenuParent = ({ config_menu }) => {

    const { category, mega_menu_parent } = useSelector(state => state);
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState();
    const [activeState, setActiveState] = useState(config_menu);

    useEffect(() => {
        setActiveMenu(`${config_menu.url}_all`);
        !mega_menu_parent[`${config_menu.url}_all`] &&
            dispatch(action({
                type: 'MEGA_MENU_PARENT',
                url: config_menu.url,
                category_type: config_menu.type,
                page: 1
            }));
        // eslint-disable-next-line
    }, []);

    const handleMegaMenu = (input) => {
        setActiveMenu(input.type === 'parent' ? `${input.url}_all` : input.url);
        setActiveState(input);
        !mega_menu_parent[input.type === 'parent' ? `${input.url}_all` : input.url] &&
            dispatch(action({
                type: 'MEGA_MENU_PARENT',
                url: input.url,
                category_type: input.type,
                page: 1
            }));
    }

    return (
        <div className="absolute left-6 right-6 top-full z-20 bg-white flex shadow-md border-t menu-list opacity-0 invisible transition-all duration-150">
            <div className='w-1/6 p-6 border-r'>
                <ul>
                    <li onMouseEnter={e=>handleMegaMenu(config_menu)}><Links className={`block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize ${activeMenu === `${config_menu.url}_all` ? 'active' : ''}`} to={`/category/${config_menu.url}`}>All</Links></li>
                    {category.filter(a => a.parent === config_menu.url).map((list_menu, i) => (
                        list_menu.url !== config_menu.url && <li key={i} onMouseEnter={e=>handleMegaMenu(list_menu)}><Links className={`block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize ${activeMenu === list_menu.url ? 'active' : ''}`} to={`/category/${config_menu.url}/${list_menu.url}`}>{list_menu.name}</Links></li>
                    ))}
                </ul>
            </div>
            {mega_menu_parent[activeMenu] && <MegaMenuParentCurrent key={activeMenu} active_menu={mega_menu_parent[activeMenu]} activeState={activeState} />}
        </div>
    )
}

export default MegaMenuParent