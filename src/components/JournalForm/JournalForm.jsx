import './JournalForm.css';
import Button from '../Button/Button';


function JournalForm({onSubmit}) {
 
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formPops = Object.fromEntries(formData)
        onSubmit(formPops)
    }

  return (
    <>
        <form className="journal-form" onSubmit={addJournalItem} >
            <input type="text" name="title"/>
            <input type="date" name="date" />
            <input type="text" name="text" />
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <Button text="Сохранить" onClick={() => {console.log('Работает')}}/>
        </form>
    </>
  );
}

export default JournalForm;
