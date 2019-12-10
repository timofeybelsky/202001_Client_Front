'use strict';

import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls.js'

import createTaskListItemElem from './task.js';
import {getTask, createTask, updateTask, deleteTask} from "./crud.js";

const addTask = task => createTaskListItemElem(task, onUpdateClick, onDeleteClick);

const onUpdateClick = ;

const onDeleteClick = ;

addTaskButtonElem.onclick = async function (e) {

};

resetInputButtonElem.onlick = function(e) {

};

window.onload = async () => {

};

