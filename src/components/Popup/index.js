import { setPopup } from '../../slices/globalSlice';
import { useDispatch, useSelector } from 'react-redux';
import scroll from '../../utils/scroll';

import './Popup.scss';

function Popup({title, name, render}) {
    const dispatch = useDispatch();
    const popup = useSelector(state => state.global[name]);

    let classNames = 'popup';

    if (popup) {
        classNames += ' show';
    } else {
        classNames += ' hide';
    }

    scroll(popup);

    return (
        <div className={classNames}>
            <div onClick={(e) => {
                if (e.target.classList.contains('popup__container')) {
                    dispatch(setPopup({name: name, type: false}));
                }
            }} className="popup__container">
                <div className="popup__content">
                    <div className="popup__control-panel">
                        <div className="popup__control-panel__title">{title}</div>
                        <div onClick={() => dispatch(setPopup({name: name, type: false}))} className="popup__control-panel__close">&#x2715;</div>
                    </div>
                    <div className="popup__main">
                        {render()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;