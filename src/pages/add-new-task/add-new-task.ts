import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Task } from '../../Model/Task';
import { TaskManagerProvider } from '../../providers/task-manager/task-manager'

/**
 * Generated class for the AddNewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'add-new-task.html'
})
export class AddNewTaskPage {

  task= new Task();


  constructor(public navCtrl: NavController, public navParams: NavParams, private taskManager: TaskManagerProvider) {
  
  }

  submitNewTask(){
    console.log(this.task.taskname);
    this.taskManager.saveNewTask(this.task);
    this.navCtrl.pop();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTaskPage');
  }

}
