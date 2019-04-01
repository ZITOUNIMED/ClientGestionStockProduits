import { SavePrincipalAction } from './save.principal.action';
import { SAVE_PRINCIPAL } from './save.principal.action';
import { Principal } from './model/principal.model';

export function principalReducer(state: Principal, action: SavePrincipalAction){
  switch(action.type){
    case SAVE_PRINCIPAL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
