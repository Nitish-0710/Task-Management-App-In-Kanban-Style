const STORAGE_KEY = "kanban_tasks";

export const loadTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Failed to add tasks:", error);
    return [];
  }
};


export const saveTasks = (tasks) => {
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
    catch(error){
        console.log("Failed Saving Tasks", error); 
    }
}