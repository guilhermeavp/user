import { last, get, set, isArray, forEach } from 'lodash';

const pick = (object, paths) => {
    const item = {};

    paths.forEach((path) => set(
        item,
        last(path.split('.')),
        get(object, path)
    ));

    return item;
};

export const flatPick = (object, paths) => {
    if (isArray(object)) {
        forEach(object, (item, key) => {
            object[key] = pick(item, paths);
        });
    }
    else {
        object = pick(object, paths);
    }

    return object;
};

// Global validation fail function
export const failAction = (request, h, err) => {
    return err;
};