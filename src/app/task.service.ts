import { Injectable } from '@angular/core';
import {WebrequestService} from "./webrequest.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebrequestService) { }

  createList(title:string){
    //send webrequest to create list
    return this.webReqService.post('lists', {title});
  }

  getLists(){
    return this.webReqService.get('lists');
  }

  getTasks(listId: string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
  createTasks(title:string, listId:string){
    //send webrequest to create list
    return this.webReqService.post(`lists/${listId}/tasks`, {title});
  }

  complete(task: any){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed: !task.completed
    });
  }

}
