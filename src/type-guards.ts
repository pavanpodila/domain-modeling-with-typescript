import { BloodGroup, GroupA } from './unions';

function printBloodGroup(group: BloodGroup) {
  if (isGroupA(group)) {
    console.log('A');
  } else {
    console.log(`${group} is of other type`);
  }
}

function isGroupA(group: BloodGroup): group is GroupA {
  return group instanceof GroupA;
}
