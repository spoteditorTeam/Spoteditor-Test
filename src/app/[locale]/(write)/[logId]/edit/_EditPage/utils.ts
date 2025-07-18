import { LogEditFormValues } from '@/types/log';
import { FieldValues } from 'react-hook-form';

/* 폼 데이터에서 변경된 필드만 추출 */
export function extractDirtyValues<T extends FieldValues>(
  dirtyFields: any,
  allValues: T
): Partial<T> {
  if (!dirtyFields || !allValues) return {};
  if (typeof dirtyFields !== 'object' || dirtyFields === true) return allValues;

  const result: any = Array.isArray(dirtyFields) ? [] : {};

  for (const key in dirtyFields) {
    if (dirtyFields[key] && allValues[key] !== undefined) {
      result[key] =
        dirtyFields[key] === true
          ? allValues[key]
          : extractDirtyValues(dirtyFields[key], allValues[key]);
    }
  }

  return result;
}

/* 변경된 필드만 추출하는 유틸 함수 */
export function pickDirtyFields<T>(dirty: Partial<T> | undefined, keys: (keyof T)[]): Partial<T> {
  if (!dirty) return {};
  return keys.reduce((acc, key) => {
    if (dirty[key] !== undefined) acc[key] = dirty[key];
    return acc;
  }, {} as Partial<T>);
}

export function hasImageOrderChanged(
  prevImages: LogEditFormValues['places'][number]['placeImages'],
  currImages: LogEditFormValues['places'][number]['placeImages']
) {
  if (prevImages.length !== currImages.length) return true;
  return prevImages.some((img, idx) => img.place_image_id !== currImages[idx].place_image_id);
}
