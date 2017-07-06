import { Subject } from 'rxjs/Subject';

export default class GreetingService {
  
  constructor() {
    this.subject = new Subject();
  }

  emit(value) {
    this.subject.next(value);
  }

  greetings() {
    return this.subject.asObservable();
  }
} 