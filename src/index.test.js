import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have Users h1', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('H1')[0];

            expect(h1.innerHTML).to.equal('Users');

            done();
            window.close();
        });
    });
});
