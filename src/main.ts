import './style.css'
import {User} from './User'
import { Company } from './Company';
import {CustomMap} from './CustomMap'

const userBtn = document.getElementById('user')!;
const companyBtn = document.getElementById('company')!;
const map = new CustomMap('app');

userBtn.onclick = ()=>{
  const user = new User();
  map.addMarker(user);
}

companyBtn.onclick = ()=>{
  const company = new Company();
  map.addMarker(company)
  
}



