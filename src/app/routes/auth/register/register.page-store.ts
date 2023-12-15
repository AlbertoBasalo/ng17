import { Injectable, Injector, inject } from '@angular/core';
import { NULL_USER_TOKEN, UserToken } from '@shared/domain/user-token.type';
import { PageStore } from '@shared/services/page.store';
import { AuthService } from '../auth.service';
import { Register } from './register.type';

@Injectable()
export class RegisterPageStore extends PageStore {
  // Injection division
  readonly #service$ = inject(AuthService);

  // State division
  #postRegisterState = this.addState<UserToken>(NULL_USER_TOKEN);

  constructor(injector: Injector) {
    super(injector);
    this.setTitle('Register to create your account.');
  }

  // Commands division
  postRegister(register: Partial<Register>) {
    return this.dispatch(this.#service$.register$(register), this.#postRegisterState);
  }
}
