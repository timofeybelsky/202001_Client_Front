import {serverIP, serverPort, taskPath, tasksPath} from "./rest_path.js";

const fetchJson = async (url, options) => {
    const response = await fetch(url, options);
    return response.json();
};

export const getTask = () => fetchJson(`http://${serverIP}:${serverPort}${tasksPath}`);

export const createTask = (task) =>
    fetchJson(`http://${serverIP}:${serverPort}${taskPath}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(task),
    });

export const updateTask = (id, isDone) =>
    fetchJson(`http://${serverIP}:${serverPort}${taskPath}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({isDone: !isDone}),
    });

export const deleteTask = (id) =>
    fetchJson(`http://${serverIP}:${serverPort}${taskPath}/${id}`, {
        method: 'DELETE',
    });