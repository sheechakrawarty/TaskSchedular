const tasks = [];

const elements={
    title: document.getElementById('title'),
    dueDate: document.getElementById('dueDate'),
    effort: document.getElementById('effort'),
    importance: document.getElementById('importance'),
    description: document.getElementById('description'),
    startDate: document.getElementById('startDate'),
    validateTask: document.getElementById('addTask')

}

function validateTask(t){
      if(!t.title || typeof t.title !== 'string' || t.title.trim().length===0) 
        return 'Title is required';
      if(t.dueDate && isNaN(new Date(t.dueDate))) return 'Invalid due date';
      if(t.effort==null) 
        return 'Effort must be a non-negative number';
      if(t.importance==null || isNaN(Number(t.importance)) || Number(t.importance) < 1 || Number(t.importance) > 10) 
        return 'Importance must be 1-10';
      return null;
    }

elements.validateTask.addEventListener('click', (e)=>{ e.preventDefault(); analyzeTasks(); });

function analyzeTasks(){
    const div = document.createElement('div'); div.className='task-item';
    div.innerHTML="task added";
    console.log("hey");
}