import { getFooterCopy } from "./utils";
import { getLatestNotification } from "./utils";
import { getFullYear } from "./utils";

test('getFullYear should return', () => {
    const current_year = new Date().getFullYear();
    expect(getFullYear()).toEqual(current_year);
});
test('', () => {
    const str = 'Copyright 2023 - Holberton School main dashboard';
    
    expect(getFooterCopy(true)).toEqual(str);
})