import { run } from './app/app';
import './main.scss';
import './main.css';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
import './babel';
import './header';

const alertService = new AlertService();
const componentService = new ComponentService();
 
run(alertService, componentService);