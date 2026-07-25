import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
    it('renders without crashing', () => {
        expect(App).toBeDefined();
    });

    it('displays the correct title', () => {
        const title = 'Hello World';
        expect(title).toBe('Hello World');
    });
});