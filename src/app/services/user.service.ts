import { Injectable, Injector } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import MockUserDetail from './mock/userDetail';
import MockPlayList from './mock/playList';

@Injectable()
export class UserService extends BaseHttpService {

  constructor(private injector: Injector) {
    super(injector);
  }

  getUserPlayList(uid: number) {
    if (this.dev) {
      return Promise.resolve(MockPlayList);
    }
    return this.get(`user/playlist?uid=${uid}`);
  }

  getUserDetail(uid) {
    if (this.dev) {
      return Promise.resolve(MockUserDetail);
    }
    return this.get(`user/detail?uid=${uid}`);
  }
}
