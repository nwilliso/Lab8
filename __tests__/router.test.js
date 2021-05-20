/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";

describe('pushToHistory test', () => {
    test('no push', () => {
        expect(history.state).toBe(null);
        expect(history.length).toBe(1);
    });
    test('push entry', () => {
        const x = Math.floor(Math.random * 10);
        pushToHistory('entry', x);
        expect(history.state.page).toBe('entry'+x);
        expect(window.location.hash).toBe('#entry'+x)
        expect(history.length).toBe(2);
    });
    test('push home', () => {
        pushToHistory('',7);
        expect(history.state.page).toBe(undefined);
        expect(window.location.hash).toBe('')
        expect(history.length).toBe(3);
    });
    test('push settings', () => {
        pushToHistory('settings',0);
        expect(history.state.page).toBe('settings');
        expect(window.location.hash).toBe('#settings')
        expect(history.length).toBe(4);
    });
});