import {hash} from '@pop-util/hash';

export function shortID(): String {
  return Math.random().toString(36).substr(2);
}

export function UID({prefix = undefined, prefixHash = true, groupCount = 4} = {}): String {
  const groupIds = [];

  const prefixId = prefix 
    ? prefixHash ? hash(prefix) : prefix
    : undefined;
  if(prefixId) {
    groupIds.push(prefixId);
  }

  const groupIdsCount = prefix ? groupCount - 1 : groupCount;
  for(let i = 0; i < groupIdsCount; i++) {
    groupIds.push(shortID());
  }

  return groupIds.join('-');
};