#!/usr/bin/env node
import { writeJSON, readJSON } from "./helper/fileService.js";
import { addTaskToTaskList } from "./api/addTaskToTaskList.js";
import { deleteTaskInTaskList } from "./api/deleteTaskInTaskList.js";
import { updateTaskInTaskList } from "./api/updateTaskInTaskList.js";
import { markInProgressInTaskList } from "./api/markInProgressInTaskList.js";
import { markDoneInTaskList } from "./api/markDoneInTaskList.js";
import { listTaskinTaskList } from "./api/listTaskinTaskList.js";

let tasks = [];

const executeCommands = () => {
    try{
        const command = process.argv[2];
        
        switch (command) {
            case "add":
                addTaskToTaskList(tasks);
                break;
                
            case "update":
                updateTaskInTaskList(tasks);
                break;
            
            case "delete":
                deleteTaskInTaskList(tasks);
                break;
                
            case "mark-in-progress":
                markInProgressInTaskList(tasks);
                break;
            
            case "mark-done":
                markDoneInTaskList(tasks);
                break;
                
            case "list":
                listTaskinTaskList(tasks);
                break;
                    
            default:
                console.log("Invalid command. Please try again !!");
                break;
        }

        writeJSON(tasks);

    } catch(error){
        console.log("error:", error);
    }
}

const getTasks = () => {
    try {
        tasks = readJSON();

        console.log("Task fetch success");
      } catch (error) {
        console.log("Task fetch error:", error);
      }
}

getTasks();

executeCommands();