
import './App.css'
import { Event } from './components/Event';
import { Modal } from './components/Modal';
import { useEvent } from './hooks/useEvent'
import { useTheme } from './hooks/useTheme';

function App() {
  const { event, handleClickIcon, isModal, id } = useEvent();
  const { handleClickToggle, isCommand, handleClickCountChange } = useTheme();

  return (
    <div className='all'>
      {Object.keys(event).length != 0 &&
        <>
          {!isModal ?
          <Event Event event={event} onIcon={handleClickIcon} onToggle={handleClickToggle} isCommand={isCommand} onCountChange={handleClickCountChange}></Event>
            :
          <Modal event={event} id={id} ></Modal>}
        </>
      }

    </div>
  )
}

export default App
