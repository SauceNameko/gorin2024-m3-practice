
import './App.css'
import { Event } from './components/Event';
import { Modal } from './components/Modal';
import { useEvent } from './hooks/useEvent'
import { useTheme } from './hooks/useTheme';

function App() {
  const { event, handleClickIcon, isModal, id,setIsModal } = useEvent();
  const { handleClickToggle, isCommand, handleClickCountChange, count, theme,handleClickClose } = useTheme(setIsModal);
  const item = theme[count];
  
  return (
    <div className='all' style={{ backgroundColor: item.map.back }} >
      {Object.keys(event).length != 0 &&
        <>
          {!isModal ?
            <Event Event event={event} onIcon={handleClickIcon}
             onToggle={handleClickToggle} isCommand={isCommand} 
             onCountChange={handleClickCountChange} item={item}></Event>
            :
            <Modal event={event} id={id}  item={item} onClose={handleClickClose} count={count}></Modal>}
        </>
      }

    </div>
  )
}

export default App
