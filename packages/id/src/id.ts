import hash from '@pop-util/hash';

export function shortID(): String {
  return Math.random().toString(36).substr(2);
}

export function UID(
  {
    prefix,
    prefixHash = true,
    groupCount = 4,
    groupDelimiter = '-'
  }:
  {
    prefix?: string,
    prefixHash?: boolean,
    groupCount?: number,
    groupDelimiter?: string
  } = {}
): string {
  const groupIds = [];

  const hashedPrefix = prefix && prefixHash && hash(prefix);
  const prefixId = hashedPrefix || prefix;
  if (prefixId) {
    groupIds.push(prefixId);
  }

  const groupIdsCount: number = prefix ? groupCount - 1 : groupCount;
  for (let i = 0; i < groupIdsCount; i++) {
    groupIds.push(shortID());
  }

  return groupIds.join(groupDelimiter);
}
