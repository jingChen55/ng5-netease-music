import { Injectable, Injector } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class UserService extends BaseHttpService {

  constructor(private injector: Injector) {
    super(injector);
  }

  getUserPlayList(uid: number) {
    return this.get(`user/playlist?uid=${uid}`);
  }
}
