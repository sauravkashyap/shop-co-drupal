import { ELEMENT_CATEGORIES } from '../constants/elements';

/**
 * Gets the default classes for a tag/label combination.
 */
export const getDefaultClasses = (tag, label) => {
  let element = null;
  for (const cat of ELEMENT_CATEGORIES) {
    element = cat.elements.find(el => el.type === tag && el.label === label);
    if (element) break;
  }
  return element?.defaultProps?.class || '';
};

/**
 * Splits a class string into an array of unique classes.
 */
export const splitClasses = (classString) => {
  if (!classString) return [];
  return classString.split(/\s+/).filter(Boolean);
};

/**
 * Filters out default classes from a class string.
 */
export const getCustomClassesOnly = (currentClasses, tag, label) => {
  const defaultClasses = splitClasses(getDefaultClasses(tag, label));
  const currentArr = splitClasses(currentClasses);
  return currentArr.filter(cls => !defaultClasses.includes(cls)).join(' ');
};

/**
 * Merges custom classes with default classes.
 */
export const mergeClasses = (customClasses, tag, label) => {
  const defaultClasses = getDefaultClasses(tag, label);
  const customArr = splitClasses(customClasses);
  const defaultArr = splitClasses(defaultClasses);
  
  // Combine unique classes
  const combined = Array.from(new Set([...defaultArr, ...customArr]));
  return combined.join(' ');
};
